import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text, Modal, Dimensions } from 'react-native'
import Video from 'react-native-video';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Slider from 'react-native-slider';
import { commonCSS } from '../../commonCSS/GlobalCss';
import FontSize from '../../commonCSS/FontSize';
import { Colors } from '../../commonCSS/Colors';
import ImageComponent from './ImageComponent';
import { Images } from '../../assets';

type Iprops = {
    url: string,
    isPlaying: boolean,
    onPlay: () => void,
    isControlVisible: boolean,
}

const VideoPlayer = ({ isControlVisible, url, isPlaying, onPlay }: Iprops) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMute, setIsMute] = useState<boolean>(false);
    const [source, setSource] = useState<string>('');
    const [currentDuration, setcurrentDuration] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0.1) // provideing 0 will crash app 
    const [isDurationBarVisible, setDurationBarVisible] = useState<boolean>(true);

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    const onPlayClick = () => {
        setIsPaused(!isPaused)
        onPlay()
    }

    const onEnd = () => {
        videoRef?.current?.seek(0)
        videoRef2?.current?.seek(0)
        setIsPaused(true)
    }

    const onLoad = (e: any) => {
        setDuration(e.duration)
    }

    const onProgress = (e: any) => {
        setcurrentDuration(e.currentTime)
    }

    const onBackward = () => {
        if (isPlaying) {
            if (videoRef && videoRef?.current) {
                try {
                    videoRef?.current?.seek(currentDuration - 5)
                } catch (error) {
                    console.log('# UNABLE TO BACKWARD', error)
                }
            }
        }
    }

    const onForward = () => {
        if (isPlaying) {
            if (videoRef && videoRef?.current) {
                try {
                    videoRef?.current?.seek(currentDuration + 5)
                } catch (error) {
                    console.log('# UNABLE TO FORWARD', error)
                }
            }
        }
    }

    const onFullScreen = () => {
        setIsPaused(!isPaused)
        setVisible(!visible)
    }

    useEffect(() => {
        if (url !== undefined) {
            var videoUrl = url.split(" ").join("%20")
            setSource(videoUrl);
        }
    }, [url])

    function secondsToTime(seconds: number) {
        if (isNaN(seconds) || seconds < 0) {
            return "Invalid input";
        }
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.round(seconds % 60);
        if (hours > 0) {
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        } else {
            return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }
    }

    return (
        <View>
            <View style={s.mainContainer}>
                <Video
                    ref={videoRef}
                    source={{ uri: source }}
                    resizeMode='contain'
                    onBuffer={() => { }}
                    onError={() => { }}
                    style={s.video}
                    paused={isPaused || !isPlaying}
                    onEnd={onEnd}
                    onLoad={async (e: any) => [setDuration(e.duration), setIsPaused(false)]}
                    onProgress={onProgress}
                    muted={isMute}
                />

            </View>

        </View>
    )
}

export default VideoPlayer;

const s = StyleSheet.create({
    controller: {
        position: 'absolute',
        bottom: 0,
    },
    controllerx: {
        position: 'absolute',
        bottom:hp(8),
    },
    modalContainer: {
        transform: [{ rotate: '90deg' }],
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videox: {
        backgroundColor: Colors.black,
        width: hp(100),
        height: wp(100)
    },

    mainContainer: {
        width: wp(92),
        height: hp(24.5),
        borderRadius: wp(4),
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: hp(1),
        overflow: 'hidden'
    },
    video: {
        width: wp(92),
        height: hp(24.5),
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        width: hp(40),
        borderRadius: wp(2),
        justifyContent: 'space-between',
        height: hp('5%'),
    },
    imgBtn: {
        height: hp(5),
        width: hp(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: hp(2.5),
        width: hp(2.5)
    },
    duration: {
        fontWeight: '700',
        fontSize: FontSize.fs11,
        color: '#fff'
    },
    track: {
        height: hp(1.2),
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
        // width: wp(50)
    },
    thumb: {
        width: wp(5),
        height: wp(5),
        borderRadius: 15,
        backgroundColor: '#545455',
    }
})
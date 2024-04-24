import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontSize from '../commonCSS/FontSize';
import { commonCSS } from '../commonCSS/GlobalCss';

export default function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {

        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            if (hours > 12) {
                hours -= 12;
            }
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const newTimeString = `${hours}:${formattedMinutes} ${ampm}`;
            setTimeString(newTimeString);
        };
        const intervalId = setInterval(updateTime, 1000);
        updateTime();
        return () => clearInterval(intervalId);
    }, []);


    // get date
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const dayOfWeek = currentDate.getDay();
    const formattedDate = `${day} ${months[month]}, ${days[dayOfWeek]}`;
    return (
        <View style={{
            ...commonCSS.alicjc
        }}>
            <Text style={{
                fontFamily: Font.openSansBlack,
                fontWeight: '700',
                fontSize: hp(5),
                color: Colors.currentTime
            }}>{timeString}</Text>


            <Text style={{
                fontFamily: Font.MontserratBlack,
                fontWeight: '700',
                fontSize: FontSize.fs15,
                color: Colors.dateColor
            }}>{formattedDate}</Text>
        </View>
    );
}

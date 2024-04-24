import React from 'react';
import { View, Text } from 'react-native';
import SeminarsElement from '../../../component/SeminarsElement';
import { hp } from '../../../commonCSS/GlobalCss';
import Button from '../../../component/Button';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';

export default function OnlineSeminar({ navigation }: { navigation: any }) {
    return (
        <View>
            <SeminarsElement
                label={'Daily Stand-Up Call'}
                time={'12am - 1pm'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus sit felis tortor purus dolor sit amet, cons.'}
                date={'Jan 27, 2022'}
                Attendees={'10'}
                alter={true}
                onPressJoin={undefined}
            />
            <SeminarsElement
                label={'Daily Stand-Up Call'}
                time={'12am - 1pm'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus sit felis tortor purus dolor sit amet, cons.'}
                date={'Jan 27, 2022'}
                Attendees={'10'}
                alter={true}
                onPressJoin={undefined}
            />

            <View style={{
                paddingVertical: hp(1.5),
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <Button
                    label={'Create a Seminar'}
                    labelSize={FontSize.fs16}
                    fontWeight={'700'}
                    textColor={Colors.white}
                    fontFamily={Font.MontserratBlack}
                    marginLeft={''}
                    paddingHorizontal={''}
                    paddingVertical={''}
                    onPress={() => { navigation.navigate('CreateEvent') }}
                    width={'92'}
                    backgroundColor={Colors.ThemeColorDark}
                    isButtonDisabled={false}
                    btnHeight={'5.5'}
                    borderRadius={'1.5'}
                    borderColor={''}
                    borderwidth={''}
                />
            </View>
        </View>
    );
}

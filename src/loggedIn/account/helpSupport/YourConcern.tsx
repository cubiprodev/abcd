import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TicketElement from './TicketElement';
import Button from '../../../component/Button';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';

export default function YourConcern({ navigation }: { navigation: any }) {
    return (
        <View style={{ ...commonCSS.bodyFAFAFA, }}>
            <HeaderCustom
                title={'Your Concern'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{ ...commonCSS.pvh, }}>
                    <TicketElement
                        status={'Unresolved'}
                        ticketNo={'145543'}
                        onPressViewMore={() => { navigation.navigate('TicketsDetails', { key: 'concern' }) }} />
                    <TicketElement
                        status={'Resolved'}
                        ticketNo={'1245'}
                        onPressViewMore={() => { navigation.navigate('TicketsDetails', { key: 'concern' }) }}
                    />
                </ScrollView>
            </KeyboardAwareScrollView>

            <View style={{ width: wp(100), justifyContent: 'center', alignItems: 'center', paddingBottom: hp(1.5) }}>
                <Button
                    label={'Raise Concern'}
                    labelSize={FontSize.fs16}
                    fontWeight={'700'}
                    textColor={Colors.white}
                    fontFamily={Font.MontserratBlack}
                    marginLeft={''}
                    paddingHorizontal={''}
                    paddingVertical={''}
                    onPress={() => navigation.navigate('RaiseConcern')}
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

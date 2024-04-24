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

export default function ClientTickets({ navigation }: { navigation: any }) {
    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Client Tickets'}
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
                    <TicketElement status={'Unresolved'} ticketNo={'145543'} onPressViewMore={() => { navigation.navigate('TicketsDetails', { key: 'client' }) }} />
                    <TicketElement status={'Resolved'} ticketNo={'1245'} onPressViewMore={() => { navigation.navigate('TicketsDetails', { key: 'client' }) }} />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

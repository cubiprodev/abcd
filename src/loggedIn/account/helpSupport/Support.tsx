import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import AccountLabel from '../AccountLabel';

export default function Support({ navigation }: { navigation: any }) {

    
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Support'}
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
                    <AccountLabel
                        imgSource={undefined}
                        label={'Raise Concern'}
                        showArrow={true}
                        onPressx={() => { navigation.navigate('YourConcern') }}
                    />
                    <AccountLabel
                        imgSource={undefined}
                        label={'Client Tickets'}
                        showArrow={true}
                        onPressx={() => { navigation.navigate('ClientTickets') }}
                    />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';

export default function Refer({ navigation }: { navigation: any }) {
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Refer'}
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
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

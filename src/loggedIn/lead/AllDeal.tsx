import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AllDeal({ navigation }: { navigation: any }) {
    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'All Deal'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{}}>

                </ScrollView>
            </KeyboardAwareScrollView>

        </View>
    );
}

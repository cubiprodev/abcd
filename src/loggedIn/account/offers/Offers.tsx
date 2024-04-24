import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import OfferElement from './OfferElement';

export default function Offers({ navigation }: { navigation: any }) {
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Offers'}
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
                    <OfferElement imageHidden={false} />
                    <OfferElement imageHidden={true} />
                    <OfferElement imageHidden={false} />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

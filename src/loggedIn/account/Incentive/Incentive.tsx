import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import IncentiveElement from './IncentiveElement';

export default function Incentive({ navigation }: { navigation: any }) {
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Incentive Plan'}
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
                    <IncentiveElement label={'Earn 30% more'} />
                    <IncentiveElement label={'Earn 20% more'} />
                    <IncentiveElement label={'Earn 10% more'} />
                    <IncentiveElement label={'Earn 40% more'} />
                    <IncentiveElement label={'Earn 23% more'} />
                    <IncentiveElement label={'Earn 35% more'} />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, FlatList } from 'react-native';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import HeaderCustom from '../../component/HeaderCustom';
import Filter from '../../component/custom/Filter';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LeadData } from '../../data/Data';
import LeadElement from './comp/LeadElement';

export default function AllLead({ navigation, route }: { navigation: any, route: any }) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [heading, setHeading] = useState('');
    const [modifiedLeadData, setModifiedLeadData] = useState([]);

    const headingFromRoute = route?.params?.key;

    useEffect(() => {
        if (headingFromRoute && headingFromRoute !== undefined) {
            setHeading(headingFromRoute)
            if (headingFromRoute.toLowerCase() === 'junk') {
                const junkLeads = LeadData.filter(lead => lead.Status === 'Junk');
                setModifiedLeadData(junkLeads)
            } else if (headingFromRoute.toLowerCase() === 'new') {
                const junkLeads = LeadData.filter(lead => lead.Status === 'New');
                setModifiedLeadData(junkLeads)
            } else (
                setModifiedLeadData(LeadData)
            )
        }
    }, [headingFromRoute])




    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={heading}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={() => { Alert.alert('Under Devlopment'); }}
                btnText={'New Lead/Deal'}
                isSearchAvailable={true}
                searchKeyword={searchKeyword}
                onchangeText={(val) => { setSearchKeyword(val) }}
            />
            <Filter />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, ...commonCSS.pvh }}>
                <ScrollView>
                    <FlatList
                        data={modifiedLeadData}
                        renderItem={({ item, index }) => (
                            <View key={item.id}>
                                <LeadElement heading={item.name} status={item.Status} product={item.Product} />
                            </View>
                        )}
                    />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

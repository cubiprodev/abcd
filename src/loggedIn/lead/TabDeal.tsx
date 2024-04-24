import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';

export default function TabDeal({ navigation }: { navigation: any }) {
    return (
        <View style={s.tabZone}>
            <View style={s.main}>
                {/* <Text style={s.t1}>Deals</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AllLead', { key: 'All Deal' });
                    }}
                    style={{
                        borderBottomWidth: hp(0.05),
                        borderBottomColor: Colors.blueViewAll
                    }}>
                    <Text style={s.viewAll}>View All Deals</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    );
}

const s = StyleSheet.create({
    tabZone: {
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4)
    },
    main: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between'
    },
    t1: {
        ...commonCSS.titleMB70016,
        color: Colors.mainText
    },
    viewAll: {
        ...commonCSS.smallfw400fs10,
        fontFamily: Font.InterBlack,
        color: Colors.blueViewAll
    },

})

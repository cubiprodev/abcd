import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import AccordionLead from './comp/AccordionLead';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import FontSize from '../../commonCSS/FontSize';

export default function TabLead ( { navigation }: { navigation: any } ) {
    return (
        <View style={s.tabZone}>
            <View style={s.main}>
                {/* <Text style={s.t1}>Leads</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AllLead', { key: 'All Leads' });
                    }}
                    style={{
                        borderBottomWidth: hp(0.05),
                        borderBottomColor: Colors.blueViewAll
                    }}>
                    <Text style={s.viewAll}>View All Leads</Text>
                </TouchableOpacity> */}

            <ImageComponent source={Images.noTask} height={30} width={wp( 60 )} mode={'contain'} tintColor={undefined} />
            <Text style={s.t2}>No Medicine Found</Text>
            <Text style={{
                fontFamily: Font.InterBlack,
                fontWeight: '400',
                color: Colors.secondaryText94,
                paddingVertical: hp( 1 ),
                fontSize: FontSize.fs14
            }}>{`You've done a great job`}</Text>
            </View>


        </View>
    );
}

const s = StyleSheet.create( {
    tabZone: {
        paddingVertical: hp( 1.5 ),
        paddingHorizontal: wp( 4 )
    },
    main: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(9)
        // ...commonCSS.fdralic,
        // justifyContent: 'space-between'
    },
    t1: {
        ...commonCSS.titleMB70016,
        color: Colors.mainText
    },
    t2: {
        marginTop: hp( 3 ),
        fontFamily: Font.MontserratBlack,
        fontWeight: '700',
        fontSize: FontSize.fs22,
        color: '#191D21'
    },
    viewAll: {
        ...commonCSS.smallfw400fs10,
        fontFamily: Font.InterBlack,
        color: Colors.blueViewAll
    },

} )  

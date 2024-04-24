import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';

export default function TicketElement({ ticketNo, status, onPressViewMore }: { ticketNo: string, status: string, onPressViewMore: any }) {
    return (
        <View style={{
            ...commonCSS.boxShadowx,
            ...commonCSS.shadowBox
        }}>
            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                <View style={{ ...commonCSS.fdralic }}>
                    <Text style={{
                        ...commonCSS.titleMB70016, color: Colors.black
                    }}>Ticket No:</Text>
                    <Text style={{
                        ...commonCSS.headingIB60014,
                    }}>{` `}#{ticketNo}</Text>
                </View>

                <View style={{
                    ...commonCSS.fdralic,
                    backgroundColor: status.toLowerCase() === 'resolved' ? 'rgba(0, 186, 103, 0.1)' : Colors.lightError,
                    paddingHorizontal: wp(2),
                    paddingVertical: hp(0.3),
                }}>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontSize: FontSize.fs12,
                        fontWeight: '700',
                        color: status.toLowerCase() === 'resolved' ? Colors.brandGreen : Colors.error
                    }}>Status:</Text>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontSize: FontSize.fs12,
                        fontWeight: '500',
                        color: status.toLowerCase() === 'resolved' ? Colors.brandGreen : Colors.error
                    }}>{` `}{status}</Text>
                </View>
            </View>

            <View style={{ marginTop: hp(1) }}>
                <View style={{ ...commonCSS.fdralic }}>
                    <Text style={{
                        // ...commonCSS.titleMB70016,
                        fontFamily: Font.InterBold,
                        fontSize: FontSize.fs12,
                        fontWeight: '700',
                        color: Colors.black,

                    }}>Category:</Text>
                    <Text style={{
                        fontFamily: Font.InterBold,
                        fontSize: FontSize.fs12,
                        fontWeight: '700',
                        color: Colors.mainText,
                    }}>{` `} Lorem ipsum dolor sit amet </Text>
                </View>

                <Text style={{
                    marginVertical: hp(1),
                    fontFamily: Font.InterBlack,
                    fontSize: FontSize.fs10,
                    fontWeight: '500',
                    color: Colors.secondaryText94
                }}>Lorem ipsum dolor sit amet consectetur. Tincidunt pellent amet fringilla aliquam amet. Neque enas cras blandit blandit in proin vel mattis.</Text>


                <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', marginTop: hp(1) }}>
                    <TouchableOpacity onPress={onPressViewMore}>
                        <Text style={{
                            fontFamily: Font.InterBlack,
                            fontWeight: '700',
                            fontSize: FontSize.fs12,
                            color: Colors.brandGreen
                        }}>VIEW MORE</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontWeight: '700',
                        fontSize: FontSize.fs12,
                        color: Colors.secondaryText94
                    }}>27, Nov 2023</Text>
                </View>
            </View>
        </View >
    );
}

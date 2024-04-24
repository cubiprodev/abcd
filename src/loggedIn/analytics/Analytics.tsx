import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../commonCSS/Colors';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import TargetElement from '../../component/TargetElement';
import PerformanceChart from './comp/PerformanceChart';
import { product, routeDaySelection, stateList } from '../../data/Data';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import LineChartGraph from './comp/LineChartGraph';
import RadioButton from '../../component/RadioButton';
import Dropdown from '../../component/custom/DropDown';

const PerformanceData = [
    {
        trend: 'bullish',
        price: '₹508',
        label: 'New Leed'
    },
    {
        trend: 'bearish',
        price: '20',
        label: 'Total Sales'
    },
    {
        trend: 'bullish',
        price: '10k',
        label: 'Total Revenue'
    }
]


export default function Analytics({ navigation }: { navigation: any }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndexTwo, setSelectedIndexTwo] = useState(0);


    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedState, setSelectedState] = useState([]);



    // 
    useEffect(() => {
        setSelectedProduct(product[0])
        setSelectedState(stateList[0])
    }, [])

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Analytics'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''} isSearchAvailable={false} searchKeyword={''} onchangeText={undefined} />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{}}>
                    <View style={styles.targetZone}>
                        <View style={styles.r1}>
                            <Text style={styles.t1}>Targets</Text>

                            <TouchableOpacity style={styles.tdd}>
                                <Text style={styles.tw}>This week</Text>
                                <ImageComponent source={Images.downArrowBlack} height={2} width={hp(1.5)} mode={'contain'} />
                            </TouchableOpacity>
                        </View>
                        <TargetElement productName={'Kalpavriksha App'} revenue={'12,000'} achivedRevenue={'3000'} daysLeft={2} />
                        <TargetElement productName={'Kalpavriksha App'} revenue={'12,000'} achivedRevenue={'3000'} daysLeft={2} />
                    </View>


                    <View style={styles.weeklyPerformance}>
                        <Text style={[styles.t1, { paddingHorizontal: wp(4) }]}>Weekly Performance</Text>
                        <FlatList
                            data={PerformanceData}
                            horizontal
                            contentContainerStyle={{ marginTop: hp(1.5) }}
                            renderItem={({ item, index }) => (
                                <View style={{}}>
                                    <PerformanceChart data={item} />
                                </View>
                            )}
                        />
                    </View>

                    <View style={{ ...commonCSS.pvh, backgroundColor: Colors.white, }}>
                        <Text style={styles.t1}>Analytics</Text>

                        <View style={styles.ddSec}>
                            <View style={styles.box1}>
                                <Text style={styles.t2}>Product</Text>
                                <Dropdown
                                    data={product}
                                    onSelect={(val) => { setSelectedProduct(val); }}
                                    labelName={'name'}
                                    typeName={''}
                                    value={selectedProduct}
                                    isDisabled={false}
                                    optionWidth={wp(42)}
                                    lightBackgroundColor={true}
                                />
                            </View>

                            <View style={styles.box1}>
                                <Text style={styles.t2}>State</Text>
                                <Dropdown
                                    data={stateList}
                                    onSelect={(val) => { setSelectedState(val); }}
                                    labelName={'name'}
                                    typeName={''}
                                    value={selectedState}
                                    isDisabled={false}
                                    optionWidth={wp(42)}
                                    lightBackgroundColor={true}
                                />
                            </View>

                        </View>

                        <FlatList
                            data={routeDaySelection}
                            horizontal
                            contentContainerStyle={{ marginTop: hp(3) }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.optionZone, {
                                            backgroundColor: index === selectedIndex ? Colors.lightBrandColor : Colors.white,
                                            borderBottomWidth: index === selectedIndex ? hp(0.15) : 0,
                                        }]}
                                        onPress={() => setSelectedIndex(Number(index))}
                                    >
                                        <Text style={[styles.opt1, {
                                            color: index === selectedIndex ? Colors.ThemeColorDark : Colors.primartText,
                                        }]}>{item.name} </Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <View style={{ paddingVertical: hp(1.5), ...commonCSS.fdralic, justifyContent: 'space-between' }}>

                            <View style={{ width: wp(45) }}>
                                <Text style={styles.rt1}>Your revenue</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingTop: hp(0.5) }}>
                                    <Text style={styles.rt2}>₹ 10,000</Text>
                                    <Text style={styles.rt3}>/12000</Text>
                                </View>
                            </View>


                            <View style={{ width: wp(40) }}>
                                <Text style={styles.rt1}>Your Registrations</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingTop: hp(0.5) }}>
                                    <Text style={styles.rt2}>60</Text>
                                    <Text style={styles.rt3}>/75</Text>
                                </View>
                            </View>
                        </View>


                        <LineChartGraph />
                        <View style={{ height: hp(5) }}></View>
                    </View>

                    <View style={{ ...commonCSS.pvh, backgroundColor: Colors.white, }}>
                        <Text style={styles.t1}>Overall Analytics</Text>


                        <FlatList
                            data={routeDaySelection}
                            horizontal
                            contentContainerStyle={{ marginTop: hp(3) }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.optionZone, {
                                            backgroundColor: index === selectedIndexTwo ? Colors.lightBrandColor : Colors.white,
                                            borderBottomWidth: index === selectedIndexTwo ? hp(0.15) : 0,
                                        }]}
                                        onPress={() => setSelectedIndexTwo(Number(index))}
                                    >
                                        <Text style={[styles.opt1, {
                                            color: index === selectedIndexTwo ? Colors.ThemeColorDark : Colors.primartText,
                                        }]}>{item.name} </Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <View style={{ paddingVertical: hp(1.5), ...commonCSS.fdralic, justifyContent: 'space-between' }}>

                            <View style={{ width: wp(45) }}>
                                <Text style={styles.rt1}>Your revenue</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingTop: hp(0.5) }}>
                                    <Text style={styles.rt2}>₹ 10,000</Text>
                                    <Text style={styles.rt3}>/12000</Text>
                                </View>
                            </View>


                            <View style={{ width: wp(40) }}>
                                <Text style={styles.rt1}>Your Registrations</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingTop: hp(0.5) }}>
                                    <Text style={styles.rt2}>60</Text>
                                    <Text style={styles.rt3}>/75</Text>
                                </View>
                            </View>
                        </View>


                        <LineChartGraph />
                        <View style={{ height: hp(5) }}></View>
                    </View>


                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    targetZone: {
        ...commonCSS.pvh,
        backgroundColor: Colors.white,
    },
    r1: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between',
        paddingVertical: hp(1),
    },
    t1: {
        ...commonCSS.titleMB70016,
        color: Colors.mainText
    },
    tdd: {
        ...commonCSS.fdralic,
        // marginTop: hp(1.5),
        width: wp(22),
        justifyContent: 'space-between',
        backgroundColor: Colors.inactivegreyE9E9E9,
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.4),
        borderRadius: hp(1)
    },
    tw: {
        ...commonCSS.subTextIB40012secText,
        color: Colors.mainText
    },
    weeklyPerformance: {
        // ...commonCSS.pvh,
        paddingVertical: hp(1.5),
        backgroundColor: Colors.white,
        marginVertical: hp(1.5)
    },
    ddSec: {
        ...commonCSS.fdralic,
        // paddingTop: hp(1),
        marginTop: hp(1.5),
        justifyContent: 'space-between'
    },
    box1: {
        width: wp(42),
        marginTop: hp(1),
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorECECEC,
        paddingTop: hp(1),
        // paddingHorizontal: wp(3.5),
        borderRadius: hp(1),
    },
    t2: {
        fontFamily: Font.InterBold,
        fontSize: FontSize.fs12,
        color: Colors.black,
        paddingLeft: wp(4),
        fontWeight: '700'

    },
    optionZone: {
        ...commonCSS.alicjc,
        width: wp(23),
        height: hp(5),
        borderBottomColor: Colors.ThemeColorDark,
    },
    opt1: {
        fontFamily: Font.InterBlack,
        fontWeight: '500',
        fontSize: FontSize.fs14
    },
    rt1: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.secondaryText94,
        fontWeight: '500'
    },
    rt2: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs24,
        color: Colors.primartText,
        fontWeight: '700'
    },
    rt3: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs18,
        color: Colors.secondaryText94,
        fontWeight: '700'
    },








})

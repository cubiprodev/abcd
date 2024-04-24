import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import { Colors } from '../../commonCSS/Colors';
import ImageComponent from './ImageComponent';
import { Images } from '../../assets';
import { commonCSS } from '../../commonCSS/GlobalCss';
import { Menu } from 'react-native-material-menu';

const Dropdown = ({ data, onSelect, labelName, typeName, value, isDisabled, optionWidth, lightBackgroundColor }: { data: any, onSelect: any, labelName: any, typeName: string, value: any, isDisabled: boolean, optionWidth: any, lightBackgroundColor: boolean }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const selectOption = (option: any) => {
        setIsModalVisible(false);
        setSelectedOption(option);
        onSelect(option);
    }


    return (
        <View style={styles.main}>
            
            <TouchableOpacity
                onPress={isDisabled ? null : toggleModal}
                style={[styles.labelZone, {
                    justifyContent: typeName.length === 0 ? 'space-between' : undefined,
                    backgroundColor: lightBackgroundColor ? Colors.lightBrandColor : Colors.ThemeColorDark,
                }]}>
                {typeName.length !== 0 ?
                    <Text style={styles.typeName}>{typeName}</Text> : null
                }
                <Text style={[styles.labelName, {
                    width: typeName.length === 0 ? '90%' : '67%',
                    color: lightBackgroundColor ? Colors.mainText : Colors.whiteText,
                    fontWeight: lightBackgroundColor ? '500' : '700',
                    fontSize: lightBackgroundColor ? FontSize.fs12 : FontSize.fs14,

                }]}>{value[`${labelName}`]}</Text>

                <ImageComponent source={lightBackgroundColor ? Images.downArrowBlack : Images.dropDownArrow} height={1.5} width={hp(1.5)} mode={'cover'} />
            </TouchableOpacity>


            <Menu
                visible={isModalVisible}
                animationDuration={1}
                onRequestClose={() => setIsModalVisible(false)}
                style={{
                    width: optionWidth ? optionWidth : '80%',
                    alignItems: "center",
                    backgroundColor: Colors.ThemeColorDark,
                    borderRadius: hp(1)
                }}>
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.optionZone}
                            key={index}
                            onPress={() => selectOption(item)}>
                            <Text style={styles.option}>{item && item[labelName]}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: hp(1.5),
        width: '100%',
    },
    labelZone: {
        height: hp(5),
        borderRadius: hp(1),
        paddingHorizontal: wp(4),
        alignItems: 'center',
        flexDirection: 'row',
    },
    typeName: {
        ...commonCSS.subTextIB40012secText,
        width: '26%',
        color: Colors.cF2F2F2,
        fontWeight: '700'
    },
    labelName: {
        fontFamily: Font.poppinsBlack,
    },
    optionZone: {
        borderTopWidth: hp(0.15),
        borderTopColor: '#FFFFFFaa'
    },
    option: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.white,
        paddingLeft: wp(4),
        paddingVertical: hp(1)
    },


})


export default Dropdown;




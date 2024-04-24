//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontSize from '../../commonCSS/FontSize';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';


// create a component
const TextInputCustom = ({ title, placeholderText, defaultValue, onChangeText, width, keyboardType, maxLength }: { title: String, placeholderText: string, defaultValue: string, onChangeText: any, width: any, keyboardType: any, maxLength: number }) => {
    return (
        <View style={[styles.container, { width: width ? width : '90%', }]}>
            {title && <Text style={styles.text}>{title}</Text>}

            <View
            >
                {title && <Text style={styles.text}>{title}</Text>}
                <TextInput
                    style={{
                        paddingLeft: wp(3),
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: Colors.black,
                        top: hp(0.3),
                        fontSize: FontSize.fs14,
                        fontFamily: Font.MontserratBlack,
                        fontWeight: '500'
                    }}
                    placeholder={placeholderText}
                    value={defaultValue}
                    maxLength={maxLength ? maxLength : 100}
                    placeholderTextColor={Colors.textInputInactive}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    autoFocus={true}
                    onChangeText={(val) => { onChangeText(val) }}
                />
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        height: hp(6),
        borderWidth: 1,
        borderColor: Colors.greyActiveC7C7C7,
        marginTop: hp(2),
        position: 'relative',
        borderRadius: hp(1),
    },
    text: {
        position: 'absolute',
        top: hp(-1.2),
        left: wp(5),
        backgroundColor: 'white',
        paddingHorizontal: wp(2),
        fontSize: FontSize.fs14,
        color: Colors.secondaryText94
    },
});
export default TextInputCustom;

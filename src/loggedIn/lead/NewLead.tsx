import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS, hp } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../component/custom/CustomTextInput';
import { Colors } from '../../commonCSS/Colors';
import Button from '../../component/Button';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';
import ModalSuccess from '../../component/ModalSuccess';

export default function NewLead ( { navigation }: { navigation: any } ) {
    const [ newLeadData, setNewLeadData ] = useState( {
        orginationName: '',
        phone: '',
        email: '',
        regName: '',
        pan: '',
        gst: '27AAPFU0939F1ZV',
        address: '',
        street1: '',
        street2: '',
        zip: '',
        city: '',
        state: '',
    } )

    const [ errMessage, setErrMessage ] = useState( '' );
    const [ errModalVisible, setErrModalVisible ] = useState( false );

    const validateEmail = ( email: string ) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    // pan
    const patt = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
    // gst
    function checksum ( g ) {
        let regTest = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test( g )
        if ( regTest ) {
            let a = 65, b = 55, c = 36;
            return Array[ 'from' ]( g ).reduce( ( i, j, k, g ) => {
                p = ( p = ( j.charCodeAt( 0 ) < a ? parseInt( j ) : j.charCodeAt( 0 ) - b ) * ( k % 2 + 1 ) ) > c ? 1 + ( p - c ) : p;
                return k < 14 ? i + p : j == ( ( c = ( c - ( i % c ) ) ) < 10 ? c : String.fromCharCode( c + b ) );
            }, 0 );
        }
        return regTest
    }

    const goToAddAddress = () => {
        if ( newLeadData.orginationName === '' ) {
            setErrMessage( 'Please enter Orgination Name' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.phone === '' ) {
            setErrMessage( 'Please enter Phone Number' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.phone.length < 10 || newLeadData.phone.length > 10 ) {
            setErrMessage( 'Please enter a valid Phone Number' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.email === '' ) {
            setErrMessage( 'Please enter Email Address' )
            setErrModalVisible( true );
            return;
        }
        if ( !validateEmail( newLeadData.email ) ) {
            setErrMessage( "Please Enter a Valid Email" );
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.regName === '' ) {
            setErrMessage( 'Please enter Registered Name' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.pan === '' ) {
            setErrMessage( 'Please enter PAN number' )
            setErrModalVisible( true );
            return;
        }
        if ( patt.test( newLeadData.pan ) === false ) {
            setErrMessage( 'Please enter a valid PAN number' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.gst === '' ) {
            setErrMessage( 'Please enter GST Number' )
            setErrModalVisible( true );
            return;
        }
        if ( checksum( newLeadData.gst ) === false ) {
            setErrMessage( 'Please enter a valid GST Number' )
            setErrModalVisible( true );
            return;
        }
        if ( newLeadData.address === '' ) {
            setErrMessage( 'Please enter Plot, House, Flat No' )
            setErrModalVisible( true );
            return;
        }
        navigation.navigate( 'BusinessAddress', { leadData: newLeadData } );
    }

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Create Order'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{ ...commonCSS.pvh }}>

                    <CustomTextInput
                        title={'Shop Name'}
                        placeholder={'XYZ Medical'}
                        multiline={false}
                        value={newLeadData.orginationName}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                orginationName: val
                            } ) );
                        } )}
                        marginTop={false}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false} />

                    <CustomTextInput
                        title={'Customer Name'}
                        placeholder={'Mukesh'}
                        multiline={false}
                        value={newLeadData.regName}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                regName: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false} />

                    <CustomTextInput
                        title={'Phone Number'}
                        placeholder={'7234617417'}
                        multiline={false}
                        value={newLeadData.phone}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                phone: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={'number-pad'}
                        placeholderTextColor={Colors.secondaryText94} disabled={false} />

                    <CustomTextInput
                        title={'Medicine Name'}
                        placeholder={'xyz'}
                        multiline={false}
                        value={newLeadData.email}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                email: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false} />

                    <CustomTextInput
                        title={'Qty'}
                        placeholder={'1234'}
                        multiline={false}
                        value={newLeadData.pan}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                pan: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={'number-pad'}
                        placeholderTextColor={Colors.secondaryText94} disabled={false} />


                    {/* <CustomTextInput
                        title={'GST Number'}
                        placeholder={'27AAPFU0939F1ZV'}
                        multiline={false}
                        value={newLeadData.gst}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                gst: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                    /> */}
                    <CustomTextInput
                        title={'Address'}
                        placeholder={'B-44/B'}
                        multiline={false}
                        value={newLeadData.address}
                        onChangeText={( val => {
                            setNewLeadData( prevData => ( {
                                ...prevData,
                                address: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    />


                    <View style={{ marginTop: hp( 2.5 ), ...commonCSS.alicjc }}>
                        <Button
                            label={'CREATE ORDER'}
                            labelSize={FontSize.fs16}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={''}
                            onPress={() => { goToAddAddress() }}
                            width={'92'}
                            backgroundColor={Colors.ThemeColorDark}
                            isButtonDisabled={false}
                            btnHeight={'5.5'}
                            borderRadius={'1.5'}
                            borderColor={''}
                            borderwidth={''}
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <ModalSuccess
                message={errMessage}
                visible={errModalVisible}
                onRequestClose={() => {
                    setErrModalVisible( false );
                }}
                onPress={() => {
                    setErrModalVisible( false );
                }}
            />
        </View>
    );
}

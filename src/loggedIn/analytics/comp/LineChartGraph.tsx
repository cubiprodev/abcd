import React from 'react';
import { View, Text } from 'react-native';
import { hp, wp } from '../../../commonCSS/GlobalCss';
import { LineChart } from "react-native-gifted-charts";
import { Colors } from '../../../commonCSS/Colors';


export default function LineChartGraph() {

    const customDataPoint = () => {
        return (
            <View
                style={{
                    width: hp(1),
                    height: hp(1),
                    backgroundColor: 'white',
                    borderWidth: hp(0.2),
                    borderRadius: hp(0.5),
                    borderColor: Colors.ThemeColorDark,
                }}
            />
        );
    };
    const customLabel = val => {
        return (
            <View style={{ width: 70, marginLeft: 7 }}>
                <Text style={{ color: Colors.secondaryText94, fontWeight: 'bold' }}>{val}</Text>
            </View>
        );
    };

    const data = [
        {
            value: 440,
            hideDataPoint: true,
        },
        {
            value: 100,
            labelComponent: () => customLabel('Mon'),
            customDataPoint: customDataPoint,
        },
        {
            value: 100,
            labelComponent: () => customLabel('Tue'),
            customDataPoint: customDataPoint,
        },
        {
            value: 100,
            labelComponent: () => customLabel('Wed'),
            customDataPoint: customDataPoint,
        },
        {
            value: 100,
            labelComponent: () => customLabel('Thru'),
            customDataPoint: customDataPoint,
        },
        
        {
            value: 300,
            customDataPoint: customDataPoint,
        },
        {
            value: 280,
            hideDataPoint: true,
        },
        {
            value: 150,
            hideDataPoint: true,
        },
        {
            value: 150,
            customDataPoint: customDataPoint,
        },
        {
            value: 410,
            labelComponent: () => customLabel('Fri'),
            customDataPoint: customDataPoint,
            showStrip: true,
            stripHeight: 190,
            stripColor: 'black',
            dataPointLabelComponent: () => {
                return (
                    <View
                        style={{
                            backgroundColor: Colors.black,
                            paddingHorizontal: wp(3),
                            paddingVertical: hp(0.5),
                            borderRadius: hp(1),
                        }}>
                        <Text style={{ color: 'white' }}>410</Text>
                    </View>
                );
            },
            dataPointLabelShiftY: -70,
            dataPointLabelShiftX: -4,
        },
    ];
    return (
        <View>
            <LineChart
                thickness={hp(0.2)}
                color={Colors.ThemeColorDark}
                maxValue={600}
                noOfSections={3}
                areaChart
                yAxisTextStyle={{ color: Colors.secondaryText94 }}
                data={data}
                curved
                startFillColor={Colors.lightBrandColor}
                endFillColor={Colors.lightBrandColor}
                // startOpacity={0.4}
                endOpacity={0.4}
                spacing={38}
                backgroundColor={Colors.white}
                initialSpacing={2}
                yAxisColor={Colors.white}
                xAxisColor={Colors.white}
            />
        </View>
    );
}

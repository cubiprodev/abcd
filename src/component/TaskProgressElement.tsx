import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../commonCSS/Colors';
import { commonCSS } from '../commonCSS/GlobalCss';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function TaskProgressElement({ completedProgress, totalTaskCount }: { completedProgress: number, totalTaskCount: number }) {
    const renderComponents = [];

    // Render the <LinearGradient> components based on completedProgress
    for (let i = 0; i < completedProgress; i++) {
        renderComponents.push(
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[Colors.tpFromColor, Colors.tpToColor]}
                style={{ ...commonCSS.gradientProgress }}
            >
            </LinearGradient>
        );
    }


    // Render the <View> components for the remaining tasks
    for (let i = completedProgress; i < totalTaskCount; i++) {
        renderComponents.push(
            <View
                key={`view-${i}`}
                style={{ ...commonCSS.gradientProgress, backgroundColor: Colors.inactiveProgressColor }}
            />

        );
    }


    return (
        <ScrollView
            horizontal
            style={{ height: heightPercentageToDP(2) }}
            contentContainerStyle={{ ...commonCSS.fdralic, }}>

            {renderComponents}
        </ScrollView>
    );
}

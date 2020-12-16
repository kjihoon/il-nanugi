import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Animated from 'react-native-reanimated';

/* 01) Start Style ***************************************************************************************************************/
const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:10,
        height: 60,
        width: "100%",
        backgroundColor: "#ced1c2"
    }
});
/* 01) End Style ***************************************************************************************************************/
/* 02) Start Static Function Group ******************************************************************************************************/

/* 02) End Static Function Group ***************************************************************************************************************/
/* 03) Start View ***************************************************************************************************************/
const PlusCard = () => {



    /* 03-1) End View ***************************************************************************************************************/
    return (
        <View>
            <View style={{ ...styles.cardContainer }}>
                <View>
                    <Text style={{fontSize:30,textAlign:"center"}}>+</Text>
                </View>
            </View>
        </View>
    )
    /* 03-1) End View ***************************************************************************************************************/
}

/* 03) End View ***************************************************************************************************************/
export default PlusCard;
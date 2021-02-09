import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import CommonAvartar from '../components/common/CommonAvartar';
import commonStyle from '../styles/commonStyle';

/*------------------------------------------------------------------------------------
 * Edit Date   : 2020.12.26 
 * Edit By     : kwak ji hoon 
 * Description : GroupDetail Container Screen
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 01) Styles
 *----------------------------------------------------------------------------------*/
const styles = StyleSheet.create({

});

/*------------------------------------------------------------------------------------
 * 02) Static Variables
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 03) React
 *----------------------------------------------------------------------------------*/
const TaskDetailScreen = () => {
    /*-------------------------------------------------------------------------------
    * 03-1) Hooks
    *-------------------------------------------------------------------------------*/
    
    useEffect(() => {

    }, []);

    /*-------------------------------------------------------------------------------
    * 03-2) View
    *-------------------------------------------------------------------------------*/
    return (
        <View style={{margin:20}}>
            <View>
                <Text style={{fontSize:18}}>MEMBERS</Text>
                <View style={{flexDirection:"row"}}>
                    <CommonAvartar/>
                    <CommonAvartar/>
                    <CommonAvartar/>
                </View>
            </View>
        </View>
    )
}
export default TaskDetailScreen;
import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View, Animated } from "react-native";
import SNSLoginTab from './SNSLoginTab';
import _ from 'lodash';
import { deleteStoreWatcher, useStoreState } from '../../../common/utils/store/commonStore'
/* 01) Start Style ***************************************************************************************************************/
const styles = StyleSheet.create({
    container: {
        width: "80%"
    }
});
/* 01) End Style ***************************************************************************************************************/
/* 02) Start Static Function Group *********************************************************************************************/
function animateMarginTop(target,toValue){
    Animated.timing(target, {
        toValue: toValue,
        duration: 800,
        useNativeDriver: false
    }).start();
}
/* 02) End Static Function Group *************************************************************************************************/
/* 03) Start React ***************************************************************************************************************/
const SNSLoginGroup = ({ loginGroupTabVisiable }) => {

    const [userInfo, setUserInfo] = useStoreState("userInfo", useState);
    const containerMarginTop = useRef(new Animated.Value(100)).current;
    const indicatorMarginTop = useRef(new Animated.Value(350)).current;

    useEffect(() => {
        if (_.isEmpty(userInfo)) {
            animateMarginTop(containerMarginTop,250);
        }else{
            animateMarginTop(indicatorMarginTop,80);
        }
        return () => {
            deleteStoreWatcher(setUserInfo);
        }
    }, [userInfo]);
    const NAVER = () => {
        setUserInfo({ name: "Kwak Tom" })
    }
    /* 03-1) Start View ***************************************************************************************************************/
    if (_.isEmpty(userInfo)) { // if has not userInfo
        return (
            <Animated.View style={{ marginTop: containerMarginTop, ...styles.container }}>

                <SNSLoginTab iconName="md-subway" title="NAVER" color="green" onPress={NAVER} ></SNSLoginTab>
                <SNSLoginTab iconName="md-swap" title="KAKAO" color="#f7ce16"></SNSLoginTab>
                <SNSLoginTab iconName="logo-google" title="Google" color="white"></SNSLoginTab>
                <SNSLoginTab iconName="logo-facebook" title="FaceBook" color="#2469e0"></SNSLoginTab>

            </Animated.View>
        )
    } else {
        return (
            <Animated.View style={{ marginTop: indicatorMarginTop }}>
                <ActivityIndicator size="large" color="white"></ActivityIndicator>
            </Animated.View>
        )
    }
    /* 03-1) End View ***************************************************************************************************************/

}
/* 03) End React ***************************************************************************************************************/
export default SNSLoginGroup;



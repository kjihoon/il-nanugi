import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator, Alert, StyleSheet, Text, View, Animated } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonAvartar from '../../common/CommonAvartar';
import commonStyle from "../../../common/styles/commonStyle";
import { useStoreState, deleteStoreWatcher } from '../../../common/utils/store/commonStore';
import { Icon } from 'react-native-elements'
/* 01) Start Style ***************************************************************************************************************/
const styles = StyleSheet.create({
    userInfoWrapper: { marginTop: 9, marginLeft: 5, color: commonStyle.oneTextInColor, fontSize: 15 }
});
/* 01) End Style ***************************************************************************************************************/
/* 02) Start Static Function Group ******************************************************************************************************/

/* 02) End Static Function Group ***************************************************************************************************************/
/* 03) Start View ***************************************************************************************************************/
const HomeHeader = ({ pageNum }) => {
    const [userInfo, setUserInfo] = useStoreState("userInfo", useState);
    const [dotsStatus, setDotsStatus] = useState([false, true]);
    
    
    useEffect(() => {
        let currDotsStatus = dotsStatus.fill(false, 0, dotsStatus.length);
        let currPageNum = pageNum < 0 ? 0 : pageNum; 
        currDotsStatus[currPageNum] = true;
        setDotsStatus(currDotsStatus);
    }, [pageNum]);

    /* 03-1) End View ***************************************************************************************************************/
    return (
        <View style={{ width: "100%", height: 150, backgroundColor: commonStyle.oneBackgroundColor }} >
            <View style={{
                marginTop: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <CommonAvartar size="small" title="곽"/>
                <Text style={styles.userInfoWrapper}>{userInfo.name}</Text>
            </View>
            <View style={{
                marginTop: -15,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                {dotsStatus.map((status,idx) => {
                    let color = status ? "#7b83c7" : commonStyle.oneTextInColor;
                    return <Text key={idx} style={{ fontSize: 60, color }}>.</Text>
                })}
            </View>
        </View>
    )
    /* 03-1) End View ***************************************************************************************************************/
}

/* 03) End View ***************************************************************************************************************/
export default HomeHeader;
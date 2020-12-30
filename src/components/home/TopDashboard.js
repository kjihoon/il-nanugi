import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from "react-native";
import commonStyle from '../../common/styles/commonStyle'
import CommonBtn from '../common/CommonBtn';

/*------------------------------------------------------------------------------------
 * Edit Date   : 2020.12.26 
 * Edit By     : kwak ji hoon 
 * Description : Home Top Dashboard (Home task 상태)
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 01) Styles
 *----------------------------------------------------------------------------------*/
const styles = StyleSheet.create({
    container: {
        height: 100,
        ...commonStyle.rowAlignment,
        paddingLeft: 15,
        paddingRight: 15,
    },
    taskCntContainer: {
        flex: 2,
        ...commonStyle.columnCenterAlignment
    },
    guageContainer: {
        flex: 6
    },
    guageTitle:{
        fontSize:18,paddingBottom:10,textAlign:"center"
    },
    guage: {
        ...commonStyle.rowAlignment,
        borderRadius: 15,
        height: 35,
        backgroundColor: "#d4d6d6",
        ...commonStyle.shodow,
        paddingLeft: 5,
    },
    leftGuage: {
        height: "100%",
        backgroundColor: "#0c5063",
        //borderTopLeftRadius: 18,
        //borderBottomLeftRadius: 18,
        borderRadius:10,
        ...commonStyle.rowAlignment,
        
    },
    leftGuageText:{
        flex:1,
        textAlign:"right",
        fontSize:14,
        color:commonStyle.oneTextInColor,
        paddingRight:10
    },
    rightGuage: {
    
    }
});

/*------------------------------------------------------------------------------------
 * 02) Static Variables
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 03) React
 *----------------------------------------------------------------------------------*/
const TopDashboard = () => {
    /*-------------------------------------------------------------------------------
    * 03-1) Hooks
    *-------------------------------------------------------------------------------*/
    const guagePercentage = useRef(new Animated.Value(5)).current;
    const [remainTaskCnt, setRemainTaskCnt] = useState(4);
    const [joinedGroupCnt, setJoinedGroupCnt] = useState(12);
    const [percentage,setPercentage] = useState(65);
    useEffect(() => {
        Animated.timing(guagePercentage, {
            toValue: percentage,
            duration: 1500,
            useNativeDriver: false
        }).start();
    }, []);

    /*-------------------------------------------------------------------------------
    * 03-2) View
    *-------------------------------------------------------------------------------*/
    return (
        <View style={styles.container}>
            <View style={styles.taskCntContainer}>
                <CommonBtn style={commonStyle.shodow} btnStyle={{ btnSize: 65, type: 1 }} 
                titleStyle={{ name: joinedGroupCnt, subName: "할일" }} />
            </View>
            <View style={styles.taskCntContainer}>
                <CommonBtn style={commonStyle.shodow} btnStyle={{ btnSize: 65, type: 1 }} 
                titleStyle={{ name: remainTaskCnt, subName: "그룹" }} />
            </View>

            <View style={styles.guageContainer}>
                <Text style={styles.guageTitle}>머라 적어야함</Text>
                <View style={styles.guage}>
                    <Animated.View style={{
                        ...styles.leftGuage,
                        width: (guagePercentage.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"]
                        }))
                    }}>
                        <Text style={styles.leftGuageText}>{percentage}%</Text>
                    </Animated.View>
                    <View style={styles.rightGuage}></View>
                </View>
            </View>
        </View>
    )
}
export default TopDashboard;
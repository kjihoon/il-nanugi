import React, { useRef, useState, useEffect } from 'react';
import { Animated, ActivityIndicator, Alert, Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import commonStyle from '../../../../common/styles/commonStyle';

import Card from "./Card";
import TaskDetail from './TaskDetail';
import TaskTimer from './TaskTimer';
/*------------------------------------------------------------------------------------
 * Edit Date   : 2020.12.30
 * Edit By     : kwak ji hoon 
 * Description : task card extends card
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 01) Styles
 *----------------------------------------------------------------------------------*/
const styles = StyleSheet.create({
    cardDetail: {
        paddingTop: 10,
    },
    taskStatus: {
        fontSize: 25, fontWeight: "600"
    },
    taskStatusBottomLine: {
        borderBottomWidth: 2, marginTop: 5, width: 30
    }
});
/*------------------------------------------------------------------------------------
 * 02) Static Variables
 *----------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
 * 03) React
 *----------------------------------------------------------------------------------*/
const TaskCard = ({ card, setCard, idx, onPress }) => {

    /***************************
     * 카드 현재상태(완료/진행/마감) 상태를 국문으로 변경
    ***************************/
    const convertTaskStatusToText = () => {
        if (card.taskStatus === "E") return "완료";
        else return "진행";
    }

    return (
        <Card card={card} setCard={setCard} idx={idx}>

            {card.isOpen &&
                <View style={{ ...styles.cardDetail }}>
                    {/* ------------------------------------------------------------------------------ 
                      * task detail
                      *------------------------------------------------------------------------------*/}
                    <TaskDetail card={card} />
                    <View style={commonStyle.rowAlignment} >
                        {/* ------------------------------------------------------------------------------ 
                          * task status
                          *------------------------------------------------------------------------------*/}
                        <TaskTimer deadlineTime={card.deadlineTime} />
                        {/* ------------------------------------------------------------------------------ 
                          * task status
                          *------------------------------------------------------------------------------*/}
                        <View style={commonStyle.columnCenterAlignment}>
                            <Text style={styles.taskStatus}>{convertTaskStatusToText()}</Text>
                            <View style={styles.taskStatusBottomLine}></View>
                        </View>
                    </View>
                </View>
            }

        </Card >
    )
}
export default TaskCard;
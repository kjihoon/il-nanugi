import commonStyle from "../../styles/commonStyle";


const CodeUtil ={

    /*---------------------------------------*/
    //1) TASK
    /*---------------------------------------*/
    TASK_STATUS:{
        TODO:"T",DOING:"D",END:"E",
    },
    TASK_STATUS_TEXT:{
        END:"종료",TODO:"예정",DOING:"진행"
    },
    GET_STATUS_TEXT:(status)=>{
        if (status === "E") return "완료";
        if (status === "T") return "예정";
        if (status === "D") return "진행";
    },
    TASK_SORT_TYPE:{
        BY_ENDTIME:0,BY_STATUS:1,BY_GROUP_ID:2,
    },
    TASK_STATUS_COLOR:{
        TODO:"#999793",DOING:"#f5ad42",END:commonStyle.oneTextColor
    }
    
}

export default CodeUtil;
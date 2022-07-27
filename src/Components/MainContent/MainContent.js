import './MainContent.css'
import MainHeader from './MainHeader/MainHeader'
import Goal from './Goal/Goal'
import AppContext from '../../Storage/AppContext'
import React, { useContext, useEffect, useState } from 'react'

export default function MainContent() {
    let goalCounter = 0;
    let importantCounter = 0;
    let completedCounter = 0;
    const ctx = useContext(AppContext);

    let dataInStorage;

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("goalArray")) != null) {
            dataInStorage = JSON.parse(localStorage.getItem("goalArray"))
        }
    }, [ctx.stateChanger])

    if (JSON.parse(localStorage.getItem("goalArray")) != null) {
        dataInStorage = JSON.parse(localStorage.getItem("goalArray"))
    }

    for (let i in dataInStorage) {
        if (dataInStorage[i].month == ctx.currentMonth && dataInStorage[i].year == ctx.currentYear && dataInStorage[i].week == ctx.currentWeek) {
            goalCounter = goalCounter + 1;
            if (dataInStorage[i].status == "Important") {
                importantCounter = importantCounter + 1;
            }
            if (dataInStorage[i].isCompleted === true){
                completedCounter = completedCounter + 1;
            }
        } 
    }

    ctx.setCompletedCounter(completedCounter);
    ctx.setImportant(importantCounter);
    ctx.setProgress(goalCounter-completedCounter)
    ctx.setGoalCounter(goalCounter);

    return (
        <div className="main-content">
            <MainHeader goalCounter={goalCounter}></MainHeader>
            <div className='goals-div'>
                {dataInStorage &&
                    dataInStorage.map((data) => {
                        if (data.month == ctx.currentMonth && data.year == ctx.currentYear && data.week == ctx.currentWeek)
                            return <Goal title={data.title} isImportant={data.status} description={data.description} isCompleted={data.isCompleted}></Goal>
                    })
                }
                {/* {ctx.goalArray.map((goal) => {
                    if (goal.month == ctx.currentMonth && goal.year == ctx.currentYear && goal.week == ctx.currentWeek)
                        return <Goal title={goal.title} isFromStorage={false} isImportant={goal.status} description={goal.description} isCompleted={goal.isCompleted}></Goal>
                })} */}
            </div>
        </div>
    )
}
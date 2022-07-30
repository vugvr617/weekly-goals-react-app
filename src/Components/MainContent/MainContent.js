import './MainContent.css'
import MainHeader from './MainHeader/MainHeader'
import Goal from './Goal/Goal'
import AppContext from '../../Storage/AppContext'
import React, { useContext, useEffect, useState, useRef } from 'react'

export default function MainContent() {
    let goalCounter = 0;
    let importantCounter = 0;
    let completedCounter = 0;
    const ctx = useContext(AppContext);
    const goalRef = useRef();

    let dataInStorage = [];

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

    let goalsDivInnerCompleted = dataInStorage.map((data) => {
        if (data.isCompleted && data.month == ctx.currentMonth && data.year == ctx.currentYear && data.week == ctx.currentWeek)
            return <Goal title={data.title} isImportant={data.status} description={data.description} isCompleted={data.isCompleted}></Goal>
    })

    let goalsDivInnerImportant = dataInStorage.map((data) => {
        if (!data.isCompleted && data.status == "Important" && data.month == ctx.currentMonth && data.year == ctx.currentYear && data.week == ctx.currentWeek)
            return <Goal title={data.title} isImportant={data.status} description={data.description} isCompleted={data.isCompleted}></Goal>
    })

    let goalsDivInnerOptional = dataInStorage.map((data) => {
        if (!data.isCompleted && data.status == "Optional" && data.month == ctx.currentMonth && data.year == ctx.currentYear && data.week == ctx.currentWeek)
            return <Goal title={data.title} isImportant={data.status} description={data.description} isCompleted={data.isCompleted}></Goal>
    })


    return (
        <div className="main-content">
            <MainHeader goalCounter={goalCounter}></MainHeader>
            <div ref={goalRef} className='goals-div'>
                {dataInStorage.length > 0 &&
                    goalsDivInnerCompleted
                }
                {dataInStorage.length > 0 &&
                    goalsDivInnerImportant
                }
                {dataInStorage.length > 0 &&
                    goalsDivInnerOptional
                }
            </div>
                {
                    goalRef.current != undefined && goalRef.current.children.length < 1 && <div className='no-data-div'><p>No data found.</p></div>
                }
        </div>
    )
}
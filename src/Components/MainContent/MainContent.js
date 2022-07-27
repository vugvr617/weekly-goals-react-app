import './MainContent.css'
import MainHeader from './MainHeader/MainHeader'
import Goal from './Goal/Goal'
import AppContext from '../../Storage/AppContext'
import React, { useContext, useEffect, useState } from 'react'

export default function MainContent() {
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

    return (
        <div className="main-content">
            <MainHeader></MainHeader>
            <div className='goals-div'>
                {dataInStorage &&
                    dataInStorage.map((data) => {
                        if (data[0].month == ctx.currentMonth && data[0].year == ctx.currentYear && data[0].week == ctx.currentWeek)
                            return <Goal title={data[0].title} isImportant={data[0].status} description={data[0].description} isCompleted={data[0].isCompleted}></Goal>
                    })
                }
                {ctx.goalArray.map((goal) => {
                    if (goal.month == ctx.currentMonth && goal.year == ctx.currentYear && goal.week == ctx.currentWeek)
                        return <Goal title={goal.title} isImportant={goal.status} description={goal.description} isCompleted={goal.isCompleted}></Goal>
                })}
            </div>
        </div>
    )
}
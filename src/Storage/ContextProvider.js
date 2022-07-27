import AppContext from "./AppContext";
import React, { useEffect, useState } from "react";

export default function ContextProvider(props) {
    const [currentMonth, setCurrentMonth] = useState('');
    const [importantCounter, setImportant] = useState(0);
    const [inProgressCounter, setProgress] = useState(0);
    const [goalCounter, setGoalCounter] = useState(0);
    const [stateChanger, setStateChanger] = useState(0);
    const [completedCounter, setCompletedCounter] = useState(0);
    const [currentWeek, setCurrentWeek] = useState();
    const [currentYear, setCurrentYear] = useState();
    const [isAddFormDisplayed, setFormDisplay] = useState(false)

    const contextData = {
        currentMonth: currentMonth,
        goalCounter: goalCounter,
        importantCounter: importantCounter,
        completedCounter: completedCounter,
        inProgressCounter: inProgressCounter,
        currentWeek: currentWeek,
        currentYear: currentYear,
        isAddFormDisplayed: isAddFormDisplayed,
        setGoalArray: (goal) => {
            let previousStorage = [];
            if (JSON.parse(localStorage.getItem("goalArray")) != null) {
                previousStorage = JSON.parse(localStorage.getItem("goalArray"));
            }
            localStorage.setItem("goalArray", [JSON.stringify([...previousStorage, goal])]);
            setStateChanger((prevState) => { return prevState = prevState + 1 })
        },
        setAsCompleted: (title) => {
            if (JSON.parse(localStorage.getItem("goalArray")) != null) {
                var data = JSON.parse(localStorage.getItem("goalArray"))
                for (let i in data) {
                    if (data[i].title == title) {
                        data[i].isCompleted = !data[i].isCompleted;
                    }
                }
                localStorage.setItem("goalArray", JSON.stringify([...data]));
                console.log(JSON.parse(localStorage.getItem("goalArray")))
                setStateChanger((prevState) => { return prevState = prevState + 1 })
            }
        },
        setCurrentMonth: (month) => { setCurrentMonth(month) },
        setCurrentWeek: (week) => { setCurrentWeek(week) },
        setImportant: (counter) => {setImportant(counter)},
        setProgress: (counter) => {setProgress(counter)},
        setCompletedCounter: (counter) => {setCompletedCounter(counter)},
        setGoalCounter: (counter) => {setGoalCounter(counter)},
        setCurrentYear: (year) => { setCurrentYear(year) },
        setFormDisplay: () => { setFormDisplay((prevState) => { return !prevState }) }
    }

    return (
        <AppContext.Provider value={contextData}>
            {props.children}
        </AppContext.Provider>
    )
}
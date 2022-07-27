import AppContext from "./AppContext";
import React, { useEffect, useState } from "react";

export default function ContextProvider(props) {
    const [currentMonth, setCurrentMonth] = useState('');
    const [stateChanger, setStateChanger] = useState(0);
    const [goalArray, setGoalArray] = useState([]);
    const [currentWeek, setCurrentWeek] = useState();
    const [currentYear, setCurrentYear] = useState();
    const [isAddFormDisplayed, setFormDisplay] = useState(false)

    useEffect(() => {
        let previousStorage = [];
        if (JSON.parse(localStorage.getItem("goalArray")) !== null) {
            previousStorage = JSON.parse(localStorage.getItem("goalArray"));
        }
        if (previousStorage.length > 0 && goalArray.length > 0) {
            localStorage.setItem("goalArray", [JSON.stringify([...previousStorage, goalArray])]);
        } else if (goalArray.length > 0 && previousStorage.length < 1) {
            localStorage.setItem("goalArray", [JSON.stringify([goalArray])]);
        }
    }, [goalArray])

    const contextData = {
        goalArray: goalArray,
        currentMonth: currentMonth,
        currentWeek: currentWeek,
        currentYear: currentYear,
        isAddFormDisplayed: isAddFormDisplayed,
        setGoalArray: (goal) => {
            setGoalArray((prevArray) => { return [...prevArray, goal] })
        },
        setAsCompleted: (title) => {
            if (JSON.parse(localStorage.getItem("goalArray")) != null) {
                var data = JSON.parse(localStorage.getItem("goalArray"))
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    if (data[i][0].title == title) {
                        data[i][0].isCompleted = !data[i][0].isCompleted;
                    }
                }
                if (goalArray.length > 0) {
                    localStorage.setItem("goalArray", JSON.stringify(...goalArray, ...data))
                } else if (goalArray.length < 1) {
                    localStorage.setItem("goalArray", JSON.stringify([...data]));
                    console.log(JSON.parse(localStorage.getItem("goalArray")))
                }
                setStateChanger((prevState) => {return prevState = prevState + 1})
            }
        },
        setCurrentMonth: (month) => { setCurrentMonth(month) },
        setCurrentWeek: (week) => { setCurrentWeek(week) },
        setCurrentYear: (year) => { setCurrentYear(year) },
        setFormDisplay: () => { setFormDisplay((prevState) => { return !prevState }) }
    }

    return (
        <AppContext.Provider value={contextData}>
            {props.children}
        </AppContext.Provider>
    )
}
import './SideSection.css'
import React, { useState, useRef, useEffect, useContext } from 'react'
import AppContext from '../../Storage/AppContext';

export default function SideForm() {
    const [thisMonth, setMonthValue] = useState();
    const [thisWeek, setWeekValue] = useState();
    const [thisYear, setYearValue] = useState();
    const weekRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentDate = new Date();
    const ctx = useContext(AppContext);

    useEffect(() => {
        setMonthValue(month[currentDate.getMonth()]);
        setWeekValue(Math.ceil((currentDate.getDate())/7) < 4 ? Math.ceil((currentDate.getDate())/7) : 4);
        setYearValue(currentDate.getFullYear());
    }, [])

    useEffect(() => {
        ctx.setCurrentMonth(thisMonth);
        ctx.setCurrentWeek(thisWeek);
        ctx.setCurrentYear(thisYear)
        monthRef.current.value = thisMonth;
        weekRef.current.value = thisWeek;
        yearRef.current.value = thisYear;
    }, [thisMonth, thisWeek, thisYear])

    const handleDateChange = (event) => {
        event.preventDefault()
        setMonthValue(monthRef.current.value);
        setWeekValue(weekRef.current.value);
        setYearValue(yearRef.current.value);
    }

    return (
        <div className='side-form'>
            <form onSubmit={handleDateChange}>
                <div className='inner-form'>
                    <label for="month">Month:</label>
                    <select ref={monthRef} id="month" name="month">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
                <div className='inner-form'>
                    <label for="week">Week:</label>
                    <select ref={weekRef} id="week" name="week">
                        <option >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className='inner-form'>
                    <label for="week">Year:</label>
                    <select ref={yearRef} id="year" name="year">
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </div>
                <input type="submit" value='Change date'></input>
            </form>
        </div>
    )
}
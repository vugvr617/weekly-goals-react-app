import React from 'react';

const AppContext = React.createContext({
    goalArray: '',
    currentMonth: '',
    currentWeek: '',
    currentYear: '',
    isAddFormDisplayed: false,
    setGoalArray: () => {},
    setAsCompleted: () => {},
    setCurrentMonth: () => {},
    setCurrentWeek: () => {},
    setCurrentYear: () => {},
    setFormDisplay: () => {}
})

export default AppContext;
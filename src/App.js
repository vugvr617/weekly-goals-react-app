import './App.css';
import React, { Fragment } from 'react'
import SideSection from './Components/SideSection/SideSection';
import ContextProvider from './Storage/ContextProvider';
import MainContent from './Components/MainContent/MainContent';
import AddForm from './Components/AddForm/AddForm';

function App() {
  return (
    <ContextProvider>
        <AddForm></AddForm>
      <main>
        <SideSection></SideSection>
        <MainContent></MainContent>
      </main>
    </ContextProvider>
  );
}

export default App;

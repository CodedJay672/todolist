import { useContext, useEffect, useState } from 'react';
import DataTable from './Components/Container/DataGrid/DataTable';
import Modal from './Components/Container/Modal/Modal';
import Sidebar from './Components/Container/Sidebar/Sidebar';
import styles from './styles/App.module.scss';
import { ToDo } from './utils';
import GlobalContext from './context/GlobalContext';

function App() {

  return (
    <div className={styles.container}>
      <Modal />
      <Sidebar />
      <DataTable />
    </div>
  )
}

export default App

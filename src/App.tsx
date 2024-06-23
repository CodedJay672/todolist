import { useContext, useEffect, useState } from 'react';
import DataTable from './Components/Container/DataGrid/DataTable';
import Modal from './Components/Container/Modal/Modal';
import Sidebar from './Components/Container/Sidebar/Sidebar';
import styles from './styles/App.module.scss';
import GlobalContext, { Tasks } from './context/GlobalContext';
import { initFunction } from './utils';

function App() {
  const { savedTasks } = useContext(GlobalContext);
  const [ tableData, setTableData ] = useState<Tasks[]>(initFunction)

  useEffect(() => {
    const fetchedData = initFunction();
    setTableData(fetchedData);
  }, [savedTasks])

  return (
    <div className={styles.container}>
      <Modal />
      <Sidebar />
      <DataTable data={tableData} />
    </div>
  )
}

export default App

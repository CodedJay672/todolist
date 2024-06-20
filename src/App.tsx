import DataTable from './Components/Container/DataGrid/DataTable';
import Modal from './Components/Container/Modal/Modal';
import Sidebar from './Components/Container/Sidebar/Sidebar';
import styles from './styles/App.module.scss';

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

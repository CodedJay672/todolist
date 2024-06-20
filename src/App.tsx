import DataTable from './Components/Container/DataGrid/DataTable';
import Sidebar from './Components/Container/Sidebar/Sidebar';
import styles from './styles/App.module.scss';

function App() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <DataTable />
    </div>
  )
}

export default App

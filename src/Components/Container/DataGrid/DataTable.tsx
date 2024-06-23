import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import styles from './DataTable.module.scss';

export default function DataTable() {
  const { savedTasks } = useContext(GlobalContext);

  const columns: GridColDef<(typeof savedTasks)[number]>[] = [
    {
      field: 'task',
      width: 800,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {params.value.task}
        </Box>
      ),
    },
    {
      field: 'labels',
      type: 'number',
      width: 110
    },
    {
      field: 'dueDate',
      width: 160,
    },
  ];

  return (
    <>
      <Box sx={{ height: '100%', width: '100%', backgroundColor: '#fff', borderRadius: '10px' }}>
        {savedTasks.length !== 0 ? (
          <DataGrid
            rows={savedTasks}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 30,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        ) : (
          <div className={styles.no_tasks}>
            <p>No tasks assigned yet. Click on <span>Add Tasks</span> to assign new tasks.</p>
          </div>
        )}
      </Box>
    </>
  );
}

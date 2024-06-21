import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import styles from './DataTable.module.scss';

export default function DataTable() {
  const {rows} = useContext(GlobalContext);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'task',
      width: 800,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={params.row.task.image} alt={`task`} style={{ width: '20px', height: '20px', borderRadius: '50%', marginRight: '10px' }} />
          {params.row.task.task}
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
        {rows.length !== 0 ? (
          <DataGrid
            rows={rows}
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

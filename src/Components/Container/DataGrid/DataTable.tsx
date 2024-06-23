import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import styles from './DataTable.module.scss';
import { Tasks } from "../../../context/GlobalContext";


export default function DataTable({ data }: { data: any[]}) {
  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: 'title',
      width: 700,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {params.value?.title}
        </Box>
      ),
    },
    {
      field: 'labels',
      type: 'number',
      width: 120
    },
    {
      field: 'dueDate',
      width: 200,
    },
  ];

  return (
    <>
      <Box sx={{ height: '100%', width: '100%', backgroundColor: '#fff', borderRadius: '10px' }}>
        {data.length !== 0 ? (
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSizeOption: 30,
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

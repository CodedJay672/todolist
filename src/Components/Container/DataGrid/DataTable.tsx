import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

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

const rows = [
  { id: 1, task: {image: '/assets/avatar.svg', task: 'Ensure that all logistics are well carried out before hand'}, labels: ['HTML'], dueDate: 'Scheduled for April 2024' },
];

export default function DataTable() {
  return (
    <Box sx={{ height: '100%', width: '100%', backgroundColor: '#fff', borderRadius: '10px' }}>
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
    </Box>
  );
}

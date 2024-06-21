import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Person } from '../../../utils';
import { useEffect } from 'react';

function AutoComplete({ data }: { data: string[] }) {
  const optionsData = data;

  useEffect(() => {
    console.log(optionsData)

  }, [])

  return (
    <Autocomplete
      disablePortal
      id="custom-autocomplete"
      options={optionsData}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Staff" />}
    />
  )
}

export default AutoComplete

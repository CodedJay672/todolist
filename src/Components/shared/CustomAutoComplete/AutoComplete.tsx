import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { Person, initPersonFunc } from '../../../utils';

function AutoComplete({ data }: { data: Person[] }) {
  const { value, setValue, inputValue, setInputValue } = useContext(GlobalContext);
  const [optionValue, setOptionValue] = useState<string[]>([
    "John Doe",
    "Jane Smith",
    "Alex Johnson",
    "Emily Brown",
    "Michael Lee",
    "Olivia Garcia",
    "William Clark",
    "Sophia Adams",
  ]);

  useEffect(() => {
    const parsedInit = initPersonFunc();
    setOptionValue([...optionValue, parsedInit.map((val: Person) => val.name)])
  }, [])
 
  return (
    <Autocomplete
      disablePortal
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      id="custom-autocomplete"
      options={optionValue}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Staff" />}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
    />
  )
}

export default AutoComplete

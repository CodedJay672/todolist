import { useContext, useEffect } from 'react'
import { Priority, Labels } from '../../../../utils';
import styles from './CustomDropdown.module.scss';
import GlobalContext from '../../../../context/GlobalContext';
import Select from 'react-select';

function CustomDropdown({type}: {type: string}) {
  const {
    setPriority,
    setLabels,
  } = useContext(GlobalContext);

  const options = type === 'priority' ? Object.values(Priority) : Object.values(Labels);
  
  const handleSelect = (selectedOption: any) => {
    if (type === 'priority') {
      setPriority(selectedOption.value);
    } else {
      setLabels(selectedOption.map((option: any) => option.value));
    }
  };

  return (
    <div className={styles.container}>
      <Select
        defaultInputValue={type === 'priority' ? Priority.LOW : Labels.CSS}
        isMulti={type === 'labels' ? true : false}
        name={type}
        options={options.map((option) => ({ value: option, label: option }))}
        className={styles.select}
        onChange={handleSelect}
      />
    </div>
  )
}

export default CustomDropdown

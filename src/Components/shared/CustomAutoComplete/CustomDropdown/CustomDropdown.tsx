import { useId, useState } from 'react'
import { Priority, Labels } from '../../../../utils';
import styles from './CustomDropdown.module.scss';

function CustomDropdown({type}: {type: string}) {
  const [priority, setPriority] = useState<string>('');
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value)
  }

  return (
    <div className={styles.container}>
      <input
        list={id}
        value={priority}
        onChange={handleChange}
      />
      <datalist id={id}>
        {Object.values(type === 'priority' ? Priority : Labels).map((value) => (
          <option key={value} value={value} />
        ))}
      </datalist>
    </div>
  )
}

export default CustomDropdown

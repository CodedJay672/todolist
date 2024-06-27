import AutoComplete from '../../shared/CustomAutoComplete/AutoComplete';
import CustomDropdown from '../../shared/CustomAutoComplete/CustomDropdown/CustomDropdown';
import styles from './ModalForm.module.scss';
import { useContext } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';
import CustomButtons from '../../shared/CustomButtons/CustomButtons';


export default function ModalForm() {
  const {
    setShowModal,
    value,
    inputValue,
    person,
    setPerson,
    title,
    setTitle,
    description,
    setDescription,
    labels,
    priority,
    dueDate,
    savedTasks,
    setSavedTasks,
    dispatchTodoEvents,
  } = useContext(GlobalContext);  

  const handleClose = () => {
    setShowModal(false);
  }

  const handleSubission = (e: any) => {
    e.preventDefault();
    const personList = person.filter((person) => person?.name === value || person.name === inputValue);
    setPerson(person);
    
    const taskObject = {
      id: Date.now(),
      title,
      person: personList[0],
      labels,
      priority,
      startDate: dayjs(Date.now()).valueOf(),
      dueDate: dueDate.valueOf(),
      description
    }

    setSavedTasks([...savedTasks, taskObject]);

    dispatchTodoEvents({ type: 'push', payload: taskObject });
    setShowModal(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>
          Add New Task
        </span>
        <button className='material-icons-outlined' onClick={handleClose}>close</button>
      </header>
      <form className={styles.form}>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder='Task Name'
            min={3}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.data_section}>
          <AutoComplete data={person} />
          <div className={`${styles.input_container} ${styles.date_styles}`}>
            <input type="text" name="date" id="date" placeholder='Due Date' />
            <span className="material-icons-outlined">calendar_today</span>
          </div>
          <CustomDropdown type="priority" />
          <CustomDropdown type="labels" />
        </div>
        <div className={styles.input_container}>
          <textarea
            name="desc"
            id="desc"
            rows={5}
            className={styles.input_textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >

          </textarea>
        </div>
        <div className={styles.button_container}>
          <CustomButtons title="People" icon={'add'} />
          <button type="submit" className={styles.action_buttons} onClick={handleSubission}>Save</button>
        </div>
      </form>
    </div>
  )
}
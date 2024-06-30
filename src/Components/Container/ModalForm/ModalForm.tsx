import AutoComplete from '../../shared/CustomAutoComplete/AutoComplete';
import CustomDropdown from '../../shared/CustomAutoComplete/CustomDropdown/CustomDropdown';
import styles from './ModalForm.module.scss';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';
import CustomButtons from '../../shared/CustomButtons/CustomButtons';
import { initPersonFunc, users } from '../../../utils';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { useForm, SubmitHandler } from 'react-hook-form';


interface IFormInput {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  labels: string[];
  person: string;
}


export default function ModalForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

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
    setDueDate,
    savedTasks,
    setSavedTasks,
    dispatchTodoEvents,
  } = useContext(GlobalContext);
  const mock = new MockAdapter(axios);

  mock.onGet('/people').reply(200, {
    people: users
  })

  useEffect(() => {
    const getPeople = async () => {
      const personInit = await axios.get('/people').then((response) => response.data);
      setPerson([...person, personInit.people]);
    }

    getPeople();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    console.log(person);
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const personList = person.filter((person) => person?.name === value || person.name === inputValue);
    
    const taskObject = {
      id: Date.now(),
      title: data.title,
      person: personList[0],
      labels: data.labels,
      priority: data.priority,
      startDate: dayjs(Date.now()).valueOf(),
      dueDate: data.dueDate.valueOf(),
      description: data.description,
    }

    console.log(data);
    console.log(taskObject);
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <input
            type="text"
              placeholder='Task Name'
            {...register('title', { required: "This field is required", minLength: {
              value: 5,
              message: "Title must be at least 5 characters"
            }})}
          />
        </div>
        {errors.title && <span className={styles.errors}>{errors.title.message}</span>}

        <div className={styles.data_section}>
          <AutoComplete data={person} />
          <div>
            <div className={`${styles.input_container} ${styles.date_styles}`}>
              <input
                type="text"
                id="date"
                placeholder='Due Date'
                {...register('dueDate', { required: "This field is required", pattern: {
                  value: /\d{2}-\d{2}-\d{4}/,
                  message: "Date must be in the format dd-mm-yyyy"
                }})}
                />
              <span className="material-icons-outlined">calendar_today</span>
            </div>
            {errors.dueDate && <span className={styles.errors}>{errors.dueDate.message}</span>}
          </div>

          <CustomDropdown type="priority" />
          <CustomDropdown type="labels" />
        </div>

        <div className={styles.input_container}>
          <textarea
            id="desc"
            rows={5}
            className={styles.input_textarea}
            placeholder='Description'
            {...register('description', { required: "This field is required", minLength: {
              value: 10,
              message: "Description must be at least 10 characters"
            } })}
          >
          </textarea>
        </div>
        {errors.description && <span className={styles.errors}>{errors.description.message}</span>}
        
        <div className={styles.button_container}>
          <CustomButtons title="People" icon={'add'} />
          <button type="submit" className={styles.action_buttons}>Save</button>
        </div>
      </form>
    </div>
  )
}
import styles from './ModalForm.module.scss';
import { useContext, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { Person } from '../../../utils';


export default function PeopleModal() {
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ phone, setPhone ] = useState<string>('');
  const {
    person,
    setPerson,
    setShowPersonModal,
    dispatchPersonEvents,
  } = useContext(GlobalContext);

  const handleClose = () => {
    setShowPersonModal(false);
  }

  const handleSubission = (e: any) => {
    e.preventDefault();
    const newPerson: Person = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    setPerson([...person, newPerson]);
    dispatchPersonEvents({ type: "push", payload: newPerson });
    setShowPersonModal(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>
          Add New Person
        </span>
        <button className='material-icons-outlined' onClick={handleClose}>close</button>
      </header>
      <form className={styles.form}>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder='Name'
            min={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email'
            min={3}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phone"
            placeholder='Phone'
            min={3}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.button_container}>
          <button type="submit" className={styles.action_buttons} onClick={handleSubission}>Save</button>
        </div>
      </form>
    </div>
  )
}
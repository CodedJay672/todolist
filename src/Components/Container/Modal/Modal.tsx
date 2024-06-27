import { useContext } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import styles from './Modal.module.scss';
import GlobalContext from '../../../context/GlobalContext';
import PeopleModal from '../ModalForm/PeopleModal';

export default function Modal() {
  const { showModal, showPersonModal } = useContext(GlobalContext);

  return (
    <>
    {showModal && (
      <div className={styles.container}>
        {showPersonModal ? <PeopleModal /> : <ModalForm />}
      </div>
    )}
   </>
  )
}

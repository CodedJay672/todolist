import ModalForm from '../ModalForm/ModalForm';
import styles from './Modal.module.scss';

export default function Modal() {
  return (
    <div className={styles.container}>
      <ModalForm />
    </div>
  )
}

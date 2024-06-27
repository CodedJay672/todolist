import { useContext, useState } from 'react';
import styles from './CustomButtons.module.scss'
import GlobalContext from '../../../context/GlobalContext';

export default function CustomButtons({ title, icon }: { title: string, icon: string }) {
  const { setShowPersonModal, setShowModal } = useContext(GlobalContext);

  const handleClick = () => {
    if (title === 'People') {
      setShowPersonModal(true);
    } else {
      setShowModal(true);
    }
  }

  
  return (
    <button className={`${styles.wrapper}`} onClick={handleClick}>
      {icon && <span className={`material-icons-outlined ${styles.icon}`}>{icon}</span>}
      <span className={styles.text}>
        Add {title}
      </span>
    </button>
  )
}

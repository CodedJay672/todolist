import styles from './ModalForm.module.scss';

export default function ModalForm() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>
          Add New Task
        </span>
        <button className='material-icons-outlined'>close</button>
      </header>
      <form className={styles.form}></form>
    </div>
  )
}

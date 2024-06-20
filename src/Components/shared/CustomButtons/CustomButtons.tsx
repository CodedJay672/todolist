import styles from './CustomButtons.module.scss'

export default function CustomButtons({ title, icon }: { title: string, icon: string }) {
  return (
    <button className={`${styles.wrapper}`}>
      {icon && <span className={`material-icons-outlined ${styles.icon}`}>{icon}</span>}
      <span className={styles.text}>
        {title}
      </span>
    </button>
  )
}

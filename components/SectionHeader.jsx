import styles from '../styles/SectionHeader.module.css'

export default function SectionHeader({title}) {
    return (
      <div className={styles.container}>
          <h3>{title}</h3>
      </div>
    )
}

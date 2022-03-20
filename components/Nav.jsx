import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
      <ul　className={styles.container}>
          <li className={styles.listItem}>仕事</li>
          <li className={styles.listItem}>教育</li>
          <li className={styles.listItem}>スキル</li>
          <li className={styles.listItem}>プロジェクト</li>
          <li className={styles.listItem}>趣味</li>
          <li className={styles.listItem}>資格</li>
      </ul>
    )
}

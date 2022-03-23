import { Grid } from '@material-ui/core'
import { Element } from 'react-scroll/modules'
import styles from '../styles/Work.module.css'
import SectionHeader from './SectionHeader'

export default function Certifieds() {
  return (
    <div className={styles.container}>
      <Element name="certifieds" />
      <SectionHeader title="資格" />
      <Grid container>
        <Grid item xs={6}>
          <div style={{ margin: 35, marginTop: 0 }}>
            <div className={styles.workContent}>
              <h3 className={styles.workContentTitle}>Salesforce 開発者</h3>
              <p className={styles.workContentBody}>Apex、Lwc コンポネント等</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 35, marginTop: 0 }}>
            <div className={styles.workContent}>
              <h3 className={styles.workContentTitle}>Salesforce 開発者</h3>
              <p className={styles.workContentBody}>Apex、Lwc コンポネント等</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 35, marginTop: 0 }}>
            <div className={styles.workContent}>
              <h3 className={styles.workContentTitle}>Salesforce 開発者</h3>
              <p className={styles.workContentBody}>Apex、Lwc コンポネント等</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

import { Grid } from '@material-ui/core'
import { Element } from 'react-scroll/modules'
import styles from '../styles/Work.module.css'
import SectionHeader from './SectionHeader'

export default function Work() {
  return (
    <div>
      <Element name="work" />
      <SectionHeader title="仕事" />
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

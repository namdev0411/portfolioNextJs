import { Grid } from '@material-ui/core'
import styles from '../styles/Footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';


export default function Footer() {
  return (
    <div className={styles.container}>
      <Grid container justifyContent='center'>
        <a className={styles.iconLink + ' '+styles.facebookIcon} target='_blank' rel='noreferrer' href="https://www.facebook.com/nam.cool.773"><FacebookIcon /></a>
        <a className={styles.iconLink + ' '+styles.gitHubIcon} target='_blank' rel='noreferrer' href="https://github.com/namdev0411"><GithubIcon color= 'dark' /></a>
      </Grid>
    </div>
  )
}

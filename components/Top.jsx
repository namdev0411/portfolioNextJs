import Image from 'next/image'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import styles from '../styles/Top.module.css'

export default function Top() {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={6}>
                    <Image 
                        src='/Logo.png'
                        alt='Page logo'
                        height={60}
                        width={250}
                    />
                </Grid>
                <Grid item xs={6}>
                <Nav/>
                </Grid>
            </Grid>
        </div>
    )
  }
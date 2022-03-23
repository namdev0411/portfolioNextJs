import Image from 'next/image'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import styles from '../styles/Top.module.css'
import { useEffect, useState } from 'react'

export default function Top() {
    
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
    
    const handleScroll = ()=>{
        setOffset(window.scrollY);
    }

    return (
        <div className={offset ? styles.container +' '+ styles.scrollStyle: styles.container}>
            <Grid container>
                <Grid item xs={5}>
                    <Image 
                        src='/Logo.png'
                        alt='Page logo'
                        height={50}
                        width={220}
                    />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <Nav offset={offset}/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
  }
import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/Top'
import Work from '../components/Work'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV-ナン</title>
        <meta name="description" content="Portfolio Nam Nguyen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top/>
      <Work/>
      <Work/>
    </div>
  )
}

import styles from '../styles/Project.module.css'
import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { Grid } from '@material-ui/core'

const projectlist = [
  { title: 'Shop Pet', url: '/petshop.png' },
  { title: '料理紹介', url: '/food.png' },
  { title: '商品管理', url: '/ProductManager.png' },
]

export default function Project() {
  return (
    <div>
      <SectionHeader title="プロジェクト" />
      <div style={{marginTop: 30}}>
        <Grid container spacing={3}>
          {projectlist.map((item, index) => (
            <Grid key={index} item xs={4}>
              <div className={styles.contentWrap}>
                <Image
                  src={item.url}
                  alt="Giang"
                  layout="responsive"
                  height={160}
                  width={300}
                />
                <div className={styles.TitleWrap}>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

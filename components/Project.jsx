import styles from '../styles/Project.module.css'
import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { Grid } from '@material-ui/core'

const projectlist = [
  { title: 'Shop Pet', image: '/petshop.png', url: 'https://petshop-65533.web.app/home' },
  { title: '料理紹介', image: '/food.png', url: 'https://learn-react-hontoni.vercel.app/'},
  { title: '商品管理', image: '/ProductManager.png', url: 'http://minishop-admin.surge.sh/' },
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
                  src={item.image}
                  alt="Giang"
                  layout="responsive"
                  height={160}
                  width={300}
                />
                <div className={styles.TitleWrap}>
                  <h3 className={styles.title}>
                    <a href={item.url} target = '_blank' rel='noreferrer'>{item.title}</a>
                  </h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

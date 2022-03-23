import { Grid } from '@material-ui/core'
import Image from 'next/image'
import { Element } from 'react-scroll/modules'
import SectionHeader from './SectionHeader'

const certifiedsList = [
 {
   name: '認定 Platform アプリケーションビルダー',
   image: '/Appbuider_Ces.jpeg'
 },
 {
    name: '日本語能力試験JLPT 2級',
    image: '/jlptlogo.jpg'
 },
 {
    name: 'Java™プログラミング能力認定 2級',
    image: '/javaces.jpg'
 }
];

export default function Certifieds() {
  return (
    <div>
      <Element name="certifieds" />
      <SectionHeader title="資格" />
      <Grid container>
          {
            certifiedsList.map((item,index)=>(
                <Grid key={index} item xs={4}>
                    <div style={{display: 'flex',flexDirection: 'column', margin: 35}}>
                        <Image src={item.image} height={210} width={300}/>
                        <h3 style={{textAlign: 'center'}}>{item.name}</h3>
                    </div>
                </Grid>
            ))
          }
      </Grid>
    </div>
  )
}

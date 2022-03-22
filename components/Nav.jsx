import { useEffect, useState } from 'react';
import Link from 'react-scroll/modules/components/Link'
import styles from '../styles/Nav.module.css'

const navlist = [
  {
    to: 'work',
    name: '仕事'
  },
  {
    to: 'edu_exp',
    name: '教育'
  },
  {
    to: 'work',
    name: 'スキル'
  },
  {
    to: 'work',
    name: 'プロジェクト'
  },{
    to: 'work',
    name: '趣味'
  }
]

export default function Nav() {
  const [data, setData] = useState([]);
  const [oldFocus, setOldFocus] = useState(null);
  useEffect(() => {
    const dataResult = [];
    navlist.forEach(item =>{
      dataResult.push({...item,focus: false});
    })
    setData(dataResult);
  }, []);

  const handleClick = (index)=>{
    let newData = data;
    if(oldFocus != null){
      newData[oldFocus].focus = false;
    }
    setOldFocus(index);
    newData[index].focus = true;
    console.log( newData);
    setData(newData);
  }
  return (
    <ul className={styles.container}>
      {
        data.map((item,index)=>(
          <Link
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={item.focus ? styles.listItem + ' '+styles.focus : styles.listItem}
            onClick={()=>handleClick(index)}
          >
          {item.name}
          </Link>
        ))
      }
    </ul>
  )
}

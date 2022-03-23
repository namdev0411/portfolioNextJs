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
    to: 'project',
    name: 'プロジェクト'
  },{
    to: 'certifieds',
    name: '資格'
  }
]
export default function Nav({offset}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataResult = [];
    navlist.forEach((item,index) =>{
      if(index == 0){
        dataResult.push({...item,focus: true});
      }else{
        dataResult.push({...item,focus: false});
      }
    })
    setData(dataResult);
  }, []);

  const handleClick = (index)=>{
    let newData = data;
    newData.forEach(item=>{
      item.focus = false;
    });
    newData[index].focus = true;
    setData(newData);
  }
  const getClass = (item)=>{
    let result = styles.listItem;
    if(offset){
     result+= (' ' + styles.offset)
    }
    if(item.focus){
      result+= (' ' + styles.focus)
    }
    return result;
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
            className={getClass(item)}
            onClick={()=>handleClick(index)}
          >
          {item.name}
          </Link>
        ))
      }
    </ul>
  )
}

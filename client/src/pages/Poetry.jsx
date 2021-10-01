import React from 'react';
import style from './Poetry.module.scss';
import classNames from 'classnames';
import { Best, MenuList } from '../components';
import flavor1 from '../assets/pow.jpeg';

//decorator
import { useSelector } from 'react-redux';

function Poetry({ loading, setLoading, appState, props}) {
  
  const [whomeItem, setWhomeItem] = React.useState(appState.whome);
  const [activeWhomeItem, setActiveWhomeItem] = React.useState('Все стихи');

  const [activeId, setActiveId] = React.useState(0);
  const store = useSelector((store) => store);
  const [contentItem, setContentItem] = React.useState(store.poetry.poetry);

//
//   const getMenu = () => {
//     const arrayWhomeMenu=[]
//     const whomeItems = contentItem.map((item)=> arrayWhomeMenu.push(item.consecrated))
//     return
//   }

  return (
    <section className={classNames(style.poetry, 'poetry')}>
      <div className={style.meta}>

        <div className={classNames(style.headline, 'title')}>Поэзия</div>
        <div className={style.imgInner}>
        <img className={style.img} src={flavor1} alt="bg" />
        </div>
      </div>

      <div className={style.topMenu}></div>

      <Best top={appState.top}/>

      <div className="container">
        <div className={style.wrapper}>

        <MenuList
                  items={appState.whomeMenu}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  setActiveWhomeItem={setActiveWhomeItem}
        />

          <div className={classNames(style.inner, 'poetry__inner')}>
            {contentItem.map((item, index) => activeWhomeItem === item.consecrated ? (
              <div className={classNames(style.item)} key={item}>
                <div className={style.contentBox}>
                  <div className={style.img}></div>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.text}>{item.text}</div>
                  <div className={style.date}>{item.date}</div>
                </div>
              </div>
            ) :
            ''
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poetry;

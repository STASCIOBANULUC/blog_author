import React from 'react';
import style from './Best.module.scss';
// import axios from 'axios';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const Best = (props) => {
  const [bestitem, setBestitem] = React.useState([]);
  const store = useSelector((store) => store);

  // React.useEffect(() => {
    // setBestitem(store.top);
    // axios.get('top.json').then((res) => {
    //   setBestitem(res.data.top);
    // });
  // }, [store.top]);

  return (
    <section
      className={style.best}
      //  style={{
      //         backgroundImage   : "url(/img/stock.jpg)",
      //         backgroundPosition: 'center',
      //         backgroundSize    : 'cover',
      //         backgroundRepeat  : 'no-repeat'
      // }}
    >
      {/* <div className="container"> */}
      <div className="title">Лучшие работы</div>
      <div className="subtitle">Вот некоторые из моих работ, которые для меня бесценны!</div>

      <div className={style.inner}>
        {props.top.map((item, index) => (
          <div className={classNames(style.effect7, style.item)} key={index}>
            <div className={style.contentBox}>
              <div className={style.img}></div>

              <div className={style.meta}>
                <div className={style.title}>{item.title}</div>
                <div className={style.whom}>{item.id_whom}</div>
                <img
                  className={style.icon}
                  src={`${process.env.PUBLIC_URL}/img/assets/rose-text.svg`}
                  alt="rose"
                />
                <div className={style.icon}></div>
              </div>

              <div className={style.innerText}>
                <div className={style.text}>{item.text}</div>
              </div>

              <div className={style.date}>{item.date}</div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Best;

import React from 'react';
import { Header, Preloader } from './components';
import { Home } from './pages';
import axios from 'axios';
import { setPoetry } from './actions/poetry';
// import { setWhomeMenu } from './actions/whomeMenu.js';
import {connect} from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';



const App = (props) => {
  const {setPoetry} = props
  // const { setWhomeMenu } = props
  const {poetry, isReady } = props.poetry
  // const[isContent, setIsContent] = React.useState([]);
  const [isWhomeMenu, setIsWhomeMenu] = React.useState([]);

  React.useEffect(() => {

    async function fetchData() {
        const componentWillMount = await
            //там где then используется ECMAScript
            axios.get('http://127.0.0.1:8000/verse')

            setPoetry(componentWillMount.data);
            console.log(componentWillMount.data)
    }
    fetchData();
}, []);

const mapStateToProps = ({poetry: {items}}) => ({
  poetry: poetry.items,
  isReady: poetry.isReady
})

  return (
    <div className="wrapper">
      <Header />
      {!isReady ? (
        <Preloader isLoading={isReady} />
      ) : (
        <Home appState={props.appState}/>
      )}
    </div>
  );
};


//прикручиваем состояние в пропсы
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  //вернет обьект который мы отправляем в наш редьюсер
setPoetry: poetry => dispatch(setPoetry(poetry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

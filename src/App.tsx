import React from 'react';
// import './App.css';
import './styles/index.scss'
import ButtonTest from "./components/Button/test2";
import MenuTest from "./components/Menu/test";
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Transition from "./components/Transition/transition";
import IconTest from "./components/Icon/iconTest";
function App() {
  return (
    <div className="App">
      <h2>动画测试</h2>
     <h2>图标测试</h2>
      <IconTest ></IconTest>
      <h2>菜单</h2>
      <MenuTest></MenuTest>
      {/*<ButtonTest></ButtonTest>*/}

    </div>
  );
}

export default App;

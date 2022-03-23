import React, {useState} from 'react';
// import './App.css';
import './styles/index.scss'
import ButtonTest from "./components/Button/test2";
import MenuTest from "./components/Menu/test";
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Transition from "./components/Transition/transition";
import IconTest from "./components/Icon/iconTest";
import Input from "./components/Input/Input";
import { faCoffee, faAddressBook, faAllergies } from "@fortawesome/free-solid-svg-icons"

function App() {
  const [inputValue, setInputValue] = useState('aa')
  return (
    <div className="App">
      <Input
        value={inputValue}
        type="text"
        icon={faCoffee}
        prepend="测试前缀"
        size="sm"
        style={{width: '600px'}}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
     {/* <h2>动画测试</h2>*/}
     {/*<h2>图标测试</h2>*/}
     {/* <IconTest ></IconTest>*/}
     {/* <h2>菜单</h2>*/}
     {/* <MenuTest></MenuTest>*/}
      {/*<ButtonTest></ButtonTest>*/}

    </div>
  );
}

export default App;

import React from "react";
import { faCoffee, faAddressBook, faAllergies } from "@fortawesome/free-solid-svg-icons"
import Icon from "./icon";
// https://fa5.dashgame.com/#/%E5%9B%BE%E6%A0%87 图标地址
const IconTest: React.FC = () => {
  return (
    <div>
      <Icon icon={faCoffee}></Icon>
      <Icon icon={faAddressBook}></Icon>
      <Icon icon={faAllergies}></Icon>
    </div>


  )
}

export default IconTest

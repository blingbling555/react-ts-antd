import WlButton, {ButtonSize, ButtonType} from "./index";
import React from "react";
function ButtonTest() {
  function handlerClick() {
    console.log('点击了')
  }

  return (
    <div>
      <h4>不同的 button size</h4>
      <WlButton buttonType={ ButtonType.Primary} buttonSize={ButtonSize.Small} onClick={handlerClick}>我的按钮</WlButton>
      <WlButton buttonType={ ButtonType.Primary} buttonSize={ButtonSize.Normal}>我的按钮</WlButton>
      <WlButton buttonType={ ButtonType.Primary} buttonSize={ButtonSize.Large}>我的按钮</WlButton>

      <h4 style={{marginTop: '20px'}}>不同的 button type</h4>
      <WlButton buttonType={ButtonType.Primary}>按钮</WlButton>
      <WlButton buttonType={ButtonType.Default}>按钮</WlButton>
      <WlButton buttonType={ButtonType.Danger}>按钮</WlButton>
      <WlButton buttonType={ButtonType.Link} href="http://www.baidu.com" target="_blank">按钮</WlButton>

      <h4 style={{marginTop: '20px'}}>按钮禁用</h4>
      <WlButton buttonType={ButtonType.Primary} disabled={true}>按钮</WlButton>
      <WlButton buttonType={ButtonType.Link} disabled={true} >按钮</WlButton>
    </div>
  );
}

export default ButtonTest;

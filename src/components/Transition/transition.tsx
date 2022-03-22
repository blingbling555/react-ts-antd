import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps, CSSTransitionClassNames} from 'react-transition-group/CSSTransition'
// https://blog.csdn.net/weixin_44184425/article/details/122161997 引入报错问题解决
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
interface ExtraProps {
  animation?: AnimationName,
  wrapper? : boolean,
}
type TransitionProps = CSSTransitionProps & ExtraProps
const Transition: React.FC<TransitionProps> = (props) => {

  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props

  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition

import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent  } from "react";
import Icon from "../Icon/icon";
import classnames from "classnames";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
type SizeType = 'lg' | 'sm'
// Omit忽略某个属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  disabled?: boolean,
  size?: SizeType,
  icon?: IconProp,
  prepend?: string | ReactElement,
  append?: string | ReactElement,
  // 这里是为了在外面使用时，有提示
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps>= (props) => {
  const {disabled, icon, prepend, size, append, children,className,style, ...restProps} = props
  const cnames = classnames('viking-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper">
        <Icon icon={icon} title={`title-${icon}`}/></div>}
      <input
        className="viking-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  )
}

export default Input


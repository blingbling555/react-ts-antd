import React, {ButtonHTMLAttributes} from "react";
import classnames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
  Normal = 'normal'

}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonsProps {
  buttonsize?: ButtonSize,
  buttontype?: ButtonType,
  disabled?: boolean,
  href?: string,
  className?: string,
  autoFocus?: boolean,
  children?: React.ReactNode
}
// 交叉类型 把两种类型合并在一起
type NativeButtonProps = BaseButtonsProps & React.ButtonHTMLAttributes<HTMLElement>
type anchorButtonProps = BaseButtonsProps & React.AnchorHTMLAttributes<HTMLElement>
// Partial: 如果交叉类型的有些选项一个是必填的一个不是必填的会有问题 我们把这一部分设置为可选的
export type ButtonProps = Partial<NativeButtonProps & anchorButtonProps>
// console.log(ButtonProps)
const Button: React.FC<ButtonProps> = (props) => {
  const {disabled, children, buttonsize, buttontype, href, className, ...restProps} = props
  // const classNames = `button button-${buttonsize} button-${buttontype}`
  const classNames = classnames('btn', className, {
    [`btn-${buttonsize}`]: buttonsize,
    [`btn-${buttontype}`]: buttontype,
    'btn-disabled': buttontype === ButtonType.Link && disabled
  })
  if (buttontype === ButtonType.Link && href) {
    return (
      <a
        href={href}
        className={classNames}
        {...restProps}
      >{children}</a>
    )
  } else {
    return (
      <button
        disabled={disabled}
        className={classNames}
        {...restProps}
      >{children}</button>
    )
  }
}

Button.defaultProps = {
  buttonsize: ButtonSize.Normal,
  buttontype: ButtonType.Default,
  disabled: false,
  autoFocus: false,
  className: ''

}
export default Button

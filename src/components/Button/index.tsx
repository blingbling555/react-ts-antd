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
  buttonSize?: ButtonSize,
  buttonType?: ButtonType,
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
  const {disabled, children, buttonSize, buttonType, href, className, ...restProps} = props
  // const classNames = `button button-${buttonSize} button-${buttonType}`
  const classNames = classnames('btn', className, {
    [`btn-${buttonSize}`]: buttonSize,
    [`btn-${buttonType}`]: buttonType,
    'btn-disabled': buttonType === ButtonType.Link && disabled
  })
  if (buttonType === ButtonType.Link && href) {
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
  buttonSize: ButtonSize.Normal,
  buttonType: ButtonType.Default,
  disabled: false,
  autoFocus: false,
  className: ''

}
export default Button

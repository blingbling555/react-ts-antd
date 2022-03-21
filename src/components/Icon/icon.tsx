import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
interface IconProps extends FontAwesomeIconProps{
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = ({theme, className, ...restProps}) => {
  const classes = classnames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
}

export default Icon

import React from "react";
import {fireEvent, render} from '@testing-library/react'

import Button, {ButtonProps, ButtonSize, ButtonType} from "./index";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  buttonType: ButtonType.Primary,
  buttonSize: ButtonSize.Large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}
test('第一个测试', () => {
  const wrapper = render(<Button disabled={true}>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeDisabled()
})

describe('test Button comnponent', () => {
  it('should default button', function () {
    const wrapper = render(<Button  {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    // 測試點擊事件被執行
    expect(defaultProps.onClick).toHaveBeenCalled()
  });
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button buttonType={ButtonType.Link} href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})

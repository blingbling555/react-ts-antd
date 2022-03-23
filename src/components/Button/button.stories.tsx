import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ButtonType, ButtonSize } from "./index";
import Button from './index'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button buttonsize={ButtonSize.Large}> large button </Button>
    <Button buttonsize={ButtonSize.Normal}> small button </Button>
    <Button buttonsize={ButtonSize.Small}> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button buttontype={ButtonType.Primary}> primary button </Button>
    <Button buttontype={ButtonType.Danger}> danger button </Button>
    <Button buttontype={ ButtonType.Link} href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)

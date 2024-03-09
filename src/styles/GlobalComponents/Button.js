import React from 'react'
import { ButtonText, ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled} onClick={() => window.location.href=props.href}>{props.children}
    <ButtonText>📄  Resume</ButtonText>
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}></ButtonFront>
  </ButtonBack>
);

export default Button

import React from "react";

export interface ButtonProps {
  label: string;
  variant: string;
  style: object;
  icon: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.variant === 'primary' ? 'button' : 'button__delete'} style={props.style}>
      {props.label}
      <svg className='button__icon'>
        <use xlinkHref={props.icon} />
      </svg>
    </button>
  );
};

export default Button;
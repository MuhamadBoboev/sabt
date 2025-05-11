import { ForwardedRef, forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonProps } from '@shared/model/ButtonProps'
import classes from './button.module.scss'
import { buttonStyleClasses } from './buttonStyleClasses'

const Button = forwardRef(
  (
    {
      component: Component = 'button',
      children,
      className,
      buttonSize = 'medium',
      variant = 'contained',
      radius = 'small',
      bg = 'primary',
      fullWidth,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          classes.button,
          buttonStyleClasses(classes, {
            buttonSize,
            bg,
            fullWidth,
            radius,
            variant,
          }),
          className,
        )}
        {...(props as any)}
      >
        {children}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export { Button }

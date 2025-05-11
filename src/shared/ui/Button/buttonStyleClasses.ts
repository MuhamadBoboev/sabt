import { ButtonStyles } from '@shared/model/ButtonProps'
import { ClassesType } from '@shared/model/ClassesType'
import clsx from 'clsx'

export function buttonStyleClasses(
  classes: ClassesType,
  styles: ButtonStyles,
): string {
  const { buttonSize, bg, radius, variant, fullWidth } = styles

  return clsx(
    /** desktop classes */
    classes[`size-${buttonSize}`],
    classes[`variant-${variant}`],
    classes[`radius-${radius}`],
    classes[`bg-${bg}`],
    classes[`fullWidth-${fullWidth}`],
  )
}

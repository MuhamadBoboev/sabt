import Link, { LinkProps } from "next/link"

interface Props {
  to: string
  linkProps?: Omit<LinkProps, 'to'>
}

export const LinkButton = ({ to, linkProps, ...buttonProps }: Props) => {
  return (
    <Link
      href={to}
      {...linkProps}
    >
      <button {...buttonProps} ></button>
    </Link>
  )
}

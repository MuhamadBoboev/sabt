import classes from './section.module.scss';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';
import { Wrapper } from '@shared/ui/Wrapper';

interface Props extends HTMLAttributes<HTMLElement> {
  name: ReactNode;
  buttonMore?: ReactNode;
  breadcrumbs?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  headerProps?: HTMLAttributes<HTMLElement>;
  nameProps?: HTMLAttributes<HTMLHeadingElement>;
  buttonMoreProps?: HTMLAttributes<HTMLDivElement>;
  mainTitle?: boolean;
  lastSection?: boolean;
}

// eslint-disable-next-line react/display-name
const Section = forwardRef<HTMLElement, Props>(({
  name,
  buttonMore = null,
  breadcrumbs,
  className,
  wrapperProps,
  headerProps,
  nameProps,
  buttonMoreProps,
  children,
  mainTitle,
  lastSection,
  ...props
}, ref) => {
  const Title = mainTitle ? 'h1' : 'h2';

  return (
    <section
      {...props}
      ref={ref} // Устанавливаем ref
      className={clsx(classes.section, breadcrumbs && classes.page, className, lastSection && classes.lastSection)}
    >
      <Wrapper
        {...wrapperProps}
        className={clsx(classes.wrapper, wrapperProps?.className)}
      >
        {breadcrumbs && <div className={classes.breadcrumbs}>{breadcrumbs}</div>}
        <header
          {...headerProps}
          className={clsx(classes.header, headerProps?.className)}
        >
          <Title
            {...nameProps}
            className={clsx(classes.name, nameProps?.className)}
          >{name}</Title>
          <div
            {...buttonMoreProps}
            className={clsx(classes.buttonMore, buttonMoreProps?.className)}
          >{buttonMore}</div>
        </header>
        {children}
      </Wrapper>
    </section>
  );
});

export { Section };

import React from 'react';

type BaseProps = {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseProps & {
  href?: never;
};

type ButtonAsAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none text-center inline-block';
  
  const variants = {
    primary: 'bg-orange-500 text-prussian-blue-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10',
    ghost: 'text-black-700 dark:text-alabaster-grey-700 hover:text-prussian-blue-500 dark:hover:text-white hover:bg-white/5',
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchorProps;
    return (
      <a href={href} className={finalClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button className={finalClassName} {...buttonProps}>
      {children}
    </button>
  );
};

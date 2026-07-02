import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'google'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  loading?: boolean
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary font-title font-semibold shadow-[0_8px_30px_rgba(242,202,80,0.15)] hover:brightness-110',
  secondary:
    'bg-surface-chighest text-on-surface font-title font-semibold hover:bg-surface-variant',
  outline:
    'bg-transparent border border-outline-variant/30 text-on-surface font-body hover:bg-surface-variant/30',
  ghost:
    'bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-variant/20',
  danger:
    'bg-transparent border border-error/20 text-error hover:bg-error/10',
  google:
    'bg-transparent border border-outline-variant/30 text-on-surface font-body hover:bg-surface-variant/30',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-xs rounded-lg',
  md: 'h-12 px-4 text-base rounded-lg',
  lg: 'h-14 px-6 text-lg rounded-xl',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      icon,
      loading,
      fullWidth,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={`
          inline-flex items-center justify-center gap-2
          transition-all duration-200
          active:scale-[0.98]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${variant === 'primary' ? 'font-semibold' : ''}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : icon ? (
          <>{icon}</>
        ) : null}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button

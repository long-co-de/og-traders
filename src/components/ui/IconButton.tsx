import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  variant?: 'default' | 'primary'
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, variant = 'default', className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        className={`
          inline-flex items-center justify-center
          transition-colors focus:outline-none
          ${variant === 'primary'
            ? 'text-on-surface-variant/50 hover:text-primary'
            : 'text-on-surface-variant hover:text-primary hover:bg-surface-variant/20'
          }
          ${className}
        `}
        {...props}
      >
        {icon}
      </button>
    )
  }
)
IconButton.displayName = 'IconButton'

export default IconButton

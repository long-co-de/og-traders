import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', icon, rightIcon, type, ...props }, ref) => {
    const hasIcon = !!icon
    const hasRightIcon = !!rightIcon

    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 pointer-events-none [&>svg]:w-4 [&>svg]:h-4">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`
            w-full h-12
            bg-surface-cl
            border border-outline-variant/40
            rounded-lg
            text-on-background font-data text-sm
            placeholder:text-on-surface-variant/30
            focus:border-primary focus:ring-1 focus:ring-primary/40
            outline-none
            transition-all duration-300
            ${hasIcon ? 'pl-10' : 'pl-4'}
            ${hasRightIcon ? 'pr-10' : 'pr-4'}
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export default Input

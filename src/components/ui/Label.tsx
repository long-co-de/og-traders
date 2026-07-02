import { LabelHTMLAttributes, forwardRef } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`font-label text-xs text-on-surface/70 uppercase tracking-wider font-bold ${className}`}
        {...props}
      >
        {children}
        {required && <span className="text-loss ml-1">*</span>}
      </label>
    )
  }
)
Label.displayName = 'Label'

export default Label

import classNames from 'classnames'
import { InputHTMLAttributes, ReactNode } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const Input = ({ icon, className, ...props }: IInputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={classNames(
          'rounded-lg p-2 text-black focus-visible:outline-none',
          { 'pr-10': icon },
          className,
        )}
      />
      {icon && <div className="absolute right-0 top-0 -translate-x-1 translate-y-2">{icon}</div>}
    </div>
  )
}

export default Input

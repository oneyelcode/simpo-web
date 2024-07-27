'use client'
import clsx from 'clsx'
import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          'shadow-input dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-neutral-400',
          'focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'group-hover/input:shadow-none',
          'dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }

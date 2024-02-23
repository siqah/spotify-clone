import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return(
        <input 
        type={type}
        className={twMerge(
            `flex
            w-full
            founded-md
            bg-neutral-700
            border
            border-transparent
            px-3
            py-3
            text-sm
            file:border-0
            file:bg-transparent
            filetext-sm
            file:font-mediump
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabledopacity-50
            focus:outline-none
            
            `,
            className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
        />
    )
});

Input.displayName ="Input"

export default Input
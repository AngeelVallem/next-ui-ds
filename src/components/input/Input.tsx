import React, { forwardRef } from 'react';
import { tv } from "tailwind-variants";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputSize?: "small" | "medium" | "large";
    shape?: "normal" | "rounded" | "square";
    disabled?: boolean;
    variant?: "flat" | "bordered" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    labelText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    labelText = "Email",
    inputSize = "small",
    shape = "square",
    disabled = false,
    variant = "bordered",
    name,
    color = "default",
    ...props
}, ref) => {
    const classes = tv({
        base: "",
        variants: {
            variantContainer: {
                flat: "relative transition-all hover:opacity-85",
                underlined: "relative transition-all border-b-4",
                bordered: "relative transition-all border-2"
            },
            variantInput: {
                flat: "w-full h-full transition-all focus:outline-none font-light",
                underlined: "w-full h-full transition-all focus:outline-none",
                bordered: "w-full h-full transition-all focus:outline-none"
            },
            variantLabel: {
                flat: "absolute left-1 top-0 text-xs",
                underlined: "absolute left-1 top-0 text-xs",
                bordered: "absolute left-1 top-0 text-xs"
            },
            shape: {
                rounded: "rounded-xl",
                normal: "rounded-md",
                square: "rounded-none",
            },
            size: {
                small: "p-1 pt-2 text-sm",
                medium: "p-1 pt-3",
                large: "p-1 pt-5",
            },
            containerSize: {
                small: "h-10",
                medium: "h-13",
                large: "h-15",
            },
            disabled: {
                true: "pointer-events-none",
            },
            borderColor: {
                none: "border-none",
                default: "border-slate-300",
                primary: "border-slate-900",
                secondary: "border-teal-900",
                success: "border-green-900",
                warning: "border-yellow-900",
                danger: "border-red-900"
            },
            backgroundColor: {
                underlined: 'bg-transparent',
                default: "bg-slate-300",
                primary: "bg-slate-900",
                secondary: "bg-teal-900",
                success: "bg-green-900",
                warning: "bg-yellow-900",
                danger: "bg-red-900"
            },
            textColor: {
                default: "text-white",
                primary: "text-slate-700",
                secondary: "text-teal-700",
                success: "text-green-700",
                warning: "text-yellow-700",
                danger: "text-red-700"
            },
            inputTextColor: {
                default: "text-white",
                underlined: "text-gray-700"
            }
        }
    })
    return (
        <div className={classes({
            variantContainer: variant, shape, containerSize: inputSize,
            borderColor: variant === "underlined" || variant === "bordered" ? color : "none",
        })}>
            <input
                id="inputField"
                type="text"
                name={name}
                className={classes({
                    variantInput: variant,
                    backgroundColor: variant === "underlined" || variant === "bordered" ? "underlined" : color,
                    inputTextColor: variant === "underlined" || variant === "bordered" ? "underlined" : "default",
                    size: inputSize
                })}
                ref={ref}
                {...props}
            />
            <label
                htmlFor={name}
                className={classes({
                    variantLabel: variant,
                    textColor: (variant === "underlined" || variant === "bordered") && color === "default" ? "primary" : color,
                })}
            >
                {labelText}
            </label>
        </div>


    )
});

export default Input
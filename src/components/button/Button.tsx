import { tv } from "tailwind-variants";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";

  /**
   * Button shape
   */
  shape?: "normal" | "rounded" | "square";
  /**
   * If button is disabled
   */
  disabled?: boolean;
  /**
   * Button types
   */
  variant?: "primary" | "secondary" | "text";
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size = "medium",
  variant = "primary",
  shape = "normal",
  children,
  disabled = false,
  ref,
  ...props
}: ButtonProps) => {
  const classes = tv({
    base: "rounded-md border border-solid py-sm outline-none duration-300 ease-linear active:scale-90",
    variants: {
      type: {
        primary: "bg-primary text-white hover:opacity-80",
        secondary: "border-secondary text-black hover:opacity-60",
        text: "text-black hover:opacity-80",
      },
      shape: {
        rounded: "rounded-xl",
        normal: "rounded-md",
        square: "rounded-none",
      },
      size: {
        small: "px-xs text-sm",
        medium: "px-xl",
        large: "px-xxxl",
      },
      disabled: {
        true: "pointer-events-none bg-accent3 opacity-50 active:transform-none",
      },
    },
  });

  return (
    <button
      type="button"
      className={classes({ type: variant, shape, size, disabled })}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

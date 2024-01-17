import { classes } from "@/theme/components/button";

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

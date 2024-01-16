import { clsx } from "clsx";

type ButtonType = "primary" | "secondary" | "text";

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
   * If button is loading
   */
  loading?: boolean;
  /**
   * If button is disabled
   */
  disabled?: boolean;
  /**
   * Button types
   */
  variant?: ButtonType;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size = "medium",
  variant = "primary",
  shape = "normal",
  children,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonClass = clsx(
    "outline-none py-1 px-4 rounded-md ease-linear duration-300 active:scale-90",
    {
      "bg-aBlack text-aSeaSalt hover:bg-aSpace hover:border-aSpace":
        variant === "primary",
    },
    {
      "text-aBlack border-solid border border-aBlack hover:border-aPlatinum hover:text-aSpace":
        variant === "secondary",
    },
    {
      "text-aBlack hover:bg-aWhite": variant === "text",
    },
    {
      "rounded-xl": shape === "rounded",
    },
    {
      "rounded-none": shape === "square",
    },
    {
      "px-6 text-lg": size === "large",
    },
    {
      "px-2 text-sm": size === "small",
    },
    { "cursor-wait active:transform-none": loading },
    { "cursor-not-allowed active:transform-none": disabled },
  );

  return (
    <button
      type="button"
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

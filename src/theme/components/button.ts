import { tv } from "tailwind-variants";

export const classes = tv({
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

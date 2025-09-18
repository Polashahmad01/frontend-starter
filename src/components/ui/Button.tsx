import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  isPending?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
  disabled,
  isPending,
  type,
  ...restProps
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
      className={`w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000] ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isPending ? "Signing In..." : children}
    </button>
  );
}

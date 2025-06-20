import { FiArrowRight } from "react-icons/fi";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const PrimaryButton = ({ children, disabled, ...rest }: PrimaryButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-12
        py-2.5
        text-white
        text-base
        font-semibold
        transition
        transform
        disabled:bg-gray-300
        disabled:text-gray-500
        disabled:shadow-none
        disabled:transform-none
        ${
          disabled
            ? ""
            : "bg-purple-500 shadow-[0_4px_12px_rgba(139,92,246,0.3)] hover:bg-purple-600 hover:shadow-[0_6px_16px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_2px_8px_rgba(139,92,246,0.2)]"
        }
        whitespace-nowrap
      `}
    >
      {children}
      <FiArrowRight className="ml-3 w-5 h-5" />
    </button>
  );
};

export default PrimaryButton;

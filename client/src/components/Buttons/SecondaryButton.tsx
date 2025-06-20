import { FiRefreshCw } from "react-icons/fi";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const SecondaryButton = ({
  children,
  disabled,
  ...rest
}: SecondaryButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        border
        px-6
        py-2
        text-white-600
        text-base
        font-medium
        transition
        transform
        border-gray-300
        hover:bg-gray-100
        hover:border-gray-400
        hover:text-gray-800
        active:scale-95
        disabled:border-gray-200
        disabled:text-gray-400
        disabled:bg-transparent
        disabled:cursor-not-allowed
        whitespace-nowrap
      `}
    >
      <FiRefreshCw className="mr-2 w-5 h-5" />
      {children}
    </button>
  );
};

export default SecondaryButton;

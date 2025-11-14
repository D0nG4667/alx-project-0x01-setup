import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${className}`}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
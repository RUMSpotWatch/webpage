import * as React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.ComponentProps<"div"> {
  placeholder?: string;
  inputClassName?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  inputClassName,
  type,
  value,
  className,
  onChange,
  ...props
}) => {
  return (
    <div
      data-slot="form-field"
      {...props}
    >
      <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn("p-2 border-3 border-solid border-black text-black rounded-md", inputClassName)}
      />
    </div>
  );
};

export default FormField;
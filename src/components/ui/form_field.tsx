import * as React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.ComponentProps<"div"> {
  placeholder?: string;
  inputClassName?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value?: string;
  name?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  inputClassName,
  type,
  value,
  className,
  name,
  required,
  onChange,
  ...props
}) => {
  return (
    <div
      data-slot="form-field"
      {...props} 
    >
     <div className="flex flex-col">
       <label htmlFor={name} className="mb-2 mt-2">
         {placeholder}
       </label>
       <input
         type={type}
         value={value}
         name={name}
         onChange={onChange}
         className={cn("p-2 border-3 border-solid border-black text-black rounded-md bg-[#FFFBE9]", inputClassName)}
         required={required}
       />
     </div>
    </div>
  );
};

export default FormField;
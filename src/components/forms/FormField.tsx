
import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const FormField = ({ 
  id, 
  label, 
  name,
  type = "text", 
  placeholder = "", 
  required = false,
  children 
}: FormFieldProps) => {
  // Default name to id if not provided
  const fieldName = name || id;
  
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <label htmlFor={id} className="text-right text-sm font-medium">
        {label}
      </label>
      {children ? (
        <div className="col-span-3">
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                name: fieldName,
                ...child.props
              });
            }
            return child;
          })}
        </div>
      ) : (
        <input
          id={id}
          name={fieldName}
          type={type}
          className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;

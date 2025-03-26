
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { saveFormSubmission } from "@/utils/formDataStorage";

interface FormDialogProps {
  triggerText: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  buttonClassName?: string;
  onSubmit?: (e: React.FormEvent, formData: Record<string, any>) => void;
  submitText?: string;
  successTitle?: string;
  successDescription?: string;
  formType: 'contact' | 'demo' | 'notify' | 'schedule' | 'consultation';
}

const FormDialog = ({
  triggerText,
  title,
  description,
  children,
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = "",
  onSubmit,
  submitText = "Submit",
  successTitle = "Submission successful",
  successDescription = "We've received your request and will get back to you soon.",
  formType,
}: FormDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Collect form data
    const formData: Record<string, any> = {};
    const form = e.target as HTMLFormElement;
    const formElements = Array.from(form.elements) as HTMLFormElement[];
    
    formElements.forEach(element => {
      if (element.name && element.name !== '') {
        formData[element.name] = element.value;
      }
    });

    // Save form data
    saveFormSubmission(formType, formData);
    
    if (onSubmit) {
      onSubmit(e, formData);
    }
    
    setOpen(false);
    toast({
      title: successTitle,
      description: successDescription,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize} 
          className={`btn-hover group ${buttonClassName}`}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {children}
          <DialogFooter className="mt-6">
            <Button type="submit">{submitText}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;

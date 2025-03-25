
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

interface FormDialogProps {
  triggerText: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  buttonClassName?: string;
  onSubmit?: (e: React.FormEvent) => void;
  submitText?: string;
  successTitle?: string;
  successDescription?: string;
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
}: FormDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
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

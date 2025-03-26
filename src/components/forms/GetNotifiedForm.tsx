
import React from "react";
import FormDialog from "./FormDialog";
import FormField from "./FormField";
import { ArrowRight } from "lucide-react";

interface GetNotifiedFormProps {
  triggerText?: string;
  product?: "LOS" | "CRM";
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

const GetNotifiedForm = ({ 
  triggerText = "Get Notified When Available",
  product = "LOS",
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = ""
}: GetNotifiedFormProps) => {
  return (
    <FormDialog
      triggerText={
        <>
          {triggerText}
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      }
      title={`Stay Updated on Xelend's ${product}`}
      description={`Be the first to know when our ${product === "LOS" ? "Loan Origination System" : "CRM solution"} goes live!`}
      buttonVariant={buttonVariant}
      buttonSize={buttonSize}
      buttonClassName={buttonClassName}
      submitText="Notify Me"
      successTitle="You're on our list!"
      successDescription="We'll notify you as soon as we launch."
      formType="notify"
    >
      <FormField id="notify-name" name="name" label="Name" placeholder="Your full name" required />
      <FormField id="notify-email" name="email" label="Email" type="email" placeholder="Your email address" required />
      <FormField id="notify-company" name="company" label="Company" placeholder="Your company name" />
      <input type="hidden" name="product" value={product} />
    </FormDialog>
  );
};

export default GetNotifiedForm;

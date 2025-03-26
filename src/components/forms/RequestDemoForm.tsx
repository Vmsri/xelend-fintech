
import React from "react";
import FormDialog from "./FormDialog";
import FormField from "./FormField";
import { ArrowRight } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RequestDemoFormProps {
  triggerText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

const RequestDemoForm = ({ 
  triggerText = "Request a Demo",
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = ""
}: RequestDemoFormProps) => {
  return (
    <FormDialog
      triggerText={
        <>
          {triggerText}
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      }
      title="Experience Xelend in Action"
      description="See how Xelend can transform your debt recovery process with real-time tracking, smart automation, and AI-powered insights."
      buttonVariant={buttonVariant}
      buttonSize={buttonSize}
      buttonClassName={buttonClassName}
      successTitle="Request submitted"
      successDescription="Thank you for requesting a demo! Our team will reach out shortly to schedule a session."
      formType="demo"
    >
      <FormField id="demo-name" name="name" label="Name" placeholder="Your full name" required />
      <FormField id="demo-email" name="email" label="Email" type="email" placeholder="Your business email" required />
      <FormField id="demo-phone" name="phone" label="Phone" type="tel" placeholder="Your phone number" required />
      <FormField id="demo-company" name="company" label="Company" placeholder="Your company name" required />
      
      <FormField id="demo-industry" name="industry" label="Industry" required>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="microfinance">Microfinance</SelectItem>
            <SelectItem value="nbfc">NBFC</SelectItem>
            <SelectItem value="bank">Bank</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      
      <FormField id="demo-message" name="message" label="Message">
        <textarea
          id="demo-message"
          className="col-span-3 flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Anything specific you'd like us to demonstrate?"
        />
      </FormField>
    </FormDialog>
  );
};

export default RequestDemoForm;


import React from "react";
import FormDialog from "./FormDialog";
import FormField from "./FormField";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConsultationFormProps {
  triggerText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

const ConsultationForm = ({ 
  triggerText = "Schedule a Consultation",
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = ""
}: ConsultationFormProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <FormDialog
      triggerText={
        <>
          {triggerText}
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      }
      title="Let's Discuss Your Requirements"
      description="Need a custom financial solution? Our experts will guide you through the best-fit implementation for your institution."
      buttonVariant={buttonVariant}
      buttonSize={buttonSize}
      buttonClassName={buttonClassName}
      submitText="Book Consultation"
      successTitle="Consultation booked"
      successDescription="Your consultation is booked! Our team will reach out with the meeting details."
    >
      <FormField id="consult-name" label="Name" placeholder="Your full name" required />
      <FormField id="consult-email" label="Email" type="email" placeholder="Your email address" required />
      <FormField id="consult-company" label="Company" placeholder="Your company name" required />
      <FormField id="consult-phone" label="Phone" type="tel" placeholder="Your phone number" required />
      
      <FormField id="consult-purpose" label="Purpose" required>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="loan-origination">Loan Origination</SelectItem>
            <SelectItem value="debt-recovery">Debt Recovery</SelectItem>
            <SelectItem value="crm">CRM</SelectItem>
            <SelectItem value="custom-integration">Custom Integration</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="consult-date" className="text-right text-sm font-medium">
          Preferred Date
        </label>
        <div className="col-span-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="consult-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="pointer-events-auto p-3"
                disabled={(date) => {
                  // Disable past dates and weekends
                  return date < new Date() || date.getDay() === 0 || date.getDay() === 6;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <FormField id="consult-time" label="Preferred Time">
        <select
          id="consult-time"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
        >
          <option value="">Select time</option>
          <option value="9:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="17:00">5:00 PM</option>
        </select>
      </FormField>
      
      <FormField id="consult-message" label="Message">
        <textarea
          id="consult-message"
          className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your requirements"
        />
      </FormField>
    </FormDialog>
  );
};

export default ConsultationForm;

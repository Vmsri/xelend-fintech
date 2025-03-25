
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

interface ScheduleDemoFormProps {
  triggerText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

const ScheduleDemoForm = ({ 
  triggerText = "Schedule a Demo",
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = ""
}: ScheduleDemoFormProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <FormDialog
      triggerText={
        <>
          {triggerText}
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      }
      title="Book a Personalized Demo"
      description="Get a hands-on walkthrough of Xelend's capabilities tailored to your financial institution's needs."
      buttonVariant={buttonVariant}
      buttonSize={buttonSize}
      buttonClassName={buttonClassName}
      successTitle="Demo scheduled"
      successDescription="Your demo is scheduled! You'll receive a confirmation email with the meeting details."
    >
      <FormField id="schedule-name" label="Name" placeholder="Your full name" required />
      <FormField id="schedule-email" label="Email" type="email" placeholder="Your email address" required />
      <FormField id="schedule-company" label="Company" placeholder="Your company name" required />
      
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="schedule-date" className="text-right text-sm font-medium">
          Preferred Date
        </label>
        <div className="col-span-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="schedule-date"
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
      
      <FormField id="schedule-time" label="Preferred Time">
        <select
          id="schedule-time"
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
      
      <FormField id="schedule-message" label="Message">
        <textarea
          id="schedule-message"
          className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Any specific areas you'd like to explore during the demo?"
        />
      </FormField>
    </FormDialog>
  );
};

export default ScheduleDemoForm;

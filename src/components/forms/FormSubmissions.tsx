
import React, { useState, useEffect } from "react";
import { getFormSubmissions, FormSubmission, clearFormSubmissions } from "@/utils/formDataStorage";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FormSubmissionsDialog = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const loadSubmissions = () => {
      const data = getFormSubmissions();
      setSubmissions(data);
    };
    
    loadSubmissions();
    
    // Set up an interval to refresh the data
    const intervalId = setInterval(loadSubmissions, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all form submissions?")) {
      clearFormSubmissions();
      setSubmissions([]);
    }
  };
  
  const handleViewDetails = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setDetailsOpen(true);
  };
  
  const getFormTypeName = (type: string) => {
    const types: Record<string, string> = {
      'contact': 'Contact Form',
      'demo': 'Demo Request',
      'notify': 'Notification Request',
      'schedule': 'Scheduled Demo',
      'consultation': 'Consultation Request'
    };
    return types[type] || type;
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="fixed right-4 bottom-4 z-50">
            View Form Submissions
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Form Submissions</DialogTitle>
            <DialogDescription>
              View all the form submissions made on the website.
            </DialogDescription>
          </DialogHeader>
          
          {submissions.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground">
              No form submissions yet. Try submitting a form to see data here.
            </div>
          ) : (
            <>
              <Table>
                <TableCaption>A list of all form submissions.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Form Type</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{getFormTypeName(submission.type)}</TableCell>
                      <TableCell>{submission.data.name || '-'}</TableCell>
                      <TableCell>{submission.data.email || '-'}</TableCell>
                      <TableCell>{format(new Date(submission.createdAt), 'PPP p')}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleViewDetails(submission)}>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex justify-end mt-4">
                <Button variant="destructive" onClick={handleClearAll}>
                  Clear All Submissions
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
            <DialogDescription>
              All data submitted in this form.
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Form Type:</div>
                <div className="col-span-2">{getFormTypeName(selectedSubmission.type)}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="font-medium">Submitted:</div>
                <div className="col-span-2">{format(new Date(selectedSubmission.createdAt), 'PPP p')}</div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Form Data:</h4>
                <div className="space-y-2">
                  {Object.entries(selectedSubmission.data).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 gap-2">
                      <div className="font-medium capitalize">{key}:</div>
                      <div className="col-span-2">
                        {value || '-'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSubmissionsDialog;


import React, { useState, useEffect } from "react";
import { 
  getFormSubmissions, 
  FormSubmission, 
  clearFormSubmissions,
  isAdmin,
  adminLogin,
  adminLogout
} from "@/utils/formDataStorage";
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
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const FormSubmissionsDialog = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showLoginSheet, setShowLoginSheet] = useState(false);

  useEffect(() => {
    // Check if admin is already authenticated
    setAdminAuthenticated(isAdmin());
    
    const loadSubmissions = () => {
      if (isAdmin()) {
        const data = getFormSubmissions();
        setSubmissions(data);
      }
    };
    
    loadSubmissions();
    
    // Set up an interval to refresh the data
    const intervalId = setInterval(loadSubmissions, 2000);
    
    return () => clearInterval(intervalId);
  }, [adminAuthenticated]);
  
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all form submissions?")) {
      clearFormSubmissions();
      setSubmissions([]);
      toast({
        title: "Success",
        description: "All form submissions have been cleared.",
      });
    }
  };
  
  const handleViewDetails = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setDetailsOpen(true);
  };
  
  const handleLogin = () => {
    if (adminLogin(password)) {
      setAdminAuthenticated(true);
      setLoginError(false);
      setShowLoginSheet(false);
      toast({
        title: "Admin Access Granted",
        description: "You now have access to view all form submissions.",
      });
    } else {
      setLoginError(true);
    }
    setPassword("");
  };
  
  const handleLogout = () => {
    adminLogout();
    setAdminAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out of admin access.",
    });
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

  // If not admin, only show the login button
  if (!adminAuthenticated) {
    return (
      <Sheet open={showLoginSheet} onOpenChange={setShowLoginSheet}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed right-4 bottom-4 z-50" title="Admin Access">
            <Lock className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Admin Login</SheetTitle>
            <SheetDescription>
              Enter the admin password to view form submissions.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className={loginError ? "border-red-500" : ""}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
              />
              {loginError && (
                <p className="text-sm text-red-500">Incorrect password. Please try again.</p>
              )}
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

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
          
          <div className="flex justify-end mb-4">
            <Button variant="outline" onClick={handleLogout} size="sm">
              Logout
            </Button>
          </div>
          
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

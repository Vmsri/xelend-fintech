
export interface FormSubmission {
  id: string;
  type: 'contact' | 'demo' | 'notify' | 'schedule' | 'consultation';
  data: Record<string, any>;
  createdAt: string;
}

// Get all form submissions
export const getFormSubmissions = (): FormSubmission[] => {
  const data = localStorage.getItem('xelend-form-submissions');
  if (!data) return [];
  return JSON.parse(data);
};

// Save a new form submission
export const saveFormSubmission = (
  type: FormSubmission['type'], 
  data: Record<string, any>
): void => {
  const submissions = getFormSubmissions();
  
  const newSubmission: FormSubmission = {
    id: Date.now().toString(),
    type,
    data,
    createdAt: new Date().toISOString(),
  };
  
  submissions.push(newSubmission);
  localStorage.setItem('xelend-form-submissions', JSON.stringify(submissions));
};

// Clear all form submissions (for testing)
export const clearFormSubmissions = (): void => {
  localStorage.removeItem('xelend-form-submissions');
};

export interface Job {
  id: string;
  status?: string;
  title: string;
  location: string;
  applications: string;
  profile: string[];
  valueProps: string[];
  details: {
    modality: string;
    location: string;
    salary: string;
  };
}
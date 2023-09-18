export interface JobsInterface {
  data: any;
  _id: any;
  title: string;
  description: string;
  location: string;
  employmentType: string;
  requirements: string[];
  reponsibility: string[];
  salary?: number;
  role?: string;
  openings: number;
  employer: any;
  createdAt: Date;
  appliedUsers?: Array<string>;
}

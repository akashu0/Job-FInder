export interface jobPostData {
  title: string;
  role: string;
  department: string;
  salary: {
    minSalary: number;
    maxSalary: number;
  };
  reponsibility: string;
  requirements: string;
  experience: string;
  location: string;
  recruiterId: string;
}

export class jobPostProfile {
  title: string;
  role: string;
  department: string;
  salary: {
    minSalary: number;
    maxSalary: number;
  };
  reponsibility: string;
  requirements: string;
  experience: string;
  location: string;
  recruiterId: string;

  constructor({
    title,
    role,
    department,
    salary,
    reponsibility,
    requirements,
    experience,
    location,
    recruiterId,
  }: jobPostData) {
    this.title = title;
    this.role = role;
    this.department = department;
    this.salary = salary;
    this.reponsibility = reponsibility;
    this.requirements = requirements;
    this.experience = experience;
    this.location = location;
    this.recruiterId = recruiterId;
  }
}

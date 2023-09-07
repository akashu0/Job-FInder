export interface profileData {
  userId: string;
  image: string;
  bio: string;
  gender: string;
  desiredRole: string;
  experirnce: string;
  previousrole: string;
  age: number;
  salary: string;
  workmode: string;
  education: string;
  skill: string[];
  link: string;
  project: string;
}

export class Profile {
  userId: string;
  image: string;
  bio: string;
  gender: string;
  desiredRole: string;
  experirnce: string;
  previousrole: string;
  age: number;
  salary: string;
  workmode: string;
  education: string;
  skill: string[];
  link: string;
  project: string;

  constructor({
    userId,
    image,
    bio,
    gender,
    desiredRole,
    experirnce,
    previousrole,
    age,
    salary,
    workmode,
    education,
    skill,
    link,
    project,
  }: profileData) {
    this.userId = userId;
    this.image = image;
    this.bio = bio;
    this.gender = gender;
    this.desiredRole = desiredRole;
    this.experirnce = experirnce;
    this.previousrole = previousrole;
    this.age = age;
    this.salary = salary;
    this.workmode = workmode;
    this.education = education;
    this.skill = skill;
    this.link = link;
    this.project = project;
  }
}

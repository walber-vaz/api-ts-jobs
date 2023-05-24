export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  role: string;
  languages: Language[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface Language {
  name: string;
}

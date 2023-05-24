import { z } from 'zod';

export const jobCreateSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(80, {
      message: 'Title is required and must be at least 3 characters',
    }),
    description: z.string().min(3).max(255, {
      message: 'Description is required and must be at least 3 characters',
    }),
    company: z.string().min(3).max(80, {
      message: 'Company is required and must be at least 3 characters',
    }),
    location: z.string().min(3).max(50, {
      message: 'Location is required and must be at least 3 characters',
    }),
    salary: z.number().min(1200, {
      message: 'Salary is required and must be at least 1200',
    }),
    role: z.string().min(3).max(30, {
      message: 'Role is required and must be at least 3 characters',
    }),
    languages: z.array(
      z.string().min(3).max(30, {
        message: 'Languages is required and must be at least 3 characters',
      }),
    ),
  }),
});

export const jobUpdateSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    title: z.string().min(3).max(80, {
      message: 'Title is required and must be at least 3 characters',
    }),
    description: z.string().min(3).max(255, {
      message: 'Description is required and must be at least 3 characters',
    }),
    company: z.string().min(3).max(80, {
      message: 'Company is required and must be at least 3 characters',
    }),
    location: z.string().min(3).max(50, {
      message: 'Location is required and must be at least 3 characters',
    }),
    salary: z.number().min(1200, {
      message: 'Salary is required and must be at least 1200',
    }),
    role: z.string().min(3).max(30, {
      message: 'Role is required and must be at least 3 characters',
    }),
    languages: z.array(
      z.string().min(3).max(30, {
        message: 'Languages is required and must be at least 3 characters',
      }),
    ),
  }),
});

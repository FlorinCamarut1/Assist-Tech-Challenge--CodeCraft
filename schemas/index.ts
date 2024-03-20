import * as z from 'zod';

const requiredMsg = 'This field is required!';

export const RegisterAdminSchema = z.object({
  name: z.string().min(1, { message: requiredMsg }),
  email: z.string().email({ message: 'Please enter a valid Email adress!' }),
  password: z.string().min(8, {
    message: 'Password length should be at least 8 characters long!',
  }),
  organizationName: z.string().min(1, { message: requiredMsg }),
  organizationAddress: z.string().min(1, { message: requiredMsg }),
});

export const RegisterEmployeeSchema = z.object({
  name: z.string().min(1, { message: requiredMsg }),
  email: z.string().email({ message: 'Please enter a valid Email adress!' }),
  password: z.string().min(8, {
    message: 'Password length should be at least 8 characters long!',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid Email adress!' }),
  password: z.string().min(8, {
    message: 'Password length should be at least 8 characters long!',
  }),
});

export const CreateDepartmentSchema = z.object({
  name: z.string().min(1),
});
export const EditDepartmentSchema = z.object({
  name: z.string().min(1).optional(),
});
export const CreateSkillCategorySchema = z.object({
  name: z.string().min(1),
});

export const CreateNewSkillSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export const CreateProjectSchema = z.object({
  name: z.string(),
  period: z.string(),
  startDate: z.any().optional(),
  deadlineDate: z.any().optional(),
  status: z.string(),
  description: z.string(),
});

export const UpdateAccountSkillSchema = z.object({
  skillID: z.string(),
  level: z.string(),
  experience: z.string(),
  trainingTitle: z.string(),
  trainingDescription: z.string(),

  status: z.string(),
});

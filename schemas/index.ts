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

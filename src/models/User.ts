import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export interface IUser {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createUser = async (email: string, password: string): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  });
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return prisma.user.findUnique({
    where: { email }
  });
};

export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
}; 
import bcrypt from 'bcrypt';

const COST_FACTOR = 12;

export const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, COST_FACTOR);

export const comparePassword = (password: string, hash: string): Promise<boolean> =>
  bcrypt.compare(password, hash);


import { AuthUser } from 'src/interfaces/auth-user.interface';

// The consuming app must implement this abstract class with their own database logic

export abstract class AuthRepository {
  // Find methods
  abstract findById(id: string): Promise<AuthUser | null>;
  abstract findByEmail(email: string): Promise<AuthUser | null>;
  abstract findByUsername(username: string): Promise<AuthUser | null>;
  
  // CRUD operations
  abstract create(data: Partial<AuthUser>): Promise<AuthUser>;
  abstract update(id: string, data: Partial<AuthUser>): Promise<AuthUser>;
  abstract delete(id: string): Promise<void>;
  
  // Token operations
  abstract findByVerificationToken(token: string): Promise<AuthUser | null>;
  abstract findByResetToken(token: string): Promise<AuthUser | null>;
  abstract findByRefreshToken(token: string): Promise<AuthUser | null>;
}
// auth-options.interface.ts

export type AuthStrategy = 'email' | 'username' | 'both';

export interface AuthModuleOptions {
    authStrategy: AuthStrategy;
    jwtSecret: string;
    jwtExpiresIn?: string;
    refreshTokenExpiresIn?: string;
}
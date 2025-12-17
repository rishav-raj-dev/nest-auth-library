// The entity contract
export interface AuthUser{
    id: string;
    user_name?: string;
    email?: string;
    password_hash: string;
    roles?: string[];
    is_active?: boolean;
    created_at?: Date | null;
    updated_at?: Date;
    last_login?: Date;
    is_email_verified?: boolean;
    refresh_token?: string | null;
    refresh_token_expires?: Date | null;
    failed_login_attempts?: number;
    account_locked_until?: Date | null;
}
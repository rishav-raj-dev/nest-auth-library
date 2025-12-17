// auth.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { AuthModuleOptions } from 'src/interfaces/auth-options.interface';

// To accept the configuration
@Module({})
export class AuthModule {
  static forRoot(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        {
          provide: 'AUTH_OPTIONS',
          useValue: options,
        },
        // We'll add AuthService, etc. later
      ],
      exports: [
        'AUTH_OPTIONS',
        // We'll export services later
      ],
    };
  }
}
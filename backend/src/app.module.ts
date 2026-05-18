import { Module } from '@nestjs/common';
import { PrismaModule } from './modules-system/prisma/prisma.module';
import { TokenModule } from './modules-system/token/token.module';
import { AuthModule } from './modules-api/auth/auth.module';

@Module({
  imports: [PrismaModule, TokenModule, AuthModule],
})
export class AppModule {}

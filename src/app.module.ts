import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { TextSavingModule } from './text-saving/text-saving.module';
import { TextAnalyzerModule } from './text-analyzer/text-analyzer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UsersModule,
    TextSavingModule,
    TextAnalyzerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

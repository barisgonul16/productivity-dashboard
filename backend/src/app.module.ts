import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // Render'da DATABASE_URL varsa onu kullan, yoksa locale bak
      url: process.env.DATABASE_URL,
      host: process.env.DATABASE_URL ? undefined : process.env.DATABASE_HOST || 'localhost',
      // DÜZELTİLEN SATIR BURASI: (|| '5432' ekledik)
      port: process.env.DATABASE_URL ? undefined : parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_URL ? undefined : process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_URL ? undefined : process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_URL ? undefined : process.env.DATABASE_NAME || 'productivity_db',
      
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // MVP olduğu için true bırakıyoruz
      
      // Render için SSL ayarı
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
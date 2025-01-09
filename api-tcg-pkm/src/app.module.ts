import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetModule } from './set/set.module';
import { Set } from './set/entities/set.entity';
import { Card } from './card/entities/card.entity';
import { Image } from './card/entities/image.entity';
import { CardModule } from './card/card.module';
import { HealthModule } from './health/health.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres123',
      username: 'irojas',
      entities: [Set, Card, Image],
      database: 'pkm-tcg',
      synchronize: false,
      logging: true,
    }),
    // se puede reemplazar por el código de TypeOrmModule.forRoot() para usar el .env
    // por alguna razón en mi maquina esta tomando valores que no corresponden al .env, por si quieren probar usando el .env
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DATABASE_HOST'),
    //     port: configService.get<number>('DATABASE_PORT'),
    //     username: configService.get<string>('DATABASE_USER'),
    //     password: configService.get<string>('DATABASE_PASSWORD'),
    //     database: configService.get<string>('DATABASE_NAME'),
    //     entities: [Set, Card, Image],
    //     synchronize: false,
    //     logging: true,
    //   }),
    // }),
    SetModule,
    CardModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

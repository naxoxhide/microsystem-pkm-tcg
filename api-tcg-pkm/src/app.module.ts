import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetModule } from './set/set.module';
import { Set } from './set/entities/set.entity';
import { Card } from './card/entities/card.entity';
import { Image } from './card/entities/image.entity';
import { CardModule } from './card/card.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
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
    SetModule,
    CardModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

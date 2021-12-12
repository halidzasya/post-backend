import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ExistValidator } from './etc/validator/exist-validator';
import { UniqueValidator } from './etc/validator/unique-validator';
import { AuthModule } from './auth/auth.module';
import { ProduksModule } from './produks/produks.module';
import { Produk } from './produks/entities/produk.entity';
import { KonsumenModule } from './konsumen/konsumen.module';
import { RekeningModule } from './rekening/rekening.module';
import { Konsuman } from './konsumen/entities/konsuman.entity';
import { Rekening } from './rekening/entities/rekening.entity';
import { PenjualanModule } from './penjualan/penjualan.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : process.env.MYSQL_HOST,
      port : parseInt(process.env.MYSQL_PORT),
      username : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASS,
      database : process.env.MYSQL_DB,
      entities : [
        User,
        Produk,
        Konsuman,
        Rekening
      ],
      synchronize : true
    }),
    UserModule,
    AuthModule,
    ProduksModule,
    KonsumenModule,
    RekeningModule,
    PenjualanModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, ExistValidator, UniqueValidator],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProduksService } from './produks.service';
import { ProduksController } from './produks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from './entities/produk.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Produk])
  ],
  controllers: [ProduksController],
  providers: [ProduksService]
})
export class ProduksModule {}

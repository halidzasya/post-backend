import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProduksService {

  constructor(
    @InjectRepository(Produk) private produkRepo : Repository<Produk>
    ) {}
     
  create(createProdukDto: CreateProdukDto) {
    return 'This action adds a new produk';
  }

  findAll() {
    return this.produkRepo.find();
  }

  findOne(id: number) {
    return this.produkRepo.findOne(id);
  }

  update(id: number, updateProdukDto: UpdateProdukDto) {
    updateProdukDto.id = id
    return this.produkRepo.save(updateProdukDto);
  }

  async remove(id: number) {
    let produk = await this.produkRepo.findOne(id)
    return this.produkRepo.remove(produk);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProduksService } from './produks.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';

@ApiTags('Produk')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('produks')
export class ProduksController {
  constructor(private readonly produksService: ProduksService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    storage : diskStorage({
      destination : './asset/produk'
    })
  }))
  create(@Body() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    return this.produksService.create(createProdukDto);
  }

  @Get()
  findAll() {
    return this.produksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdukDto: UpdateProdukDto) {
    return this.produksService.update(+id, updateProdukDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produksService.remove(+id);
  }
}



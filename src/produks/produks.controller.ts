import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProduksService } from './produks.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import { type } from 'os';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { extname } from 'path';

@ApiTags('Produk')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('produks')
export class ProduksController {
  constructor(private readonly produksService: ProduksService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    storage : diskStorage({
      destination : './asset/produk',
      filename: (req:any,file,cb)=>{
        const namaFile = [req.user.id,Date.now()].join('-')
        cb(null,namaFile+extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({type:CreateProdukDto})
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    createProdukDto.foto = foto.filename  
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
  @UseInterceptors(FileInterceptor('foto', {
    storage : diskStorage({
      destination : './asset/produk',
      filename: (req:any,file,cb)=>{
        const namaFile = [req.user.id,Date.now()].join('-')
        cb(null,namaFile+extname(file.originalname))
      }
    }) 
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({type:UpdateProdukDto})
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    if(foto){
      updateProdukDto.foto = foto.filename
    } 
    return this.produksService.update(+id, updateProdukDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produksService.remove(+id);
  }
}



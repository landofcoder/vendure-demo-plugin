
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ProductSeller } from './entities/product-seller.entity';

@Injectable()
export class SellerService {

    constructor(@InjectRepository(ProductSeller) private sellerRepository: Repository<ProductSeller>) { }

    async getSellers(): Promise<ProductSeller[]> {
        return await this.sellerRepository.find();
    }

    async getSeller(id: number): Promise<ProductSeller> {
        return await this.sellerRepository.findOne(id);
    }

    async createSeller (seller: ProductSeller): Promise<ProductSeller> {
        return await this.sellerRepository.save(seller)
    }

    async updateSeller(seller: ProductSeller): Promise<UpdateResult> {
        return await this.sellerRepository.update(seller.id, seller);
    }

    async deleteSeller(id: number): Promise<DeleteResult> {
        return await this.sellerRepository.delete(id);
    }
}
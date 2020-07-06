import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductSeller extends VendureEntity {
    constructor(input?: DeepPartial<ProductSeller>) {
        super(input);
    }

    @Column()
    text: string;

    @Column()
    rating: number;
}
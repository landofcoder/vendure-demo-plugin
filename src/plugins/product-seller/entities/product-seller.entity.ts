import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity, Facet } from '@vendure/core';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSeller extends VendureEntity {
    constructor(input?: DeepPartial<ProductSeller>) {
        super(input);
    }
    // @PrimaryGeneratedColumn()
    // id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Facet)
    facet: Facet;
}
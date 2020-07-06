import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Ctx, Allow, ProductService, RequestContext } from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';
import { FetchProduct } from './product.service'

@Resolver('Product')
export class ProductResolver {

  constructor(private productService: ProductService, private fetchProduct: FetchProduct) {}
  @Mutation()
  @Allow(Permission.UpdateCatalog)
  async addRandomImage(@Ctx() ctx: RequestContext, @Args() args:any) {
    const catImageUrl = await this.fetchProduct.fetchImage();
    return this.productService.update(ctx, {
      id: args.id,
      customFields: { catImageUrl },
    });
  }
  
}

import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { FetchProduct } from './product.service';
import { ProductResolver } from './product.resolver';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

const schemaExtension = gql`
    extend type Mutation {
      addRandomImage(id: ID!): Product!
    }
`;

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [FetchProduct],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [ProductResolver],
  },
  configuration: config => {
    config.customFields.Product.push({
      type: 'string',
      name: 'catImageUrl',
    });
    return config;
  }
})
export class ProductPlugin {}
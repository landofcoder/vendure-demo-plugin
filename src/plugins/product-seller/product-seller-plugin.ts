import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import path from 'path';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import { ProductSeller } from './entities/product-seller.entity';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [ProductSeller],
    configuration: config => {
        // config.customFields.Product.push({
        //     name: 'reviewRating',
        //     public: true,
        //     nullable: true,
        //     type: 'float',
        // });
        // config.customFields.Product.push({
        //     name: 'reviewCount',
        //     public: true,
        //     defaultValue: 0,
        //     type: 'float',
        // });
        return config;
    },
})

export class ProductSellerPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        ngModules: [
            {
                type: 'shared',
                ngModuleFileName: 'seller-ui-share.module.ts',
                ngModuleName: 'SellerUiShareModule'
            },
            {
                type: 'lazy',
                route: 'product-seller',
                ngModuleFileName: 'seller-ui-extension.module.ts',
                ngModuleName: 'SellerUiExtensionModule',
            },
        ],
    };
}
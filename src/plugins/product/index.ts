import { VendurePlugin } from '@vendure/core';

@VendurePlugin({
    configuration: config => {
        config.customFields.Product.push({
            type: 'string',
            name: 'catImageUrl',
        });
        return config;
    }
})
export class RandomCatPlugin {}
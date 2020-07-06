import { NgModule } from '@angular/core';
import {addNavMenuSection, SharedModule} from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuSection({
          id: 'seller',
          label: 'Seller',
          items: [{
            id: 'product-seller',
            label: 'Product',
            routerLink: ['/extensions/product-seller'],
            // Icon can be any of https://clarity.design/icons
            icon: 'star',
          }],
        },
        // Add this section before the "settings" section
        'marketing'),
  ]
})

export class SellerUiShareModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import {SellerComponent} from "./components/seller.component"

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: SellerComponent,
            data: { breadcrumb: 'Product Seller' },
        }]),
    ],
    declarations: [SellerComponent],
})

export class SellerUiExtensionModule {}
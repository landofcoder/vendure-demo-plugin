import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomFieldConfigType, CustomFieldControl } from '@vendure/admin-ui/core';

@Component({
    selector: 'kb-product-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})

export class SellerComponent implements OnInit {
    form: FormGroup;
    categories: string[] = ['Options 1', 'Options 2', 'Options 3'];
    constructor(
        private formBuilder: FormBuilder,
    ){}

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, Validators.required],
            category: [null, Validators.required],
            description: [null, Validators.required],
        });
    }

    create(){
        console.log('click create data')
    }

}
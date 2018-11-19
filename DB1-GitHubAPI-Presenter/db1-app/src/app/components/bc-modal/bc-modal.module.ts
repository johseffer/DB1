import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BcModalComponent } from './bc-modal/bc-modal.component';

@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    declarations: [
        BcModalComponent
    ],
    exports: [
        BcModalComponent,
        ModalModule
    ],
    providers: [BsModalService]
})
export class BcModalModule { }

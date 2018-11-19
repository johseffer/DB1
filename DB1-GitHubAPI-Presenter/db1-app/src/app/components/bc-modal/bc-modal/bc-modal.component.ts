import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'bc-modal',
    templateUrl: './bc-modal.component.html',
    styleUrls: ['./bc-modal.component.scss'],
})
export class BcModalComponent implements OnInit {
    @ViewChild('childModal') childModal: ModalDirective;

    @Input() title: string;
    @Input() size = 'md';
    @Input() closeable = true;

    /** TODO: FIX-ME (remover on) */
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onDismiss: EventEmitter<any>;

    constructor() {
        this.onDismiss = new EventEmitter<any>();
    }

    ngOnInit() { 
        this.childModal.config = {
            backdrop: (this.closeable ? true : 'static'),
            keyboard: (this.closeable ? true : false)
        };
    }

    show() {
        this.childModal.show();
    }

    close() {
        this.childModal.hide();
    }

    dismiss($event) {
        this.onDismiss.emit($event);
    }
}

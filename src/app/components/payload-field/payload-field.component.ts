import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { PayloadFieldBase } from '../../models/payload-field-base';

@Component({
  selector: 'app-payload-field',
  templateUrl: './payload-field.component.html',
  styleUrls: ['./payload-field.component.css']
})
export class PayloadFieldComponent implements OnInit {

  @Input() payloadField: PayloadFieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.payloadField.key].valid; }

  constructor() { }

  ngOnInit() {
  }

}

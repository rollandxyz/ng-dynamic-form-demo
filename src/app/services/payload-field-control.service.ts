import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PayloadFieldBase } from '../models/payload-field-base';

@Injectable({
  providedIn: 'root'
})
export class PayloadFieldControlService {

  constructor() { }
  toFormGroup(payloadFields: PayloadFieldBase<any>[] ) {
    let group: any = {};

    payloadFields.forEach(payloadFields => {
      if (payloadFields.required) {
        group[payloadFields.key] = new FormControl(payloadFields.value || '', Validators.required);
      } else {
        group[payloadFields.key] = new FormControl(payloadFields.value || '');
      }
    });
    return new FormGroup(group);
  }
}

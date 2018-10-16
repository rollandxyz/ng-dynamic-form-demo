import { Injectable } from '@angular/core';
import { PayloadFieldBase, DropdownPayloadField, TextboxPayloadField } from '../models/payload-field-base';

@Injectable({
  providedIn: 'root'
})
export class WorkdefPayloadService {

  constructor() { }
  // TODO: get from a remote source of payload metadata
  // TODO: make asynchronous
  getPayloadFields() {
 
    let payloadFields: PayloadFieldBase<any>[] = [
 
      new DropdownPayloadField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
 
      new TextboxPayloadField({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        readonly:true,
        order: 1
      }),
 
      new TextboxPayloadField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 
    return payloadFields.sort((a, b) => a.order - b.order);
  }
}

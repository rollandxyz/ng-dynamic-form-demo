import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { PayloadFieldBase } from '../../models/payload-field-base';
import { PayloadFieldControlService } from '../../services/payload-field-control.service';

@Component({
  selector: 'app-payload-template',
  templateUrl: './payload-template.component.html',
  styleUrls: ['./payload-template.component.css']
})
export class PayloadTemplateComponent implements OnInit {

  @Input() payloadFields: PayloadFieldBase<any>[] = [];
  form: FormGroup;
  payLoadJsonStr = '';

  constructor(private qcs: PayloadFieldControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.payloadFields);
  }
  onSubmit() {
    this.payLoadJsonStr = JSON.stringify(this.form.value);
  }

}

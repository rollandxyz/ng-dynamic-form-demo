import { Component } from '@angular/core';
import { WorkdefPayloadService } from './services/workdef-payload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  workDefPayloadFields: any[];
  constructor(service: WorkdefPayloadService) {
    this.workDefPayloadFields = service.getPayloadFields();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.css']
})
export class FielderrorsComponent implements OnInit {

  @Input("form") form: FormGroup;
  @Input("field") fieldName: string;
  @Input("niceName") niceName: string;

  constructor() { }

  ngOnInit() {
  }


  fieldErrors() {
    let controlState = this.form.controls[this.fieldName];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }
}

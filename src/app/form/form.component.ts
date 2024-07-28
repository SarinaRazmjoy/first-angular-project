import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

export interface Data {
  id: string;
  nameInput: string;
  familyInput: string;
  codeInput: string;
  genderInput: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() data2: Data;
  @Output() sendFormData = new EventEmitter<Data>();

  nameinput: string = "";
  familyinput: string = "";
  codeinput: string = "";
  genderinput: string = "";
  mode: string = "insert";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data2'] && changes['data2'].currentValue) {
      this.nameinput = this.data2.nameInput;
      this.familyinput = this.data2.familyInput;
      this.codeinput = this.data2.codeInput;
      this.genderinput = this.data2.genderInput;
      this.mode = 'edit';
      
    }
  }

  save() {
    const data: Data = {
      id: this.mode === 'insert' ? this.generateId() : this.data2.id,
      nameInput: this.nameinput,
      familyInput: this.familyinput,
      codeInput: this.codeinput,
      genderInput: this.genderinput,
    }

    this.sendFormData.emit(data);
    this.resetForm();
  }

  resetForm() {
    this.nameinput = "";
    this.familyinput = "";
    this.codeinput = "";
    this.genderinput = "";
    this.mode = "insert";
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }
}

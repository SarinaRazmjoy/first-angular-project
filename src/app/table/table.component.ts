import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

interface Data {
  id: string;
  nameInput: string;
  familyInput: string;
  codeInput: string;
  genderInput: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input() data: Data;
  @Output() editRowEvent = new EventEmitter<Data>();
  formData: Data[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      const newData: Data = changes['data'].currentValue;
      if (newData) {
        var existData = this.formData.findIndex(a => a.id === newData.id);

        if (existData !== -1) {
          this.formData[existData] = newData;
        } else {
          this.formData.push(newData);
        }
      }
    }
  }

  deleteRow(i: number) {
    this.formData.splice(i, 1);
    this.updateTable();
  }

  updateTable() {
    this.formData = [...this.formData];
  }

  editRow(id: string) {
    const rowToEdit = this.formData.find(object => object.id === id);
    if (rowToEdit) {
      this.editRowEvent.emit(rowToEdit);
    }
  }
}


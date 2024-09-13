import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Column } from '../../core/models/column.model';
import { Action } from '../../core/models/action.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, AvatarModule, TagModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  columns = input<Column[]>([]);
  actions = input<Action[]>();
  data = input<any[]>([]);

  constructor() {
    effect(() => {
      console.log('columns', this.columns());
      console.log('data', this.data());
    })

  }
}
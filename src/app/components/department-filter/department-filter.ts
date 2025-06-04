import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-department-filter',
  standalone: true, // ✅ make it standalone
  imports: [CommonModule], // ✅ add CommonModule here

  templateUrl: './department-filter.html',
  styleUrls: ['./department-filter.css']
})
export class DepartmentFilter {
  @Input() departments: string[] = [];
  @Input() selected = '';
  @Output() departmentChanged = new EventEmitter<string>();

onDepartmentChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.departmentChanged.emit(value);
}

}

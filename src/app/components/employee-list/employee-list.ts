import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employee } from '../../services/employee';
import { Search } from '../search/search';  // Assuming you have this component
import { DepartmentFilter } from '../department-filter/department-filter';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, Search, DepartmentFilter],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList {
  employeeList: any[] = [];
  filteredEmployees: any[] = [];
  departments: string[] = ['Engineering', 'Marketing', 'HR', 'Finance']; // hardcoded list

  searchText = '';
  selectedDepartment = '';

  constructor(private router: Router, private api: Employee) {}

  ngOnInit() {
    this.api.getEmployees().subscribe((data: any[]) => {
      this.employeeList = data;
      this.filteredEmployees = data;
    });
  }

  onSearchChange(search: string) {
    this.searchText = search;
    this.applyFilters();
  }

  onDepartmentChange(department: string) {
    this.selectedDepartment = department;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEmployees = this.employeeList.filter(emp => {
      const matchesName = emp.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesDept = this.selectedDepartment ? emp.department === this.selectedDepartment : true;
      return matchesName && matchesDept;
    });
  }

  goToDetails(employee: any) {
    this.router.navigate(['/employees', employee.id]);
  }
}

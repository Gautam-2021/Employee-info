import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../services/employee';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
 


   employee: any;

  constructor(private route: ActivatedRoute, private employeeService: Employee) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe((emp:any) => this.employee = emp);
  }
}

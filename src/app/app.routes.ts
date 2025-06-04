import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
 import { EmployeeDetails } from './components/employee-details/employee-details';

export const routes: Routes = [


    { path: 'employees', component: EmployeeList },
    { path: 'employees/:id', component: EmployeeDetails },
    { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

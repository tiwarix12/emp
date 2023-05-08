import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  admins: Admin[] = [  
    new Admin(0, 'admin123')
  ];

  employees: Employee[] = [
    new Employee(1, 'john.doe@example.com', 'IT'),
    new Employee(2, 'jane.doe@example.com', 'HR'),
    new Employee(3, 'day@example.com', 'IT'),
    new Employee(4, 'ad@y.com,', 'DC'),
  ];

  validateAdmin(admin: Admin): boolean {
    return this.admins.some(existingAdmin => existingAdmin.id === admin.id && existingAdmin.password === admin.password);
  }

  addAdmin(admin: Admin) {
    this.admins.push(admin);
  }

  getAdmin(id: number): Admin | undefined {
    return this.admins.find(admin => admin.id === id);
  }
  
  updateAdmin(updatedAdmin: Admin): boolean {
    const index = this.admins.findIndex(admin => admin.id === updatedAdmin.id);
  
    if (index !== -1) {
      this.admins[index] = updatedAdmin;
      return true;
    }
  
    return false;
  }


  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }

  // updateEmployee(updatedEmployee: Employee): boolean {
  //   const index = this.employees.findIndex(employee => employee.id === updatedEmployee.id);

  //   if (index !== -1) {
  //     this.employees[index] = updatedEmployee;
  //     return true;
  //   }

  //   return false;
  // }
  updateEmployee(employee: Employee): Employee | null {
    const index = this.employees.findIndex(emp => emp.id === employee.id);
  
    if (index !== -1) {
      this.employees[index] = employee;
      return this.employees[index];
    } else {
      return null;
    }
  }
  
  
}

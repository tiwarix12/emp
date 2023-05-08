import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }

  ngOnInit(): void {}

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id);
    alert('Employee deleted successfully');
    this.employees = this.employeeService.getEmployees();
  }

  onUpdate(employee: Employee) {
    const updatedEmployee = this.employeeService.updateEmployee(employee);

    if (updatedEmployee) {
      const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
      this.employees[index] = updatedEmployee;
      alert('Employee updated successfully');
    } else {
      alert('Failed to update employee');
    }
  }

  editEmployee(employee: Employee) {
    const email = prompt('Enter new email:', employee.email);
    const department = prompt('Enter new department:', employee.department);

    if (email !== null && department !== null) {
      this.onUpdate({ ...employee, email, department });
    }
  }
  onAdd(employee: Employee) {
    this.employeeService.addEmployee(employee);
    this.employees = this.employeeService.getEmployees();
  }
}

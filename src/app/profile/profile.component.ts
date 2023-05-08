// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin = {
    id: 1,
    password: 'admin123'
  };

  editMode = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onSave(newPassword: string) {
    this.admin.password = newPassword;
    this.toggleEditMode();
    alert('Profile updated successfully.');
  }
}


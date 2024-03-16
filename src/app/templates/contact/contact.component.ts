import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, MatCardModule, QuillModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  Subject = new FormControl('')
  Body: string = ''
  constructor (private router: Router, private route: ActivatedRoute){
  }
  Send(){
    window.open(`mailto:test@example.com?subject=${this.Subject.value}&body=${this.Body}`);
  }
  QuillConent(event: any){
    this.Body = event.html
  }
}

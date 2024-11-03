
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { Student } from '../../interfaces/estudiante.interface';
import { EstudianteFirebaseService } from '../../services/estudianteFirebase.service'; // Servicio Firebase


@Component({
  selector: 'app-student-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.css']
})
export class StudentFormComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private EstudianteService: EstudianteService,private EstudianteFirebaseService:EstudianteFirebaseService) {
    this.studentForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dpi: ['', [Validators.required, Validators.min(1)]],
      telefonocelular: ['', Validators.required],
      telefonocasa: ['', Validators.required],
      correoelectronico: ['', Validators.required],
      nit: ['', Validators.required],
      creditos:['', Validators.required],
      carrera:['', Validators.required],
      direccion: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const newStudent: Student = {
        id: Date.now(), // Se genera un ID único
        ...this.studentForm.value
      };

      this.EstudianteService.addStudent(newStudent);
      this.studentForm.reset();
    }
  }

  saveToFirebase() {
    if (this.studentForm.valid) {
      const newStudent: Student = {
        id: Date.now(), // Genera un ID único
        ...this.studentForm.value
      };

      // Llama al servicio para guardar en Firebase
      this.EstudianteFirebaseService.addStudent(newStudent);

      this.studentForm.reset(); // Limpia el formulario
    }
  }
}


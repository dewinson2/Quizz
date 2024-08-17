import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quiz } from '../Class/Preguntas';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  title = 'Quizzx';
  
  Quizzes: Quiz[] = [ 
    
    new Quiz("¿Cuál es la capital de Italia?", "Roma", "Venecia", "Madrid", "París"),
    new Quiz("¿Qué animal es el más común en las aves?", "Pingüino", "Perro", "Gato", "Tortuga"),
    new Quiz("¿Cuál es la capital de España?", "Madrid", "Barcelona", "Valencia", "Sevilla"),
    new Quiz("¿Cuál es la capital de Francia?", "París", "Marseille", "Lille", "Lyon"),
    new Quiz("¿Cuál es la capital de Portugal?", "Lisboa", "Porto", "Madrid", "Londres"),
    new Quiz("¿Cuál es la capital de Inglaterra?", "London", "Birmingham", "Manchesterr", "Edinburgh"),

  ]


}

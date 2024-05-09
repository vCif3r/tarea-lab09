import { Component, Input } from '@angular/core';
import { IPelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pelicula?: IPelicula;
}

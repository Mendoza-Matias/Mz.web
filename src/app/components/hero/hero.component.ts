import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-hero',
  imports: [ServicesComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

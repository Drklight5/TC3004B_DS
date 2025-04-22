import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() texto = 'Click';
  @Input() color = 'red';
  @Output() onClick = new EventEmitter();
  clicked() {
    this.onClick.emit();
    this.texto = "Diste click";
  }
}

import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-random',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-random.component.html',
  styleUrl: './call-random.component.css'
})
export class CallRandomComponent {
  @Input() data: any; // Add @Input() property to receive data
}

import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-home',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-home.component.html',
  styleUrl: './call-home.component.css'
})
export class CallHomeComponent {
  @Input() data: any; // Add @Input() property to receive data
}

import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-profession',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-profession.component.html',
  styleUrl: './call-profession.component.css'
})
export class CallProfessionComponent {
  @Input() data: any; // Add @Input() property to receive data
}

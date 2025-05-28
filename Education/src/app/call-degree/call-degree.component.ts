import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-degree',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-degree.component.html',
  styleUrl: './call-degree.component.css'
})
export class CallDegreeComponent {
  @Input() data: any; // Add @Input() property to receive data
}

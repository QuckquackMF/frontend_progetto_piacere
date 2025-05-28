import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-all-data',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-all-data.component.html',
  styleUrl: './call-all-data.component.css'
})
export class CallAllDataComponent {
  @Input() data: any; // Add @Input() property to receive data
}
import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-names',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-names.component.html',
  styleUrl: './call-names.component.css'
})
export class CallNamesComponent {
  @Input() data: any; // Add @Input() property to receive data
}

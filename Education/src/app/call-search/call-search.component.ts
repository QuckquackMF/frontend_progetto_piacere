import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe
// Note: FormsModule is NOT needed here if the input and button are in AppComponent
// If you decide to move the search input/button into this component, then FormsModule would be needed.

@Component({
  selector: 'app-call-search',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-search.component.html',
  styleUrl: './call-search.component.css'
})
export class CallSearchComponent {
  @Input() data: any; // Add @Input() property to receive data
}
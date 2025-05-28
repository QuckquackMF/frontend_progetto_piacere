import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule and JsonPipe

@Component({
  selector: 'app-call-ranking',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add CommonModule and JsonPipe
  templateUrl: './call-ranking.component.html',
  styleUrl: './call-ranking.component.css'
})
export class CallRankingComponent {
  @Input() data: any; // Add @Input() property to receive data
}

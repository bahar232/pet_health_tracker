import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // <-- Burası eklendi
  imports: [CommonModule], // <-- Artık geçerli
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  vaccines = [
    { name: 'Kuduz Aşısı', date: '2025-06-10', status: 'done' },
    { name: 'Parvo Aşısı', date: '2025-06-20', status: 'due' }
  ];

  vetVisits = [
    { date: '2025-04-10', description: 'Yıllık kontrol yapıldı' },
    { date: '2025-03-05', description: 'Aşı uygulaması yapıldı' }
  ];

  healthNotes = [
    { date: '2025-05-01', content: 'Göz akıntısı gözlendi, damla kullanıldı.' },
    { date: '2025-04-15', content: 'İştahsızlık fark edildi.' }
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}

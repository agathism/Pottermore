import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Spell } from '../../models/spell.interface';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})
export class SpellsComponent {
  private httpClient: HttpClient = inject(HttpClient);
      spells: Spell[] = [];
      ngOnInit(): void {
          this.httpClient.get<Spell[]>('https:potterhead-api.vercel.app/api/spells',
            { headers: { 'accept': 'application/json' } }
          ).subscribe({
            next: (data) => {
              this.spells = data;
              console.log(this.spells);
            }
          });
      }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetailService } from '../../services/character-detail.service';
import HarryPotterCharacter from '../../models/character.interface';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent {
}

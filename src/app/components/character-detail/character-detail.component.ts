import { Component, inject, OnInit } from '@angular/core';
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
export class CharacterDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private characterDetailService = inject(CharacterDetailService)
  isLoading = false;
  character: HarryPotterCharacter | null =null;
  characterId: string | null = null;
  id: number | null = null;

  ngOnInit(): void {

    this.characterId = this.route.snapshot.paramMap.get('id');
    if (this.characterId) {
      this.id = parseInt(this.characterId);
      this.getCharacter();
    }
  }
  getCharacter() {
    this.isLoading = true;
    if(this.id){
      this.characterDetailService.getCharacter(this.id).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.character = data;
          console.log(this.character);
        }
      });  
    }
  }
}


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
  characterName: string | null = null;

  ngOnInit(): void {

    this.characterName = this.route.snapshot.paramMap.get('name');
    this.isLoading = true;
    if(this.characterName){
      this.characterDetailService.getCharacter(this.characterName).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.character = data;
          },
          error:(e)=>{
            console.log(e);
          }
      });
  }
  }
}


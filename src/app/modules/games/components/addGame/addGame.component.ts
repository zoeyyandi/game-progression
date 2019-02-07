import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './addGame.component.html',
  styleUrls: ['./addGame.component.scss']
})
export class AddGameComponent {
  newGameForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    ImageURL: new FormControl('', [Validators.required]),
    Platform: new FormControl('', [Validators.required]),
    NumberOfHoursToComplete: new FormControl('', [Validators.required]),
    Priority: new FormControl('', [Validators.required])
  });
  onSubmit() {
    console.log(this.newGameForm.value);
  }
}

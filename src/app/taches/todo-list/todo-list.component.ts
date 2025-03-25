import { Component } from '@angular/core';
import { Tache } from './tache';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, NgClass, DatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  checkTache: string = "assets/check.png";
  deleteTache: string ="assets/cross.png";

  taches: Tache[] = [
    { titre: 'Apprendre Angular', fait: false, date: new Date() },
    { titre: 'Développer une application',fait: false, date: new Date() },
    { titre: 'Tester l\'application',fait: true, date: new Date() }
  ];

  tacheVide: string = "";

  ajouterTache(titre: string) {
    if (titre.length === 0) {
      return;
    }

    this.taches.push({
      titre: titre,
      fait: false,
      date: new Date()
    });

    console.log(this.taches);
  }

  supprimerTache(titre: string) {
    this.taches = this.taches.filter(tache => tache.titre !== titre);
  }

  tacheFaite(titre: string) {
    const tache = this.taches.find(t => t.titre === titre);
    if (tache) {
      tache.fait = !tache.fait;
    }
  }

}

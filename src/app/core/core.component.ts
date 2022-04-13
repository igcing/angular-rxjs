import { Component, OnInit } from '@angular/core';
import { HttpService } from '@apps/shared/services/http.service';
import {map, take} from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  listPoke: any[];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getListPoke();
  }

  getListPoke() {
    this.http.get(this.POKE_URL, '?offset=0&limit=20')
        .pipe(
            map((el) => el.results),
            take(5)
        ).subscribe((res) => this.listPoke = res);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '@apps/shared/services/http.service';
import { map, Observable, race, take} from 'rxjs';
import {ApiResponse} from "@apps/shared/models/ApiResponse";
import {RxService} from "@apps/shared/services/rx.service";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  listPoke: any[];
  constructor(private http: HttpService, private rxservice: RxService) { }

  ngOnInit(): void {
    this.getListPoke();
  }

  getListPoke() {
    let arrObs:Array<Observable<ApiResponse>> = [];
    for(let i of [1,2,3,4,5]) {
      arrObs.push(this.http.get(this.POKE_URL, 'offset='+i*20+'&limit=20'));
    }
    this.rxservice.race(arrObs).subscribe((res) => this.listPoke = res );
  }
}

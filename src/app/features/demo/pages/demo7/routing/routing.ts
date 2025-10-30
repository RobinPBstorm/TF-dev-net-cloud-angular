import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.html',
  styleUrl: './routing.scss',
})
export class Routing implements OnInit {
  
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  
  id?: number;
  firstname!: string;
  lastname!: string;

  ngOnInit(): void {
    console.log('_activatedRoute :>> ', this._activatedRoute);
    this.id = this._activatedRoute.snapshot.params["id"]
    this.firstname = this._activatedRoute.snapshot.queryParams["firstname"];
    this.lastname = this._activatedRoute.snapshot.queryParams["lastname"];
  }


}

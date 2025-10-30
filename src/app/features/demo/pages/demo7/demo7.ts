import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-demo7',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './demo7.html',
  styleUrl: './demo7.scss',
})
export class Demo7 implements OnInit {

  private _router: Router = inject(Router);

  ngOnInit(): void {
    console.log('_router :>> ', this._router);
  }

  // http://localhost:4200/demo/demo7
  navigate(): void {
    this._router.navigate(['demo', 'demo7', 'competences']);
  }

  // http://localhost:4200/demo/demo7/routing/42
  navigateWithParam(): void {
    this._router.navigateByUrl('/demo/demo7/routing/42');
  }

  // http://localhost:4200/demo/demo7/routing?firstname=Quentin&lastname=Geerts
  navigateWithQueryParams(): void {
    this._router.navigate(['demo/demo7/routing'], {
      queryParams: { firstname: 'Quentin', lastname: 'Geerts' },
    });
  }

}

// Angular modules
import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector    : 'app-page-layout',
  templateUrl : './page-layout.component.html',
  styleUrls   : ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit
{
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  navList = [
    {
      option:"Home",
      link:"/app/home"
    },
    {
      option:"About",
      link:"/app/about"
    },
    {
      option:"Instructions",
      link:"/app/instructions"
    }
  ];

  constructor(private _formBuilder: FormBuilder, private router:Router) {}
  
  

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------
  public ngOnInit() : void
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------
  logout(){
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/auth/login']);
  }
  // -------------------------------------------------------------------------------
  // NOTE Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------

}

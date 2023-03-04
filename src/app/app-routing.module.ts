import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListingComponent } from './profile-listing/profile-listing.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profilelist', component: ProfileListingComponent },
  { path: 'profileview', component: ProfileViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

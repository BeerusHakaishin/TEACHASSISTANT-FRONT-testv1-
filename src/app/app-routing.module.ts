import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {path: '', component: TutorialComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tutorial', component: TutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

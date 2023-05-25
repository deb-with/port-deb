import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectComponent } from './component/project/project.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { NavberComponent } from './component/navber/navber.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/index'},
  {path:'index', component:HomeComponent},
  {path:'navber', component: NavberComponent},
  {path:'about', component:AboutComponent},
  {path:'project', component:ProjectComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

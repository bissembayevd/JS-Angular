import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: AboutUsComponent },       // главная страница
  { path: 'about-us', component: AboutUsComponent } // отдельный путь
];

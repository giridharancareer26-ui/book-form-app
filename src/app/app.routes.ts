import { Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookformComponent } from './bookform/bookform.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-form',
    pathMatch: 'full',
  },
  {
    path: 'book-listPage',
    component: BooklistComponent,
  },
  {
    path: 'book-form',
    component: BookformComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

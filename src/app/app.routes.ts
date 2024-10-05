import { Routes } from '@angular/router';
import { ArticleListPageComponent } from './features/articles/pages/article-list-page/article-list-page.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/articles', pathMatch: 'full' },
  {
    path: 'home',
    component: BaseLayoutComponent,
    children: [{ path: 'articles', component: ArticleListPageComponent }],
  },
];

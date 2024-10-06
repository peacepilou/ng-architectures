import { Routes } from '@angular/router';
import { ArticlePageComponent } from './features/articles/presentation/pages/article-page/article-page.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/articles', pathMatch: 'full' },
  {
    path: 'home',
    component: BaseLayoutComponent,
    children: [{ path: 'articles', component: ArticlePageComponent }],
  },
];

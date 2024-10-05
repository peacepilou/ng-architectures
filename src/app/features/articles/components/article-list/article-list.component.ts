import { Component, inject } from '@angular/core';
import { ArticleRepository } from '../../repositories/abstractions/article-repository.interface';
import { Observable } from 'rxjs';
import { Article } from '../../models/entities/article.entity';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ArticleRepositoryFactory } from '../../repositories/abstractions/article-repository.factory';

@Component({
  selector: 'app-article-list',
  standalone: true,
  providers: [
    { provide: ArticleRepository, useFactory: (factory: ArticleRepositoryFactory) => factory.createRepository(), deps: [ArticleRepositoryFactory] },
  ],
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  repository: ArticleRepository = inject(ArticleRepository);
  response$: Observable<Article[]> = this.repository.getAll();
}

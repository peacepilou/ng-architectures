import { Component, inject } from '@angular/core';
import { ArticleRepository } from '../../../domain/ports/article.repository';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ArticleRepositoryFactory } from '../../../infrastructure/article-repository.factory';
import { Article } from '../../../domain/core/entities/article.entity';

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

import { inject } from '@angular/core';
import { ArticleRepository } from '../../ports/article.repository';
import { Observable } from 'rxjs';
import { Article } from '../entities/article.entity';

export class GetArticleUsseCase {
  private articleRepo: ArticleRepository = inject(ArticleRepository);

  execute(): Observable<Article[]> {
    return this.articleRepo.getAll();
  }
}

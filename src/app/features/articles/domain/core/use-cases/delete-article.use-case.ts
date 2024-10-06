import { inject } from '@angular/core';
import { ArticleRepository } from '../../ports/article.repository';
import { Observable } from 'rxjs';

export class DeleteArticleUseCase {
  private articleRepo: ArticleRepository = inject(ArticleRepository);

  execute(id: number): Observable<void> {
    return this.articleRepo.delete(id);
  }
}

import { Observable } from 'rxjs';

import { Crud } from '../../../../core/abstractions/crud.interface';
import { Article } from '../core/entities/article.entity';

export abstract class ArticleRepository implements Crud<Article> {
  abstract getAll(): Observable<Article[]>;
  abstract getById(id: number): Observable<Article>;
  abstract create(item: Article): Observable<Article>;
  abstract update(id: number, item: Article): Observable<Article>;
  abstract delete(id: number): Observable<void>;
}

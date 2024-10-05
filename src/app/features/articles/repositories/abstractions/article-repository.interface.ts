import { Observable } from 'rxjs';
import { CreateArticleDTO } from '../../models/dtos/create-article.dto';
import { UpdateArticleDTO } from '../../models/dtos/update-article.dto';
import { Article } from '../../models/entities/article.entity';
import { Crud } from '../../../../core/abstractions/crud.interface';

export abstract class ArticleRepository implements Crud<Article, CreateArticleDTO, UpdateArticleDTO> {
  getAll(): Observable<Article[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Article> {
    throw new Error('Method not implemented.');
  }
  create(item: CreateArticleDTO): Observable<Article> {
    throw new Error('Method not implemented.');
  }
  update(id: number, item: UpdateArticleDTO): Observable<Article> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}

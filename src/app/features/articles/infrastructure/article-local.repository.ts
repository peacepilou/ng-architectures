import { inject, Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of, throwError } from 'rxjs';
import { ArticleRepository } from '../domain/ports/article.repository';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Article } from '../domain/core/entities/article.entity';
import { ArticleDTO } from './dtos/get-article.dto';
import { CreateArticleDTO } from './dtos/create-article.dto';
import { UpdateArticleDTO } from './dtos/update-article.dto';
@Injectable({
  providedIn: 'root',
})
export class ArticleLocalRepository extends ArticleRepository {
  private readonly BASE_URL = environment.apiUrl + '/articles';
  http: HttpClient = inject(HttpClient);

  constructor() {
    super();
    this.checkDbAvailability();
  }

  checkDbAvailability(): Promise<boolean> {
    return firstValueFrom(
      this.http.head(this.BASE_URL).pipe(
        map(() => true),
        catchError(() => throwError(() => "Le server JSON n'est pas lancé !"))
      )
    );
  }

  override getAll(): Observable<Article[]> {
    return this.http.get<ArticleDTO[]>(this.BASE_URL).pipe(map((dtos) => dtos.map((dto) => ArticleDTO.toEntity(dto))));
  }
  override getById(id: number): Observable<Article> {
    throw new Error('GetById() Local...');
  }
  override create(item: CreateArticleDTO): Observable<Article> {
    throw new Error('Create() Local...');
  }
  override update(id: number, item: UpdateArticleDTO): Observable<Article> {
    throw new Error('Update() Local...');
  }
  override delete(id: number): Observable<void> {
    throw new Error('Delete() Local...');
  }
}

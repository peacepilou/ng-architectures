import { Observable } from 'rxjs';

export interface Crud<T> {
  getAll(): Observable<Array<T>>;
  getById(id: number): Observable<T>;
  /**
   *
   * @param item - U type is the type of the Create DTO
   */
  create(item: T): Observable<T>;
  /**
   *
   * @param item - V type is the type of the Update DTO
   */
  update(id: number, item: T): Observable<T>;
  delete(id: number): Observable<void>;
}

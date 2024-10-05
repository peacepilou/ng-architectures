import { Observable } from 'rxjs';

export interface Crud<T, U, V> {
  getAll(): Observable<Array<T>>;
  getById(id: number): Observable<T>;
  /**
   *
   * @param item - U type is the type of the Create DTO
   */
  create(item: U): Observable<T>;
  /**
   *
   * @param item - V type is the type of the Update DTO
   */
  update(id: number, item: V): Observable<T>;
  delete(id: number): Observable<void>;
}

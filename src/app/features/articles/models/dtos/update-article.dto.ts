import { Article } from '../entities/article.entity';

export class UpdateArticleDTO {
  constructor(
    public title: string,
    public content: string
  ) {}

  static fromEntity(entity: Article): UpdateArticleDTO {
    return new UpdateArticleDTO(entity.title, entity.content);
  }
}

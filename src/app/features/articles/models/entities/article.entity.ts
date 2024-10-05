export class Article {
  private likes: number;
  private dislikes: number;
  private published: boolean;

  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {
    this.likes = 0;
    this.dislikes = 0;
    this.published = false;
  }

  public like(): void {
    this.likes++;
  }

  public dislike(): void {
    this.dislikes++;
  }

  public publish(): void {
    if (!this.published) {
      this.published = true;
      this.updatedAt = new Date();
    } else {
      throw new Error('Article is already published.');
    }
  }

  public unpublish(): void {
    if (this.published) {
      this.published = false;
      this.updatedAt = new Date();
    } else {
      throw new Error('Article is already unpublished.');
    }
  }

  public summarize(): string {
    return `${this.title} by ${this.author} - ${this.content.substring(0, 100)}...`;
  }

  public getStatistics(): { likes: number; dislikes: number } {
    return { likes: this.likes, dislikes: this.dislikes };
  }
}

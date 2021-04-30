interface PostInterface {
  id: string;
  title: string;
  url: string;
  image: string;
  text: string;
  author: string;
  score: number;
  nsfw: boolean;
}

class PostClass implements PostInterface {
  id: string;
  title: string;
  url: string;
  image: string;
  text: string;
  author: string;
  score: number;
  nsfw: boolean;

  constructor(
    id: string,
    title: string,
    url: string,
    image: string,
    text: string,
    author: string,
    score: number,
    nsfw: boolean
  ) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.image = image;
    this.text = text;
    this.author = author;
    this.score = score;
    this.nsfw = nsfw;
  }

  get getId(): string {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getImage(): string {
    return this.image;
  }

  get getText(): string {
    return this.text;
  }

  get getAuthor(): string {
    return this.author;
  }

  get getUrl(): string {
    return this.url;
  }

  get getScore(): number {
    return this.score;
  }

  get getNSFW(): boolean {
    return this.nsfw;
  }

  get checkUrl(): string {
    return this.url.endsWith(".jpg") ||
      this.url.endsWith(".png") ||
      this.url.endsWith(".jpeg")
      ? this.url
      : "";
  }
}

export { PostInterface, PostClass };

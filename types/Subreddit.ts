interface SubredditInterface {
  id: string;
  title: string;
  icon: string;
  description: string;
}

class SubredditClass implements SubredditInterface {
  id: string;
  title: string;
  displayName: string;
  icon: string;
  description: string;

  constructor(
    id: string,
    title: string,
    displayName: string,
    icon: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.displayName = displayName;
    this.icon = icon;
    this.description = description;
  }

  get getId(): string {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getDisplayName(): string {
    return this.displayName;
  }

  get getIcon(): string {
    return this.icon;
  }

  get getDescription(): string {
    return this.description;
  }
}

export { SubredditInterface, SubredditClass };

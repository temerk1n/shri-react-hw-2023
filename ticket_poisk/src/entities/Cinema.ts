interface CinemaProps {
  id: string;
  name: string;
  movieIds: string[];
}

export default class Cinema {
  public readonly id: string;
  public readonly name: string;
  public readonly movieIds: string[];

  constructor({ id, name, movieIds }: CinemaProps) {
    this.id = id;
    this.name = name;
    this.movieIds = movieIds;
  }
}

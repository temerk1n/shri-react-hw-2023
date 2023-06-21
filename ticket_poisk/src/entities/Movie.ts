interface MovieProps {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[],
}

export default class Movie {
  public readonly title: string;
  public readonly posterUrl: string;
  public readonly releaseYear: number;
  public readonly description: string;
  public readonly genre: string;
  public readonly id: string;
  public readonly rating: number;
  public readonly director: string;
  public readonly reviewIds: string[];

  constructor({title, posterUrl, releaseYear, description, genre, id, rating, director, reviewIds}: MovieProps) {
    this.title = title;
    this.posterUrl = posterUrl;
    this.releaseYear = releaseYear;
    this.description = description;
    this.genre = genre;
    this.id = id;
    this.rating = rating;
    this.director = director;
    this.reviewIds = reviewIds;
  }
}
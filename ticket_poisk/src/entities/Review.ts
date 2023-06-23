interface ReviewProps {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export default class Review {
  public readonly id: string;
  public readonly name: string;
  public readonly text: string;
  public readonly rating: number;

  constructor({ id, name, text, rating }: ReviewProps) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.rating = rating;
  }
}

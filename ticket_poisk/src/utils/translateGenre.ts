export default function translateGenre(genre: string): string {
  switch (genre) {
    case "action":
      return "Боевик";
    case "comedy":
      return "Комедия";
    case "fantasy":
      return "Фэнтези";
    case "horror":
      return "Хоррор";
    default:
      return "";
  }
}

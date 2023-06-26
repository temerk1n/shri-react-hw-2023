import Input from "@/components/Input/Input";
import { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
import Container from "@/components/Container/Container";
import Select, { SelectOptions } from "@/components/Select/Select";
import Cinema from "@/entities/Cinema";

interface SearchBarProps {
  cinemas: Cinema[];
  genres: Set<string>;
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  genre: string;
  onChangeGenre: (e: ChangeEvent<HTMLInputElement>) => void;
  cinema: string;
  onChangeCinema: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default async function SearchBar({
  cinemas,
  genres,
  title,
  onChangeTitle,
  genre,
  onChangeGenre,
  cinema,
  onChangeCinema,
}: SearchBarProps) {
  const optionsFromCinemas: SelectOptions = cinemas.map((cinema) => {
    return {
      id: cinema.id,
      name: cinema.name,
    };
  });
  optionsFromCinemas.unshift({ id: "", name: "Любой" });
  const optionsFromGenres: SelectOptions = Array.from(genres).map((genre) => {
    return {
      id: genre,
      name: genre,
    };
  });
  optionsFromGenres.unshift({ id: "", name: "Любой" });

  return (
    <div className={styles.sticky}>
      <Container flexDirection="column" gap="1.25rem" width="22.5rem">
        <h3>Фильтр поиска</h3>
        <form>
          <fieldset className={styles.inputGroup}>
            <Input
              label="Название"
              type="text"
              placeholder="Введите название"
              value={title}
              onChange={onChangeTitle}
            />
            <Select
              title="Жанр"
              placeholder="Выберите жанр"
              name="genre"
              options={optionsFromGenres}
              value={genre}
              onChangeValue={onChangeGenre}
            />
            <Select
              title="Кинотеатр"
              placeholder="Выберите кинотеатр"
              name="cinema"
              options={optionsFromCinemas}
              value={cinema}
              onChangeValue={onChangeCinema}
            />
          </fieldset>
        </form>
      </Container>
    </div>
  );
}

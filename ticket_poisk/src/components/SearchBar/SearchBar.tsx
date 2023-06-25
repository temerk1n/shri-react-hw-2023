"use client";
import Input from "@/components/Input/Input";
import { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
import Container from "@/components/Container/Container";
import Select, { SelectOptions } from "@/components/Select/Select";
import Cinema from "@/entities/Cinema";

const genres: SelectOptions = [
  ["Action", "Боевик"],
  ["Comedy", "Комедия"],
  ["Horror", "Хоррор"],
  ["Fantasy", "Фэнтези"],
];

interface SearchBarProps {
  cinemas: Cinema[];
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default async function SearchBar({
  cinemas,
  title,
  onChangeTitle,
}: SearchBarProps) {
  const optionsFromCinemas: SelectOptions = cinemas.map((cinema) => [
    cinema.id,
    cinema.name,
  ]);

  return (
    <div className={styles.sticky}>
      <Container flexDirection="column" gap="1.25rem" width="22.5rem">
        <h3>Фильтр поиска</h3>
        <fieldset className={styles.inputGroup}>
          <Input
            label="Название"
            type="text"
            placeholder="Введите название"
            value={title}
            onChange={onChangeTitle}
          />
          <Select label="Жанр" defaultOption="Выберите жанр" options={genres} />
          <Select
            label="Кинотеатр"
            defaultOption="Выберите кинотеатр"
            options={optionsFromCinemas}
          />
        </fieldset>
      </Container>
    </div>
  );
}

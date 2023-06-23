"use client"
import Input from "@/components/Input/Input";
import { useState } from "react";
import styles from './SearchBar.module.css'
import Container from "@/components/Container/Container";

export default function SearchBar () {
  const [title, setTitle] = useState("");

  return (
    <Container flexDirection="column" gap="1.25rem" width="22.5rem">
      <h3>Фильтр поиска</h3>
      <fieldset className={styles.inputGroup}>
        <Input label="Название" type="text" placeholder="Введите название" value={title} onChange={(e) => setTitle(e.target.value)} />
      </fieldset>
    </Container>
  )
}
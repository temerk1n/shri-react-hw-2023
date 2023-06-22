import Input from "@/components/Input/Input";
import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar () {
  const [title, setTitle] = useState("");

  return (
    <div className={styles.container}>
      <h3>Фильтр поиска</h3>
      <fieldset className={styles.inputGroup}>
        <Input label="Название" type="text" placeholder="Введите название" value={title} onChange={(e) => setTitle(e.target.value)} />
      </fieldset>
    </div>
  )
}
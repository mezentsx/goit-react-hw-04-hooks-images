import React from "react";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit, onSearch, search }) {
  const handleNameChange = (e) => {
    onSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      alert("Enter keyword please");
      return;
    }

    onSubmit(search);
    onSearch("");
  };

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button className={s.SearchFormButton} type="submit">
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={search}
            onChange={handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.search.value;
    if (!topic) {
      toast.error("Please enter something for searching");
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
        <button className={css.btn} type="submit">
          <LiaSearchSolid />
        </button>
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;

import toast, { Toaster } from "react-hot-toast";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (!topic) {
      toast.error("Please enter something for searching");
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          Search <LiaSearchSolid />
        </button>
        <div>
          <Toaster />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;

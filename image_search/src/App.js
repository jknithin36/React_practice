import SearchBar from "./components/SearchBar";
export default function App() {
  const handleSubmit = (term) => {
    console.log("Do a serach with ", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

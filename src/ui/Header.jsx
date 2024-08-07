import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <div className="bg-stone-50 drop-shadow-md shadow-stone-500 h-10 flex">
      <h1 className="text">College Deals</h1>
      <SearchBar />
    </div>
  );
}

export default Header;

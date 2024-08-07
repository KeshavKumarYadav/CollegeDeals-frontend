import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="bg-stone-200 flex justify-center items-center">
      <HiMagnifyingGlass className="bg-stone-200 text-lg" />
      <input
        type="text"
        placeholder="Search product..."
        className="text-stone-800 bg-stone-200 placeholder:text-stone-600 focus:outline-none w-full"
      />
      {/* <button className="fa fa-search bg-stone-600 rounded-e-full w-10 py-[0.55rem]"></button> */}
    </div>
  );
};

export default SearchBar;

import SearchBarStyle from "./SearchBarStyle";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { getAllProducts, getProductName } from "../../../Redux/ProductsSlice";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any>("");
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);
  const products = useAppSelector((state) => state.products.allProducts);
  const productName = useAppSelector((state) => state.products.productName);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openSearchBarHandler = () => {
    dispatch(getAllProducts());
    setOpenSearchbar(true);
  };

  const closeSearchBarHandler = () => {
    setOpenSearchbar(false);
  };

  const handleSearch = (evt: any) => {
    evt.preventDefault();
    let item = evt.target.value.toLowerCase();
    setSearch(evt.target.value);
    let product = item
      ? products.filter((res: any) => res.name.toLowerCase().includes(item))
      : [];
    // console.log(product);
    setResults(product);
  };

  const handleNavigation = (route: any) => {
    route.preventDefault();
    console.log(route);
    navigate(`/category?id=${route}`);
    closeSearchBarHandler();
    setSearch("");
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    // navigate(`/category?id=${search}`);
    // closeSearchBarHandler();
    // setSearch("");


    dispatch(getProductName(search))
  };

  console.log(productName);

  return (
    <SearchBarStyle>
      <form onSubmit={handleSubmit}>
        <div
          onClick={closeSearchBarHandler}
          className={`overlay ${openSearchbar ? "visible" : "hidden"}`}
        ></div>
        <div className="searchGroup">
          <div className="wrapper">
            <input
              onFocus={openSearchBarHandler}
              type="text"
              value={search}
              onChange={(evt) => handleSearch(evt)}
              placeholder="Search Products"
            />
            <div>
              <IoIosSearch size="25" />
            </div>
          </div>

          <>
            {openSearchbar && (
              <div className="search_results">
                {results.length > 0 ? (
                  <>
                    {results.map((res: any, i: any) => {
                      return (
                        <p
                          key={i}
                          onClick={() => handleNavigation(res.category)}
                        >
                          {" "}
                          {res.name}{" "}
                        </p>
                      );
                    })}
                  </>
                ) : (
                  <small>No Results Found</small>
                )}
              </div>
            )}
          </>
        </div>
      </form>
    </SearchBarStyle>
  );
};

export default SearchBar;

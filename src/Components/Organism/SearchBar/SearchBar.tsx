import SearchBarStyle from "./SearchBarStyle";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { getAllProducts, wordpress } from "../../../Redux/ProductsSlice";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any>("");
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);
  const products = useAppSelector((state) => state.products.allProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    g();
  }, []);

  const g = async () => {
    console.log("enter");
    const prod = await axios.get('https://localhost/ogwears/wp-json/wc/v3/products?consumer_key=ck_cef86abbb7d3e4b387dd49585d0975de4b3d8128&consumer_secret=cs_1496ddec28955d77f6e22ce02184534c952588c5'
    );
    console.log(prod.data());
  };

  const openSearchBarHandler = () => {
    dispatch(getAllProducts());
    dispatch(wordpress());
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

    setResults(product);
  };

  const handleNavigation = (route: any) => {
    route.preventDefault();

    navigate(`/category?id=${route}`);
    closeSearchBarHandler();
    setSearch("");
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    navigate(`/category?id=${search}`);
    closeSearchBarHandler();
    setSearch("");
  };

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

          
            {openSearchbar && (
              <div className="search_results">
                {results.length > 0 ? (
                  <>
                    {results.map((res: any, i: any) => {
                      return (
                        <p key={i} onClick={() => handleNavigation(res.name)}>
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
          
        </div>
      </form>
    </SearchBarStyle>
  );
};

export default SearchBar;

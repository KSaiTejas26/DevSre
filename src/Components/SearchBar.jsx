import { useState } from "react";
import productsdata from './Customers/CategoryWiseProductPage/spendproducts.json';
import "./SearchBar.css";
import SearchResultsList from "./SearchResultsList";
 
export default function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [vendors, setVendors] = useState([]);
 
  const fetchData = (value) => {
    const lowercasedValue = value.toLowerCase();
 
    const filteredResults = productsdata.filter((data) =>
      data.category && data.category.toLowerCase().includes(lowercasedValue)
    );
 
    const filteredVendors = productsdata.filter((data) =>
      data.brand && data.brand.toLowerCase().includes(lowercasedValue)
    );
 
    // Extract unique vendors and categories
    const uniqueVendors = Array.from(new Set(filteredVendors.map((data) => data.brand)));
    const uniqueCategories = Array.from(new Set(filteredResults.map((data) => data.category)));
 
    setVendors(uniqueVendors);
    setResults(uniqueCategories);
  };
 
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
 
  return (
    <div className="input-wrapper" style={{ maxWidth: "20%" }}>
      <input
        className="searchBar"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {input && (results.length > 0 || vendors.length > 0) && (
        <SearchResultsList results={results} vendordata={vendors} />
      )}
    </div>
  );
}
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const targetUrl = `coin/${input}`;
    navigate(targetUrl);
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div>
        <FaSearch className="search-logo"/>
        <input
          type="text"
          placeholder="Search crypto currencies..."
          value={input.toLowerCase()}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;

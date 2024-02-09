import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logoIcon from "/favicon.png";
import cartIcom from "../../assets/cartIcon.png";
// 1. Import
import { HamburgerIcon } from "@chakra-ui/icons";

// 2. Use the `as` prop

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call an API to search for products with the query
    // Update the results state with the search results
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  if (window.innerWidth < 768) {
    // mobile viewport
    return (
      <div style={{ margin: "0 .8rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "5rem",
            width: "100%",
            alignItems: "center",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
            }}>
            <img
              src={logoIcon}
              alt="Logo"
              style={{ width: "2rem", height: "2rem", marginRight: "5px" }}
            />
            <Link to="/" style={{textDecoration:"none",color:"black"}}>
              {" "}
              <p className="logo">mcay's</p>
            </Link>
          </div>
          <Link
            to="/signup"
            style={{
              display: "flex",
              height: "2.5rem",
              width: "25%",
              backgroundColor: "whiteSmoke",
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}>
            <div className="auth">Account</div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
            }}>
            <img
              src={cartIcom}
              alt="Cart Logo"
              style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}
            />
          </div>
        </div>
        <div
          className="menuAndSearch"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          {/* <HamburgerIcon h={48} w={48} onClick={() => setIsOpen(!isOpen)}/> */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "block",
              borderRadius: "30px",
              backgroundColor: "whiteSmoke",
              width: "95%",
              height: "2.7rem",
              margin: "auto",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 0.5rem 0",
                width: "80%",
                margin: "0px",
                height: "2.5rem",
              }}>
              <FontAwesomeIcon icon={faSearch} size="lg" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                style={{
                  display: "flex",
                  border: "none",
                  outline: "none",
                  width: "100vw",
                  marginLeft: "0.5rem",
                  backgroundColor: "whiteSmoke",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  height: "1rem",
                }}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  // desktop viewport
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "5rem",
        width: "100%",
        alignItems: "center",
      }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
        <img
          src={logoIcon}
          alt="Logo"
          style={{ width: "2rem", height: "2rem", marginRight: "5px" }}
        />
        <Link to="/" style={{textDecoration:"none",color:"black"}}>
          {" "}
          <p className="logo">mcay's</p>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          borderRadius: "30px",
          backgroundColor: "whiteSmoke",
          width: "50%",
          height: "2.5rem",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 0.5rem 0",
            width: "100%",
          }}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products"
            style={{
              height: "30%",
              border: "none",
              outline: "none",
              width: "80%",
              marginLeft: "0.5rem",
              backgroundColor: "whiteSmoke",
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
      <Link
        to="/signup"
        style={{
          display: "flex",
          height: "2.5rem",
          width: "10%",
          backgroundColor: "whiteSmoke",
          borderRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}>
        <div className="auth">Account</div>
      </Link>
      <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
        <img
          src={cartIcom}
          alt="Cart Logo"
          style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}
export default SearchBar;

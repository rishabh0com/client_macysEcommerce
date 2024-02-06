import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/navbar.css"
import logoIcon from "/favicon.png"
import cartIcom from "../../assets/cartIcon.png"

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

    if(window.innerWidth < 768){ // mobile viewport
        return (
            <div style={{margin:"0 .8rem 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", height: "5rem", width: "100%", alignItems: 'center'}}>
                <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
                    <img
                        src={logoIcon}
                        alt="Logo"
                        style={{ width: "2rem", height: "2rem", marginRight: "5px" }}
                    />
                    <p className="logo">mcay's</p>
                </div>
    
                <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
                    <img
                        src={cartIcom}
                        alt="Cart Logo"
                        style={{ width: "2rem", height: "2rem", marginLeft: "5px" }}
                    />
                </div>
            </div>
            <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "block",
                        borderRadius: "30px",
                        backgroundColor: "#eaeaea",
                        width: "95%",
                        height: "2.5rem",  
                        margin:"auto"  
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0.5rem",
                            width: "80%",
                            margin:"0px",
                            textAlign:"center"

                        }}
                    >
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                        <input
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search"
                            style={{
                                display: 'flex',
                                border: "none",
                                outline: "none",
                                width: "100vw",
                                marginLeft: "0.5rem",
                                backgroundColor: "#eaeaea",
                                alignItems:"center",
                                fontSize:"1.2rem",
                                fontWeight:"400"
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </form>
    
    
            </div>
        );    
    }

    // desktop viewport
    return (
        <div style={{ display: "flex", justifyContent: "space-around", height: "5rem", width: "100%", alignItems: 'center', }}>
            <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
                <img
                    src={logoIcon}
                    alt="Logo"
                    style={{ width: "2rem", height: "2rem", marginRight: "5px" }}
                />
                <p className="logo">mcay's</p>
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    borderRadius: "30px",
                    backgroundColor: "#e9ecef",
                    width: "50%",
                    height: "2.5rem",

                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem",
                        width: "100%",

                    }}
                >
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <input
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search for products"
                        style={{
                            display: 'block',
                            border: "none",
                            outline: "none",
                            width: "100%",
                            marginLeft: "0.5rem",
                            backgroundColor: "#e9ecef",
                        }}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </form>
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

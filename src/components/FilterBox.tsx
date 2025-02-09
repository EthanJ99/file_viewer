import { useState } from "react";

function FilterBox({setFilter}) {
    const [search, setSearch] = useState("");

    // ----- Functions ----- //
    function handleSubmit(event) {
        event.preventDefault();
        if (search) {
            setFilter(search);
            setSearch(""); // Clears field after use
        } else{
            setFilter("");
        }
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Filter files:  </label>
            <input
                placeholder="Search"
                type="text"
                id="filterinput"
                className="input"
                name="text"
                autoComplete="off"
                value={search}
                onChange={handleChange}
            />

            <div>
                <button type="submit" className="btn">
                    Filter
                </button> 
            </div>

        </form>
        </div>
    );
}

export default FilterBox;
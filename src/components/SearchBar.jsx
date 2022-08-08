import React from "react";
// import{ useState} from 'react';
import { useEffect, useState } from "react";


const SearchBar  = ({getCountValue}) => {
    const [search,setSearch] = useState("")

    // const onPressButton = async (event) => {
    //     await setSearch(event.target.value);
        
    // };

    useEffect(() => {
        getCountValue(search)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [search]);

  

    return (
        <div className="wrapper shadow">
            <div className="search shadow">
                <input type="text"  className="text-center search_text" placeholder="Please enter ingredient name."  value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="autocomp-box"></div>
                <div className="icon">
                    <ion-icon size="large" name="search-sharp"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
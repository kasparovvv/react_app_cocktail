import './App.css';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

import {useEffect,useState } from "react"


function App() {

  const [cocktails,setcocktails] = useState([])

  const getData  = async (yourvalue) => {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${yourvalue}`);
    //const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${yourvalue}`);
    const data = await result.json();
    //setcocktails(data["drinks"])
    return data;
  }

  // useEffect(() => {
  //   getData()
  // },[]);

  const getCountValue = async (yourvalue) => {
    if(yourvalue.length > 0) {
      try {
        var data = await getData(yourvalue)
        setcocktails(data["drinks"])
      } catch (error) {
        setcocktails("")
        // console.log('Fetch error: ', error);
      }
    }
    
  };


  return (
    <div className="container App">
      <h1 className ='mt-5' >Ayanna's Bar</h1>

      <SearchBar getCountValue={(value) => getCountValue(value)}/>
        

      {
        cocktails?.length > 0 
          ?
          (
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
            {
              cocktails.map((cocktail) => (
                <Card key={cocktail.idDrink} cocktail={cocktail}/>
              ))
            }
          </div>)
        :(
          <h3 className ='mt-5 text-white'>  There's nothing to drink  :(  </h3>
        ) 
        }


        
    </div>
  );
}

export default App;

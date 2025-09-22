import { useEffect, useState } from "react";

const Catalog = () => {

const apiUrl = 'https://api.jsonbin.io/v3/b/68cec815d0ea881f40845308';

const [dogs, setDogs] = useState([]);

useEffect(() => {
    
    const fetchAllDogs = async () => {

        const response = await fetch(apiUrl);
        const dogData = await response.json();

        setDogs(dogData.record);
        console.log(dogData)
    }

    fetchAllDogs();
    console.log('Fetching dogs')
    
},[]) 

return (
<>

<header>
<h2>Our dogs</h2>
</header>
<main>
    <div>
        <ul>
            {Array.isArray(dogs) && dogs.map((dog) => (
                <div className="dog_catalog">
                <li key={dog.chipNumber}>
                    <img src={dog.img} ></img>
                    <p> {dog.name}</p>
                    </li>
                </div>
            ))}
        </ul>
    </div>
</main>

</>

)
}

export default Catalog;
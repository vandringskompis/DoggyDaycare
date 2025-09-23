import { useEffect, useState } from "react";
import { Link } from "react-router";
import defaultImg from '../assets/no-image-default.png';


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
    <div className="dog_catalog">
            {Array.isArray(dogs) && dogs.map((dog) => (
                <div className="dog_card" key={dog.chipNumber}>
                    <Link to= "/Catalog/DogInfo" state={{dog}} >
                    <img className="dog_img" src={dog.img || defaultImg} alt= {dog.name} 
                    onError={(e) => {
                         e.target.onerror = null;
                         e.target.src = defaultImg
                        }} />
                        </Link>
                    <p> {dog.name}</p>
                </div>
            ))}
    </div>
</main>

</>

)
}

export default Catalog;
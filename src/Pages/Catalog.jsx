import { useEffect, useState } from "react";
import { Link } from "react-router";
import defaultImg from '../assets/no-image-default.png';
import './Catalog.css';


const Catalog = () => {

    const apiUrl = 'https://api.jsonbin.io/v3/b/68cec815d0ea881f40845308';

    const [dogs, setDogs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        const fetchAllDogs = async () => {

            const response = await fetch(apiUrl);
            const dogData = await response.json();

            setDogs(dogData.record);
            console.log(dogData)
        }

        fetchAllDogs();
        console.log('Fetching dogs')

    }, [])

    const filteredDogs = dogs.filter((dog) => dog.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>

            <header>
                <h2>Our dogs</h2>
            </header>
            <main>

                <div>
                    <input type="text" className="search_field"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />

                </div>
                <div className="dog_catalog">
                    {filteredDogs.length > 0 ? (filteredDogs.map((dog) => (
                        <div className="dog_card" key={dog.chipNumber}>
                            <Link to="/Catalog/DogInfo" state={{ dog }} >
                                <img className="dog_img" src={dog.img || defaultImg} alt={dog.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = defaultImg
                                    }} />
                            </Link>
                            <p> {dog.name}</p>
                        </div>
                    ))
                ) : ( 
                    <p className="no_dogs">No dogs found</p>
                )}
                </div>
            </main>

        </>

    )
}

export default Catalog;
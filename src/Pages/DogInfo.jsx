import { useLocation } from "react-router";
import defaultImg from '../assets/no-image-default.png';
import './DogInfo.css';

const DogInfo = () => {

    const location = useLocation();
    const { dog } = location.state;


    return (
        <>
            <div className="DogInfo">
                 <p id="dogName"> {dog.name}  </p>
                <img className="dog_img_DogInfo" src={dog.img || defaultImg} alt={dog.name}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImg
                    }} />
                   
                <div className="Info">
                    <div className="Dog">
                        
                        <p> Sex: {dog.sex}  </p>
                        <p> Breed: {dog.breed}  </p>
                        <p> Present: {dog.present ? "Yes" : "No"}  </p>
                        <p> Chip number: {dog.chipNumber}  </p>
                    </div>
                    <div className="Owner">
                        <p> Owner: { dog.owner.name} {dog.owner.lastName}   </p>
                        <p> Phone number: {dog.owner.phoneNumber}  </p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default DogInfo;
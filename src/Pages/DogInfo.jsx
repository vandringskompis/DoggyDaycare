import { useLocation } from "react-router";

const DogInfo = () => {

const location = useLocation();
const { dog } = location.state;


return (
<>

<h2>DogInfo</h2>

<p> {dog.name}  </p>

</>
)
}

export default DogInfo;


import { Link } from "react-router";


const Home = () => {


return (
<>
<header>

<h2 className="header">DoggyDaycare</h2>

</header>

<main>

    <Link to="/catalog" className="button_our_dogs">Our dogs</Link>

</main>

</>

)
}

export default Home;
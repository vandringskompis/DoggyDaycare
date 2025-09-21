// API url https://api.jsonbin.io/v3/b/68cec815d0ea881f40845308

import { Link } from "react-router";


const Home = () => {


return (
<>
<header>

<h2 className="header">DoggyDaycare</h2>

</header>

<body>
    
    <Link to="/catalog" className="button_our_dogs">Our dogs</Link>

</body>

</>

)
}

export default Home;
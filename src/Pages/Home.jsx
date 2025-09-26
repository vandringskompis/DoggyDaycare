import './Home.css';
import { Link } from "react-router";


const Home = () => {


    return (
        <>
            <header>

                <h2 className="header"> Doggy Daycare</h2>

            </header>

            <main>

                <div className="welcome_page">

                    <p> Welcome to DoggyDaycare! Here you can see all our registered dogs.<br />
                        Just click on the button below to come to our catalog page. </p>

                    <Link to="/catalog" className="button_our_dogs">Our dogs</Link>

                    <p>Run by Vandringskompis</p>

                </div>
            </main>

        </>

    )
}

export default Home;
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center py-5">
            <Link to="/reports" className="text text-dark font-weight-bold">See my work</Link>
        </div>
    )
}
export default Home;

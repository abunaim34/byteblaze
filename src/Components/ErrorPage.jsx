import { Link } from 'react-router-dom'


const ErrorPage = () => {
    return (
        <div>
            <h1>error</h1>
            <Link to="/"><button className="btn-primary">GO BACK</button></Link>
        </div>
    );
};

export default ErrorPage;
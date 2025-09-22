import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const proceedCharacters = () => {
        navigate('/characters');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button type="button" class="btn btn-success" onClick={proceedCharacters}>Characters</button>
        </div>
    );
}

export default Home;
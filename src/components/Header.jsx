import reactImg from "/src/assets/react-core-concepts.png";
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={reactImg} alt="atom" />
            <h1>React Essentials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;

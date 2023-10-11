import Header from "./Components/Header/Header"
import Game from "./Components/Game/Game"

function App() {
    return (
        <div className="wrapper">
            <Header />

            <div className="game-wrapper">
                <Game />
            </div>
        </div>
    )
}

export default App


import Logo from "../../resources/icons/PokemonLogo";

import './appHeader.scss';

const AppHeader = () => {
    

    return (
        <header>
            <Logo/>
            <div>
                <p>Filter</p>
                <button>name</button>
                <button>type</button>
            </div>
        </header>
    )
}

export default AppHeader;
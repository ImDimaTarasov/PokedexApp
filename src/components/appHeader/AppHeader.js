import { useDispatch, useSelector } from 'react-redux';

import {chooseTheme } from '../../actions';

import Logo from "../../resources/icons/PokemonLogo";
import './appHeader.scss';

const AppHeader = () => {

    const {theme} = useSelector(state => state);
    const dispatch = useDispatch();

    const changeTheme = (value) => {
        let res = value.checked ? true : false;
        dispatch(chooseTheme(res))
    }

     
    return (
        <header>
            <Logo/>
            <div className="theme">
                <label className="switch">
                    <input type="checkbox" onChange={(e) => changeTheme(e.target)} defaultChecked={theme} />
                    <span className="slider"></span>
                </label>
            </div>
        </header>
    )
}

export default AppHeader;
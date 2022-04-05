import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalChange } from '../../actions';

import './modalWindow.scss';
import img from '../../resources/img/21.png';
const ModalWindow = () => {
    const {modal, chosenPokemon} = useSelector(state => state);
    const dispatch = useDispatch();

    const {name, id, type, spritFront, spritBack, height, weight} = chosenPokemon;

    const [pokemonFront, setPokemonFront] = useState(true);
    
    const closeModal = () => {
        dispatch(modalChange(false))
    }
    
    const pokemonImg = () => {
      setPokemonFront(!pokemonFront)
    }

    return(
        <div className='modal' id={id} style={modal? {display: 'block'} : {display: 'none'}}> 
        <div className="modal__dialog">
            <div className="modal__content">
                    <div onClick={() => closeModal()} className="modal__close">&times;</div>
                    <img onClick={() => pokemonImg()} src={pokemonFront ? spritFront: spritBack} alt={name}/>
                    <div className='modal__information'>
                        <div className="modal__information_name">{name}</div>
                        <div className="modal__information_type">type: {type} </div>
                        <div className="modal__information_type">weight: {weight}</div>
                        <div className="modal__information_type">height: {height}</div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default ModalWindow;
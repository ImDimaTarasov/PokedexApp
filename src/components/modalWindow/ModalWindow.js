import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalChange } from '../../actions';

import './modalWindow.scss';

const ModalWindow = () => {
    const {modal, chosenPokemon, theme} = useSelector(state => state);
    const dispatch = useDispatch();

    const {name, id, type, spritFront, spritBack, height, weight} = chosenPokemon;

    const [pokemonFront, setPokemonFront] = useState(true);
    
    const closeModal = (e) => {
        if (e.getAttribute('data-close')){
            dispatch(modalChange(false))
            setPokemonFront(true);
        }
    }
    
    const pokemonImg = () => {
      setPokemonFront(!pokemonFront)
    }
    let clazz = theme ? 'modal modal-dark' : 'modal modal-light';

    return(
        <div className={clazz} data-close onClick={(e) => closeModal(e.target)} id={id} style={modal? {display: 'block'} : {display: 'none'}}> 
        <div className="modal__dialog">
            <div className="modal__content">
                    <div data-close onClick={(e) => closeModal(e.target)} className="modal__close">&times;</div>
                    <div className='modal__img'>If you want to see my back, click on me</div>
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
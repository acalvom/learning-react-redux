import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction} from '../redux/pokeDucks'

/* Hooks de React Redux
 * useDispatch sirve para consumir la acción getPokemonsAction
 * useSelector sirve para leer el array con el estado inicial
 */


const Pokemons = () => {
    const dispatch = useDispatch();
    return (
        <div>
            Pokemons List
            {/*Estamos con Redux y por lo tanto no se puede meter la acción como tal sino que
            tiene que pasar por el dispatch:
             NOK --> ()=>getPokemonsAction()
             OK --> ()=>dispatch(getPokemonsAction())   */}
            <button onClick={() => dispatch(getPokemonsAction())}>Get Pokemons</button>
        </div>
    );
};

export default Pokemons;

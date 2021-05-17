import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction, getPokemonsOffsetAction} from '../redux/pokeDucks'

/* Hooks de React Redux
 * useDispatch sirve para consumir la acción getPokemonsAction
 * useSelector sirve para leer el array con el estado inicial. Devuelve toda la tienda
 */

const Pokemons = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(store => store.pokemons.array);

    return (
        <div>
            <h2>Pokemons List</h2>
            <button onClick={() => dispatch(getPokemonsAction())}>Get Pokemons</button>
            <button onClick={() => dispatch(getPokemonsOffsetAction(20))}>Next</button>
            {/*Con Redux no se puede meter la acción como tal sino que
            tiene que pasar por el dispatch:
                 NOK --> ()=>getPokemonsAction()
                 OK --> ()=>dispatch(getPokemonsAction())   */}
            <hr/>
            <ul>
                {
                    pokemons.map((item) =>
                        <li key={item.id}> {item.name}</li>
                    )
                }
            </ul>
        </div>

    );
};

export default Pokemons;

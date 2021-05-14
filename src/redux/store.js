/**
 * En este archivo se guardan todos los estado para que estén disponibles en la app.
 * El store reúne todas las piezas y archivos creado en el Duck.
 * Se configura una vez y luego simplemente se añaden pequeñas modificaciones.
 * Funciona como el index.js
 * Importar todos los reducers que se utilizan en el Duck
 */

import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import pokeReducer from './pokeDucks'

//El rootReducer es la única parte que hay que modificar para ir añadiendo todos los reducer que tengamos
const rootReducer = combineReducers({
    pokemons: pokeReducer
})

// Para configurar la extensión redux devtools de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}

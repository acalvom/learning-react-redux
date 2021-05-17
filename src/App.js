import React from "react";
import Pokemons from "./components/Pokemons";
import {Provider} from "react-redux";
import generateStore from "./redux/store";

/*
 * Generar la tienda
 * Añadir la tienda creada como prop del Provider
 * En el navegador, abrir la pestaña de Redux -> State para ver el array de pokemons
 */

function App() {
    const store = generateStore()
    return (
        // Se envuelven los componentes en los Providers
        <Provider store={store}>
            <Pokemons/>
        </Provider>
    );
}

export default App;

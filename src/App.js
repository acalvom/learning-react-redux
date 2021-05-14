import React from "react";
import Pokemons from "./components/Pokemons";
import {Provider} from "react-redux";
import generateStore from "./redux/store";

/*
 * Generar la tienda
 * Añadir la tienda creada como prop del Provider
 */

function App() {
    const store = generateStore()
    return (
        <Provider store={store}>
            <Pokemons/>
        </Provider>
    );
}

export default App;

/**
 * Son los reduxes
 * Los Ducks almacenan todas las constantes, acciones, reducers... en un solo archivo.
 * Toda la configuración se guarda en este archivo. El uso de Ducks no es más que una metodología.
 * En este archivo se almacenan las acciones para consumir datos de un API, a diferencia de los
 * ejemplos anteriores, que se hacía la petición al API directamente en el componente
 * Los Ducks requieren 3 cosas: constantes, reducers y acciones
 * Los pasos a seguir son:
 * 1. Crear la constante initialData
 * 2. Crear la acción, que en este caso, recibe datos de un API.
 *    2.1 Crear el tipo de acción para que el switch lo pueda interpretar
 *    2.2 En su método dispatch asignarle el tipo de acción que ejecuta y los datos que lleva
 * 3. Crear el reducer donde se analiza la acción recibida y cambiar el estado
 */

import axios from "axios";

// Constants -- Almacena los datos del API aceptados por los reducers
const initialData = { // almacena el estado que se inicia limpio
    array: [],       // el tipo de dato que se va a recibir. en este caso, un array de pokemons
}

// Tipos
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';  // Envía los pokemons al array

// Reducers -- Acepta la lista de datos del API y los envía a las constantes o estados
export default function pokeReducer(state = initialData, action) {
    /**
     * - La función recibe el estado, que siempre parte de initialData, y la acción a ejecutar
     * - Como se va a realizar varias acciones (p.ej consumir un API, modificar datos, pasar a otra página,
     *   estas se gestionan a través de un switch
     * - Los tipos de acciones (action.type) también hay que declararlos, en mayúsculas y con un nombre
     *   descriptivo de la acción que desempeñan
     */
    switch (action.type) {
        case GET_POKEMONS_SUCCESS: // Si se dispara esta acción, se añaden los results al estado
            return {...state, array: action.payload};// {} abrir un objeto, ... añadirlo al actual
        default:
            return state
    }

}
// Actions -- Llama al API
export const getPokemonsAction = () => async (dispatch, getState) => {
    /**
     * - Esta es la función que ejecuta la acción de añadir los pokemon al array
     * - Se trata de una función de flecha que retorna otra función de flecha:
     *      1. En la primera función de flecha se reciven los parámetros necesarios
     *         para ejecutar la acción. Algunas funciones no necesitan de parámetros iniciales
     *         para poderse ejecutar y en este caso, los campos van vacíos ()
     *      2. En la segunda función de flecha se reciben siempre dos parámetros:
     *        -> dispatch para activar el reducer
     *        -> getState obtener initialData
     *      3. Como se van a realizar llamadas a un API, se utiliza async con try & catch
     *         y se importa axios
     */
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({ // Para activar el switch reducer. Se le envía el tipo de acción y el payload
            type: GET_POKEMONS_SUCCESS,
            payload: res.data.results // results es la key del array del API donde se guardan los pokemons
        })
    } catch (error) {
        console.log(error);
    }
}

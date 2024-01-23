// Importa la función createStore desde la librería Redux
import { createStore } from 'redux';

// Define un reductor (Reducer)
const reducer = (state = 0, action) => {
  // Switch basado en el tipo de acción
  switch (action.type) {
    // Si la acción es 'increment', incrementa el estado en 1
    case 'increment':
      return state + 1;
    // Si la acción es 'decrement', decrementa el estado en 1
    case 'decrement':
      return state - 1;
    // Si la acción no coincide con ninguno de los casos anteriores, retorna el estado sin cambios
    default:
      return state;
  }
};

// Crea un store utilizando el reductor
const store = createStore(reducer);

// Define una función de callback que imprime el estado actual del store en la consola
const callback = () => console.log(store.getState());

// Se suscribe la función de callback al store, para que se ejecute cada vez que haya un cambio en el estado
store.subscribe(callback);

// Realiza una llamada inicial a la función de callback para imprimir el estado inicial del store
callback();

// Despacha una acción de tipo 'increment' al store
store.dispatch({ type: 'increment' });

// Despacha una acción de tipo 'decrement' al store
store.dispatch({ type: 'decrement' });

// console.log( { store });

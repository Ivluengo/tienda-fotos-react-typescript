import {createContext, useContext, useEffect, useReducer} from 'react';
import fotosReducer, { Action, State } from './../reducers/fotosReducer';
import getFotos from './../helpers/getFotos';

//Tipado que tendrá nuestro contexto, enviaremos nuestro "state" global y nuestro "dispatch" para modificar ese "state"
type FotosContextData = [ 
    state: State, 
    dispatch: React.Dispatch<Action> 
];

//Estado inicial de nuestro useReducer
const initialFotos = [{id: 0, url: '', esFavorita: false, enCarrito: false }];

const FotosContext = createContext({} as FotosContextData);

//Creamos un componente que usaremos de Provider de nuestro contexto
const FotosProvider: React.FC = ( {children} ) => {

    //Configuramos nuestro useReducer para poder enviar "state" y "dispatch" a través del contexto
    const [state, dispatch] = useReducer(fotosReducer, initialFotos);

    //Pedimos al servidor lo que queramos, en nuestro caso las fotos
    useEffect(()=> {
        //Hemos utilizado un helper para hacer ese fetch
        getFotos().then(fotos => {
            //Cuando recibimos las fotos  las enviamos a nuestro estado global
            dispatch({type: 'fetch fotos', payload: fotos})
        });
    }, [/* Al no poner nada aquí solo se ejecutará al montar el componente y nunca más */])


    return (
        //Tenemos que llamar al "Provider" dentro de nuestro contexto para enviar dentro de "value" lo que queramos
        <FotosContext.Provider value={[state, dispatch]}>
            {children}
        </FotosContext.Provider>
    )
}

//He creado dos custom hooks para usar el contexto que tenemos y recibir directamente nuestro "state" o nuestro "dispatch"
const useFotosState = () => useContext(FotosContext)[0];
const useFotosDispatch = () => useContext(FotosContext)[1];

export {FotosProvider, useFotosState, useFotosDispatch};
export default FotosContext;

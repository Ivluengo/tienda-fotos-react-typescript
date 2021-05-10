interface Foto {
    id: number;
    url: string;
    esFavorita: boolean;
    enCarrito: boolean;
}
type State = Foto[];
//Usando type podemos darle varias opciones de "acciones" así nos ayudará a no equivocarnos después.
type Action = 
    | { type: 'fetch fotos', payload: Foto[] } 
    | {type: 'addToFavoritas', payload: number}
    | {type: 'toggleCarrito', payload: number}

//Nuestro reducer tiene que ser una FUNCIÓN PURA:
    //Nunca afecta a nada del exterior
    //Pasándole siempre los mismos datos devolverá exactamente el mismo resultado. (Ej: No podemos usar metodos como random() en su interior)
const fotosReducer = (state:State, action: Action) => {
    //Hay que vigilar muchísimo que siempre se devuelva un estado completamente nuevo, no modificar el existente.
    switch(action.type){
        case 'addToFavoritas':{
            const newArray = state.map(foto => {
                if(foto.id === action.payload) {
                    return {...foto, esFavorita: !foto.esFavorita}
                } else{
                    return foto;
                }
            })
            return newArray;
        }
        case 'toggleCarrito':{
            const newArray = state.map(foto => {
                if(foto.id === action.payload) {
                    return {...foto, enCarrito: !foto.enCarrito}
                } else{
                    return foto;
                }
            })
            return newArray;
        }
        case 'fetch fotos':
            return action.payload;                           
        
        default:
            return state;
    }

}

export type { State, Action, Foto };
export default fotosReducer;
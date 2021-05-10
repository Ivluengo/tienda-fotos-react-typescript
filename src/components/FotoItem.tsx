import { useState } from "react";
//Este paquete se usa para poder hacer link hacia una parte de una página usando el típico "#anchor", no funciona de forma nativa.
import {HashLink} from 'react-router-hash-link';

import { useFotosDispatch } from "../contexts/FotosContext";
import {Foto} from "../reducers/fotosReducer";

import styles from './FotoItem.module.scss';

interface FotoItemProps {
    foto: Foto;
}

const FotoItem: React.FC<FotoItemProps> = ({foto}) => {
    const dispatch = useFotosDispatch();
    const [hover, setHover] = useState(false)

    //Funciones que retornan un icono o otro dependiendo de si está marcado, en hover, etc.
    const heartIcon = () => {
        if(foto.esFavorita) {
            return <i 
            onClick={() => dispatch({type: 'addToFavoritas', payload: foto.id})}
            className={`fas fa-heart ${styles.heart}`}></i>
        }else if (hover) {
            return <i 
            onClick={() => dispatch({type: 'addToFavoritas', payload: foto.id})}
            className={`far fa-heart ${styles.heart}`}></i>
        }
    }
    const cartIcon = () => {
        if(foto.enCarrito) {
            return <i 
            onClick={() => dispatch({type: 'toggleCarrito', payload: foto.id})}
            className={`fas fa-shopping-cart ${styles.iconCart}`}></i>
        }else if (hover) {
            return <i 
            onClick={() => dispatch({type: 'toggleCarrito', payload: foto.id})}
            className={`fas fa-plus-circle ${styles.iconCart}`}></i>
        }
    }

    return (
        <>  
            <div className={styles.fotoItem}   
                //vigilamos si hacemos hover en el div de la imagen poniendo "true" cuando entramos y "false" cuando salimos 
                onMouseEnter={ ()=>setHover(true) }
                onMouseLeave={ ()=>setHover(false) }
            >       
                {/* Imprimimos los iconos según el estado a través de sus funciones */}
                {heartIcon()}
                {cartIcon()}

                {/* Lo usamos de la misma forma que Link, tiene la prop smooth, entre otras, que se usa si quieres suavizar el scroll. */}
                <HashLink smooth to={`/productos/${foto.id}#detalle`} >
                    <img                    
                        className={styles.fotoImg}
                        src={foto.url}
                        alt={foto.url}
                        />
                </HashLink>
            </div>
        </>
    )
}

export default FotoItem;
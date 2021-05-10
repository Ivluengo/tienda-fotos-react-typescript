import { useEffect, useState } from "react";
import { useFotosDispatch, useFotosState } from "../contexts/FotosContext";
import styles from './Carrito.module.scss';

const Carrito: React.FC = () => {

    const fotos = useFotosState();
    const dispatch = useFotosDispatch();
    const carritoFotos = fotos.filter(foto => foto.enCarrito );
    
    //Estado que controlará el precio total de todos los elementos sumados
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        //En este caso he puesto el mismo precio a todo pero eso debería llegar de forma dinámica
        setTotal(carritoFotos.length * 3.99);
    },[carritoFotos.length])

    return (
        <div>
            <h1>Carrito de fotos</h1>
                {
                carritoFotos.map((foto)=> (
                    <div key={foto.id} className={styles.carritoImgItem}>
                        <img src={foto.url} alt={foto.url}/>
                        <h4>Precio: 3.99€</h4>
                        <button
                            onClick={() => dispatch({type: 'toggleCarrito', payload: foto.id})}
                        >-</button>
                    </div>
                ))
                }
            
            <h3>Total = {total}</h3>
        </div>
    )
}

export default Carrito

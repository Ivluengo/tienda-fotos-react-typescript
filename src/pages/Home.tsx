import { useLocation } from 'react-router';

//Importamos styled-components
import styled from 'styled-components';
//Importamos los estilos con el formato CSS Modules
import styles from '../index.module.scss';

const Home: React.FC = () => {

    //Muestra simple de cómo usamos "useLocation()" para poder tener acceso a los datos dentro de una query
    //Dentro de "location.search" encontramos el string de toda la query
    const location = useLocation();
    
    //Usando URLSearchParams podemos capturar cada dato o hacer otras cosas.
    const queryParams = new URLSearchParams(location.search)
    console.log(queryParams.get('id'));
    
    return (
        <>
            <h1 className={styles.titulo}>
            ¡Bienvenid@ a mi homepage! 
            </h1>
            <Parrafo>Este es un <span>subtitulo</span> creado con Styled Components</Parrafo>
        </>
    )
}

//Ejemplo de un styled component con un color dinámico
const red = '#ff5555';
//En este caso tenemos que pasar  un tipado porque preguntamos acerca de sus props
interface ParrafoProps {
    colorBlue?: boolean;
}
const Parrafo = styled.p<ParrafoProps>`
font-size: 1.2em;
color: ${red};
& span {
    font-weight: bold;
        /** Styled Components puede utilizar las props como una función anónima que recibe estas props en su primer parámetro **/
        color: ${props => props.colorBlue ? 'blue' : red }
    }
`;

export default Home;
import { useHistory } from "react-router-dom";

const Pagina404: React.FC = () => {
    //useHistory nos da muchas posibilidades a lahora de usar  la "History API". Podemos tirar atrás, adelante, pasar datos, etc.
    const history = useHistory();    

    setTimeout(()=>{
        //En este caso "push" nos lleva a esta dirección manteniendo la historia anterior para poder volver.
        history.push('/');
    }, 3000)

    return (
        <div>
            <h1>Te has confundido y esta página no existe</h1>
            <h4>En unos segundos vas a ser redirigido a nuestra página de inicio</h4>
        </div>
    )
}

export default Pagina404;
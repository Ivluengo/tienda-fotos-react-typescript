import * as ReactDOM from 'react-dom';
//podemos usar BrowserRouter directamente pero en muchos sitios se crea el alias de Router para simplificar
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

//Nuestro Router siempre tiene que envolver aquello que queramos que pueda usar Route, Switch, etc.
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

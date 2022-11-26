import './App.scss';
import './assets/styles/index.scss'
import {Introducing} from "./components/pages/home/introducing";
import {ProductsList} from "./components/pages/home/products-list";


function App() {
    return (
        <div className="App ">
            <Introducing/>
            <ProductsList/>
        </div>
    );
}

export default App;

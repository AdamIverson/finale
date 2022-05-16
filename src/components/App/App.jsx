import './App.css';
import Test from '../Test/Test';
import store from '../../redux/store';


function App() {
  return (
    <div className="App">
      <Test store={store}/>
    </div>
  );
}

export default App;
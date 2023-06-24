import './App.css';
import bg from './bg.jpg';
import GetRandomActivity from './components/Get';
import GetRandomActivityByType from './components/GetByType';

function App() {
  return (
    <div className='App'>
      <img className='bg' src={ bg } alt='Background' />
      <div className='container'>
        <h2>This app helps you find things to do when you're bored! <br />Just press the button!</h2>

        <GetRandomActivity />
        <GetRandomActivityByType />
      </div>
    </div>
  );
}
export default App;

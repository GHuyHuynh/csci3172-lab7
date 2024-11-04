import './App.css';
import porsche from './assets/porsche.png';

function App() {
  return (
    <div className="App">
      <div className="relative h-screen">
        <img src={porsche} alt="Porsche 911 GT3 RS" className="w-screen h-screen object-cover opacity-75" />
        <div className='absolute bottom-0 w-screen h-1/3'>
          <div className="h-full flex justify-center items-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold">Porsche 911 GT3 RS</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
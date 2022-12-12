import './App.css';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUTils" aboutText="About Utils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );

}

export default App;
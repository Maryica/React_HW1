
import './App.css';
import Message from './components/Message';


function App() {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Intl.DateTimeFormat('en-US', options).format(date);
  return (
    <div className="App">
      <h1 className="header">Homework #1</h1>
      <h2>Сегодня: <span><Message
        text={today} /></span>
      </h2>
    </div >
  );
}

export default App;
import './App.css';
import Link from './link';
import { useHistory } from "react-router-dom";

function App() {
  let url= '';

  const lista = [
    {
      nameLink: 'batata',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },{
      nameLink: 'teste',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },{
      nameLink: 'dado',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },{
      nameLink: 'casa ',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },{
      nameLink: 'rafsbernardes',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },{
      nameLink: 'annafavero',
      url:'https://www.luiztools.com.br/post/tutorial-de-reactjs-com-node-js-4/'
    },
  ]

  const data = {nameLink:'aaaaaa', url:'https://stackoverflow.com/questions/43666757/equivalent-in-react-of-ngfor-in-angular-2'};

  
  return (
    <div className="App">
      <header>
        <nav className="main-header navbar navbar-light justify-content-center ">
          <p className="title-header navbar-brand ">Go Links</p>
        </nav>
      </header>
      <section className="main-data">
        <Link data={data} />
        {lista.map(item => <Link data={item}/>)}
        <div className="fixed-action-btn">
          <a onClick={goToAddLink} className="btn btn-success btn-floating btn-lg">
            <i className="fas fa-plus fa-2x"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

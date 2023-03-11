import Balls from "../Balls/Balls";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";


function App() {
  return (
    <div className='page-background'>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <Balls />
      </div>
    </div>
  );
}

export default App;

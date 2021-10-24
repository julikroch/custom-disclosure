import Image from './components/Image';
import Faq from './components/Faq';
import Atribution from './components/Attribution';

function App() {
  return (
    <div className='container'>
      <div className='faq'>
        <Image />
        <Faq />
      </div>
      <Atribution />
    </div>
  );
}

export default App;

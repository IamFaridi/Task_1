import './Utils.css';
import './Styles.css';
import Carousel from './components/Carousel';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Section className="bg-light-blue">Section 1</Section>
      <Section className="bg-light-green">Section 2</Section>
      <Carousel/>
      <Section className="bg-light-pink">Section 3</Section>
    </div>
  );
}

export default App;

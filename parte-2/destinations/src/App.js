import './App.css';
import Content from './components/Content'
import Form from './components/Form'
import PersonalData from './components/PersonalData'
import Destinations from './components/Destinations'

function App() {
  return (
    <div className="App">
      <Content>
        <Form>
          <PersonalData />
          <Destinations />
        </Form>
      </Content>
    </div>
  );
}

export default App;

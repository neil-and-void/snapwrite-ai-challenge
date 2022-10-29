import './App.css';
import ImageUpload from './Components/ImageUpload';
import TextBox from './Components/TextBox';

function App() {
  return (
    <div className="App">
      <div className="imageUploadWrapper">
        <ImageUpload />
      </div>
      <div className="textBoxWrapper">
        <TextBox storageKey="TEXT_BOX_1" />
        <TextBox storageKey="TEXT_BOX_2" />
      </div>
    </div>
  );
}

export default App;

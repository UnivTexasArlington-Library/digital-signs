import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { fetchDrupalData } from './util/http';
import { useEffect, useState} from "react";

function App() {
  const [imageURLs, setImageURLs] = useState()
  useEffect(() => {
    async function getDrupalData() {
      const drupalData = await fetchDrupalData();
      console.log(drupalData)
      setImageURLs(drupalData)
    }
    getDrupalData();
  }, []);
  return (
    <div className="App">
      {imageURLs && <Carousel interval={8000}>{imageURLs.map((imageURL) => (
           <Carousel.Item>
           <img
             style={{width: '100%', height: '100%'}}
             src={imageURL}
           />
         </Carousel.Item>
      ))}</Carousel>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { fetchDrupalData } from './util/http';
import { useEffect, useState} from "react";
import { useQuery, useQueryClient} from 'react-query'



function App() {
  const [imageURLs, setImageURLs] = useState()
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery('todos', fetchDrupalData)
  useEffect(() => {
  setInterval(() => {
    window.location.reload(true)
  }, 
    120000)
  },[])

  // useEffect(() => {
  //   const clearCacheData = () => {
  //     caches.keys().then((names) => {
  //       names.forEach((name) => {
  //         caches.delete(name);
  //       });
  //     });
  //     console.log('Complete Cache Cleared')
  //   };
  //   async function getDrupalData() {
  //     const drupalData = await fetchDrupalData();
  //     console.log(drupalData)
  //     setImageURLs(drupalData)
  //   }
  //   getDrupalData();
  //   const intervalId = setInterval(() => {
  //     clearCacheData()
  //     // getDrupalData(); // Fetch data every 2 minutes
  //     window.location.reload(1)
  //   }, 120000);
  //   return () => clearInterval(intervalId);
  // }, []);

  console.log(data)

  return (
    <div className="App">
      {data && <Carousel interval={8000}>{data.map((imageURL) => (
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

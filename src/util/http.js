import axios from "axios";
import { getDigitalSignsURLs } from "./getDigitalSignsURLs";
import { getDigitalSignsImages } from "./getDigitalSignsImages";

export async function fetchDrupalData() {
    const response = await axios
      .get(
        `${
         process.env.REACT_APP_DRUPAL_API
        }`,
        {
          headers: {
            "Content-Type": " text/plain",
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    //   console.log(response)
      const digitalSignsData = response.data
      let digitalSigns = [];
      const digitalSignsURLs = await getDigitalSignsURLs(digitalSignsData)
      // console.log("digitalSignsURLS", digitalSignsURLs)
      digitalSigns = await getDigitalSignsImages(digitalSignsURLs)
      // console.log("digitalSignsImages", digitalSigns)
      return digitalSigns
  }
import axios from "axios";

export async function getDigitalSignsImages(digitalSignsURLs) {
    const imageURLs = []
    for (let i = 0; i < digitalSignsURLs.length; i++) {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/${digitalSignsURLs[i]}`);
        const imageData = response.data
        // console.log(`https://libraries.uta.edu/${imageData.data.attributes.uri.url}`)
        const imageURL = `https://libraries.uta.edu/${imageData.data.attributes.uri.url}`
        imageURLs.push(imageURL)
        // const imageURL = digitalSignsData.data[i].relationships.field_digital_signs_image.links.related.href
        // imageURLs.push(imageURL)
//    console.log("digitalSigns", digitalSignsData.data[i].relationships.field_digital_signs_image.links.related.href)
      }
      return imageURLs
} 

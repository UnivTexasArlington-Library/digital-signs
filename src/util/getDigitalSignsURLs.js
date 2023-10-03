
// Retrieves blog data from the Drupal JSON:API and creates and array of blog post objects constaining the following properties:{keyId,id, title, created, bodyTextIds, bodyText, blogImageLink,blogTeaser}
export async function getDigitalSignsURLs(digitalSignsData) {
    console.log("digitalSignsData", digitalSignsData)
    const imageURLs = []
    for (let i = 0; i < digitalSignsData.data.length; i++) {
        const status = digitalSignsData.data[i].attributes.status
        console.log(status)
        const imageURL = digitalSignsData.data[i].relationships.field_digital_signs_image.links.related.href
        imageURLs.push(imageURL)
//    console.log("digitalSigns", digitalSignsData.data[i].relationships.field_digital_signs_image.links.related.href)

      }
  return imageURLs
}

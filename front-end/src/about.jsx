import { useEffect, useState } from 'react'



function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(res => res.json())
      .then(data => setAbout(data))
  }, [])
    if (about == null) {
    return <p>Loading...</p>
  }

    return(
        <div>

        <p>about me</p>

        <p>{about.about_me}</p>
        <p>{about.about_photo}</p>

        <img src={about.photo_url}/>

        </div>
        


    )
//about_me: "I am just a normal student wants to finish this hw",
      //about_photo: 'I dont want to upload my human photo so here is my discord profile photo',
     // photo_url: "/dis.png",
}

export default About
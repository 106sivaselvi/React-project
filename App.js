import React from 'react';
import Photo from './Photo.js';
import './App.css';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
class App extends React.Component{
render() {
return (<div> <div className="first"><h2><em>PHOTO CARD</em></h2></div>
              <div>
              <Photo pic={pic2} name="Rs.500" links="https://www.google.com/search?q=dog+pics&oq=dog+pics&aqs=chrome..69i57j0l5.2559j0j7&sourceid=chrome&ie=UTF-8"/>
			  <Photo pic={pic3} name="Rs.600" links="https://www.google.com/search?q=butterfly+pics&oq=butterfly+pics&aqs=chrome..69i57j0l5.4351j0j9&sourceid=chrome&ie=UTF-8"/>
			  <Photo pic={pic4} name="Rs.700" links={"https://www.google.com/search?q=baby+pics&oq=baby+pics&aqs=chrome..69i57j0l5.2319j0j9&sourceid=chrome&ie=UTF-8"}/>
			  <Photo pic={pic5} name="Rs.800" links={"https://www.google.com/search?q=dog+pics&oq=dog+pics&aqs=chrome..69i57j0l5.2559j0j7&sourceid=chrome&ie=UTF-8"}/>
			  <Photo pic={pic6} name="Rs.900" links={"https://www.google.com/search?q=stadium+pics&oq=stadium+pics&aqs=chrome..69i57j0l5.3551j0j9&sourceid=chrome&ie=UTF-8"}/>
			  <Photo pic={pic7} name="Rs.1200" links={"https://www.google.com/search?q=beach+images&oq=beach+images&aqs=chrome..69i57j0l5.4079j0j7&sourceid=chrome&ie=UTF-8"}/>
			  <Photo pic={pic8} name="Rs.1000" links={"https://www.google.com/search?q=seasons+images&oq=seasons+images&aqs=chrome..69i57j0l5.4576j0j7&sourceid=chrome&ie=UTF-8"}/>
			  </div></div>
			)
}
}
export default App;


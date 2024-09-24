import React from 'react';
import ReactDOM from 'react-dom/client';
import Badges from "./components/badges/Badges";
import Banners from "./components/banners/Banners";
import Cards from "./components/cards/Cards";
import Testimonials from "./components/testimonials/Testimonials"

function App() {
  return (

    <div>
      <h1>Square Badges</h1>
      <Badges color="green" shape="square">Welcome</Badges>
      <Badges color="indigo" shape="square">Welcome</Badges>
      <Badges color="red" shape="square">Welcome</Badges>
      <Badges color="yellow" shape="square">Welcome</Badges>
      <Badges color="blue" shape="square">Welcome</Badges>
      <Badges color="pink" shape="square">Welcome</Badges>
    
      <br />
      <h1>Pill Badges</h1>
      <Badges color="green" shape="pill">You</Badges>
      <Badges color="indigo" shape="pill">Can Add</Badges>
      <Badges color="red" shape="pill">Any Text</Badges>
      <Badges color="yellow" shape="pill">As Direct</Badges>
      <Badges color="blue" shape="pill">Children of</Badges>
      <Badges color="pink" shape="pill">The Badge</Badges>
    
      <br />
      <h1>Multiline Banners</h1>
    
      <Banners 
        variant="success" 
        line="multiline" 
        topText="Congratulations!" 
        botText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banners 
        variant="warning" 
        line="multiline" 
        topText="Attention!" 
        botText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banners 
        variant="error" 
        line="multiline" 
        topText="Any text passed as the prop 'topText' will appear here" 
        botText="and likewise, any text passed as 'botText' will appear here"
      />
      <Banners 
        variant="neutral" 
        line="multiline" 
        topText="Thanks for taking a look" 
        botText="Have a nice day! GL coding!"
      />
    
      <br />
      <h1>Single-Line Banners</h1>
    
      <Banners variant="success" line="single">Congratulations!</Banners>
      <Banners variant="warning" line="single">Attention</Banners>
      <Banners variant="error" line="single">There is a problem with your application</Banners>
      <Banners variant="neutral" line="single">Update Available</Banners>
      
      <br />
      <h1>Cards</h1>
    
      <Cards 
        variant="cloud" 
        topText="Easy Development" 
        botText="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
      <Cards 
        variant="ball" 
        topText="Easy as ever to Reuse" 
        botText="Simply give the Card topText and botText props, with a string value"
      />
      <Cards 
        variant="city" 
        topText="Built in Variants" 
        botText="As of right now the built-in variants include: `cloud`, `city`, and `ball`. If no variant is given, it defaults to an angry face"
      />
      <Cards />
      
      <br />
      <h1>Testimonials</h1>
      <Testimonials 
      imgUrl="/images/ptrt.jpg" 
      altText="Man in deep thought"
      name="Joe Schmoe"
      testText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 
      occupation="Dev"
      />
      
      <Testimonials 
      testText="if no image is provided you will recieve this styled testimonial, if no name or occupation is provided you it will return Anonymous and No Data respectively" 
      />
    
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);






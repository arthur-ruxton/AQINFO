# :globe_with_meridians: [AQINFO](https://aqinfo.netlify.app/) - air quality information

### Timeframe: 3 days

<details>
  <summary>Goals :dart:</summary>
  <p>In less than a week, build a React app with API requests and data visualisation.</p>
</details>

<details>
  <summary>Overview :bulb:</summary>
  <p>
    Select a location, anywhere in the world, using pin-drop on a map or satellite image. You can then view a data visualisation about the air quality in your           chosen location - this comes in the form of a colour coded bar chart accompanied by a short description of the air quality. You can also view weather warnings       for the area you’ve chosen - at the moment these are written in English whenever possible.
  </p>
  <p>
    The site also subtly prompts the user to donate to one of six environmental charities.
  </p>
</details>

<details>
  <summary>Tech :gear:</summary>
    <h3>SCSS - 13.1 % :</h3>
    <ul>
      <li>Customising Plotly.Js components and bootstrap components.</li>
      <li>Positioning, fonts & colouring.</li>
      <li>Somewhat responsive design (not fully optimised for phone use).</li>
    </ul>
    <h3>Plotly.js & React.js / React-Bootstrap - 86.9% :</h3>
    <ul>
      <li>All of the sites content, any little features included</li>
      <li>Making a request to Google maps api using pin drop on selected location, storing the latitude and longitude as stateful variables.</li>
      <li>Passing those coordinates as part of two other separate requests to OpenWeatherMap API - for air quality data and weather warnings.</li>
      <li>Plotting the data onto a bar chart which is literally coloured using the response data (achieved with some fairly simple conditional logic)</li>
    </ul>
</details>

<details>
  <summary>Approach :desktop_computer:</summary>
  <div>
    <h3>Beginning - planning :</h3>
    <p>
      I knew I wanted to create a dynamic data visualisation site - So a user could search a location and get visual data back. After doing some research I landed         on Google Maps Javascript Api and OpenWeatherMap Api for requesting data. My brother had done work with an open source graphing library called Plotly.js and         recommended it. 
    </p>
    <p>I started a trello board for my project planning as usual, with ‘to-do’, ‘doing’ and ‘done lists’ + wireframes & pseudo-code.</p>
    <h5>Middle - bulk of the project :</h5>
    <p>As it turns out the Google maps JavaScript api involves typescript which I was unfamiliar with, this had to be altered to work in a React app.</p>
    <p>
      Fairly quickly I was able to get coordinates from the mapp and store them as stateful variables, then make requests to OpenWeatherMap for the relevant data.
    </p>
    <h5>End - polishing & testing :</h5>
    <p>
      It was then just a case of plotting the data on a bar chart and bringing the UX up to scratch. Working with plotly.js was challenging at times - there are not       many examples of React implementation online and the components are difficult to customise in some ways. 
    </p>
  </div>
  <div>
    <h3>Building features</h3>
    <h4>Map:</h4>
    <p>
      The Google maps JS api involves typescript which I was unfamiliar with, this boilerplate had to be altered to work in my React app - luckily my brother             could advise me on this.
    </p>
    <p>
      Out of the box, this feature will allow a user to drop a pin on as many locations as they want, the pins will all remain on screen - this isn’t what I wanted,       I had to alter it so a user could only drop one pin at a time - this is very simple to do. 
    </p>
    <p>
      I use a dotenv file to store my API keys, then process them and use them where needed:
    </p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630205-abfd32e2-8f34-494f-a5bb-2e97e1567182.png" /> <br>
    <p><em>Using a click handler and a stateful variable you can store the lat & lng coordinates of the location a user has chosen -</em></p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630257-57b9ad83-603f-4305-a13f-175ca150e62e.png" />
    <img src="https://user-images.githubusercontent.com/89402596/149630280-49fa07f6-080b-4fdf-ba30-6482aeea2e1a.png" /> <br>
    <p>You could pass these coordinates as props to any component of your choosing, I’m sure there are many interesting things you could do with this.</p>
    <p>
      Later, <em>I pass the coordinates as props to the component</em> that builds my air quality index bar chart (<Plotter>) and the component that renders local         weather warnings (<Warning>) - as you can see this component is <em>rendered conditionally</em>, it’s only visible after a location has been clicked on:
    </p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630356-9497e545-851d-4a7d-9f0a-1c5644963066.png" /> <br>
    <h4>Air Quality Index - Bar chart:</h4>
    <p>
      The <em>Plotly.Js graphing</em> library has good documentation. I started by simply implementing an instance of their basic bar chart and feeding it some           dummy-data.
    </p>
    <p>I then request the actual data from open-weather-map-api that I want to display.</p>
    <p>
      This is a <em>simple request: pass in the coordinates retrieved from the map’s click handler function. – I store the response data in stateful variables that       are updated whenever a new request is made</em> - This all happens within a <em>UseEffect hook</em> so the request is only made if the location changes: 
    </p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630538-ed865a16-35f8-4ea1-9c58-36f43349f981.png" /> <br>
    <p>
     At this point a user can select a location on a map, then a request is made to the open-weather-map-api for the air quality data of that chosen location.            <em>Pass the data into the bar chart</em> instance, labelling it appropriately.
    </p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630819-1be3d0fb-ed46-46b4-8bde-7d614fda11b3.png" /> <br>
    <p>
      I also <em>use conditional logic to colour-code the bar chart based on the air-quality - this makes the data visualisations more impactful and dynamic.</em>
    </p>
    <img src="https://user-images.githubusercontent.com/89402596/149630902-96ba51fd-ee24-4c96-89af-e77020bb48f1.png" /> <br>
    <p>Plotly charts can be configured in various ways:</p> <br>
    <img src="https://user-images.githubusercontent.com/89402596/149630940-874a3b72-a4c9-47d1-8669-8278419eeb18.png" /> <br>
    <p>
      <em>The Weather Warnings component was made in much the same way - simply passing the coordinates retrieved from the users click event as props then using           them in an API request and displaying the response data.</em>
    <p>
 </div>
</details>
  
<details>
  <summary>Visuals :art:</summary>
  <p>Landing page</p>
  <img src=https://user-images.githubusercontent.com/89402596/148824744-aaed67af-a7df-452f-b99a-beb7b4a0cb5a.png />
  <p>AQI data visualisatioin</p>
  <img src=https://user-images.githubusercontent.com/89402596/148824903-9341ca48-db04-4cce-ae06-b76c4d5f1231.png />
  <p>Weather warning</p>
  <img src=https://user-images.githubusercontent.com/89402596/148825012-d9e82454-23be-4d9f-b69e-a20dd98404d8.png />
  <p>Donate to charity</p>
  <img src=https://user-images.githubusercontent.com/89402596/148825088-d0e95f40-406e-4325-b6af-15c15234f2ff.png />
</details>

<details>
  <summary>Key learnings :open_book:</summary>
  <ul>
    <li>Plotly.js - a great library for creating dynamic data visualisations - getting practice implementing it with React and customising their components.</li>
    <li>Google maps API, useful for all kinds of applications.</li>
    <li>Making requests to one API using data returned from another.</li>
  </ul>
</details>

<details>
  <summary>Challenges & Wins :chart_with_upwards_trend:</summary>
  <ul>
    <li>Converting from typescript to JavaScript</li>
    <li>Customising plotly components & React app implementation</li>
    <li>Implementing responsive design</li>
  </ul>
</details>

<details>
  <summary>Possible future improvements :flight_departure:</summary>
  <ul>
    <li>More visually interesting / impactful data visualisation</li>
    <li>More features (request other kinds of data relevant to the subject) </li>
    <li>Fully responsive - get it working properly on phone screens</li>
  </ul>
</details>

<details>
  <summary>Bugs :bug:</summary>
  <p>The App is almost fully responsive but the title of the bar chart does not fit on the screen as intended.</p>
</details>

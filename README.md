# AQINFO - air quality information

### Aim
In less than a week, build a React app with API requests and data visualisation.

<details>
  <summary>Overview</summary>
  <p>
    Select a location, anywhere in the world, using pin-drop on a map or satellite image. You can then view a data visualisation about the air quality in your           chosen location - this comes in the form of a colour coded bar chart accompanied by a short description of the air quality. You can also view weather warnings       for the area you’ve chosen - at the moment these are written in English whenever possible.
  </p>
  <p>
    The site also subtly prompts the user to donate to one of six environmental charities.
  </p>
</details>

<details>
  <summary>Tech</summary>
  <ul>
    <li>
      <details>
        <summary>SCSS - 13.1 % :</summary>
        <ul>
          <li>Customising Plotly.Js components and bootstrap components.</li>
          <li>Positioning, fonts & colouring.</li>
          <li>Somewhat responsive design (not fully optimised for phone use).</li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Plotly.js & React.js / React-Bootstrap - 86.9% :</summary>
        <ul>
          <li>All of the sites content, any little features included</li>
          <li>Making a request to Google maps api using pin drop on selected location, storing the latitude and longitude as stateful variables.</li>
          <li>Passing those coordinates as part of two other separate requests to OpenWeatherMap API - for air quality data and weather warnings.</li>
          <li>Plotting the data onto a bar chart which is literally coloured using the response data (achieved with some fairly simple conditional logic)</li>
        </ul>
      </details>
    </li>
  </ul>
</details>

<details>
  <summary>Approach</summary>
  <h5>Beginning - planning :</h5>
  <p>
    I knew I wanted to create a dynamic data visualisation site - So a user could search a location and get visual data back. After doing some research I landed on     Google Maps Javascript Api and OpenWeatherMap Api for requesting data. My brother had done work with an open source graphing library called Plotly.js and           recommended it. 
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
</details>

<details>
  <summary>Visuals</summary>
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
  <summary>Key learnings:</summary>
  <ul>
    <li>Plotly.js - a great library for creating dynamic data visualisations - getting practice implementing it with React and customising their components.</li>
    <li>Google maps API, useful for all kinds of applications.</li>
    <li>Making requests to one API using data returned from another.</li>
  </ul>
</details>

<details>
  <summary>Challenges:</summary>
  <ul>
    <li>Converting from typescript to JavaScript</li>
    <li>Customising plotly components & React app implementation</li>
    <li>Implementing responsive design</li>
  </ul>
</details>

<details>
  <summary>Possible future improvements:</summary>
  <ul>
    <li>More visually interesting / impactful data visualisation</li>
    <li>More features (request other kinds of data relevant to the subject) </li>
    <li>Fully responsive - get it working properly on phone screens</li>
  </ul>
</details>

<details>
  <summary>Bugs:</summary>
  <p>The App is almost fully responsive but the title of the bar chart does not fit on the screen as intended.</p>
</details>

import logo from './logo.svg';
import './App.css';

function App() {
return(
<>
<Header />
<Profile />
<Footer />
<Favorites />
</>
  );
}
const Header = () => {
  return (
  <>
  <h1>Scott, Kyle, and Suris App</h1>
  </>  
  )
}
const Profile = () => {
return <body>
<h4>Scott is 33 and from White House, Tennessee
Suri is 22 and from Arecibo, Puerto Rico
Kyle is 27 and from Austin, Texas
</h4>
</body>

}

const Footer = () => {
  return <footer>
    Charlie 2023 cohort
  </footer> 
}

const Favorites = () => {
  return<ol>
      <p>Favorite TV Show</p>
    <li>Kyles fsvorite show is Game of Thrones</li>
    <li>Suris favorite show is Game of Thrones</li>
    <li>Scotts favorite show is Impractical Jokers</li>

    <div>

    </div>
    <ol>
    <p>Favorite songs</p>
    <li>Kyles favorite song is Keep Rolling by King George </li>
    <li>Suris favorite song is Paramedic by Kendrick Lamar</li>
    <li>Scotts favorite song is Thunderstruck by Leo</li>
    </ol>
  <div>

  </div>
  <ol>
    <p> Favorite Taco Shops</p>
    <li>Kyles favorite taco shop is Tacos El Gordo in San Diego</li>
    <li>Suris favorite taco shop is Taqueria al Gusto</li>
    <li>Scotts favorite taco shop is Taquerina Azteca in Nashville</li>
  </ol>
  </ol>
}

export default App;

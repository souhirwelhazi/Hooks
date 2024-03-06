import React , {useState, useEffect}from 'react';
import NavBar from './components/NavBar/NavBar'
import Filter from './components/Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
function App()
  {
    const [ratingChange,setRatingChange]=useState(1);
     const[SearchInput,setSearchInput] = useState("")
     const [newMovie, setNewMovie] = useState({});
     const [ movieData, setMovieData] = useState([
  {
  id: Math.random (),
  Rating : 5 ,
  title: "Conjuring 3",
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2020/07/the-con-696x431.jpg',
  description : "Conjuring 3 follows the terrifying investigations of Ed and Lorraine Warren as they confront a murderer claiming to have been possessed by a demonic entity, delving into the darkest corners of the supernatural to unravel the truth and put an end to the evil",
trailer : "https://www.youtube.com/embed/h9Q4zZS2v1k?si=PcZByzZE8Ee5zMpi"
},
{
  id: Math.random (),
  Rating : 3,
  title: "Disney +",
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2023/01/shutterstock_1492841441-485x360.jpg',
  description :"Experience the eerie world of 1980s Hawkins, Indiana, as a group of kids confronts supernatural forces, government secrets, and the mysterious Upside Down. Their journey reveals dark truths, testing their friendships and reality itself.",
  trailer :"https://www.youtube.com/embed/mB5efZKWIrU?si=ygM3GLyZolUW0T8-"
},
 {
  id: Math.random (),
  Rating : 4,
  title:"Stranger Things" ,
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/06/Stranger-Things-en-passe-de-devenir-la-serie-la-plus-regardee-sur-Netflix-485x360.jpg',
  description :"Embark on a chilling journey through 1980s Hawkins, Indiana, with a group of kids who stumble upon supernatural occurrences, government experiments, and the enigmatic Upside Down. As they unravel mysteries, their bonds are tested amidst a darkening reality. ",
  trailer : "https://www.youtube.com/embed/b9EkMc79ZSU?si=3woK08Dcugj1x5co" 
},
{
  id: Math.random (),
  Rating : 2 ,
  title:'Élite ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2021/05/IMG_0689-485x360.jpg',
  description :" is a Spanish drama series centered around the lives of students at an elite private school. As tensions rise between the wealthy and working-class students, a murder exposes dark secrets and leads to a gripping tale of betrayal and deception.",
trailer : "https://www.youtube.com/embed/QNwhAdrdwp0?si=vnKVYK8to4eDN99c" 
},
{
  id: Math.random (),
  Rating : 1,
  title:'La Casa De Papel',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2021/09/Capture-decran-2021-09-03-a-16.38.34-485x360.png',
   description :"La Casa De Papel is a Spanish TV series about a group of robbers who plan intricate heists led by a mastermind called The Professor aiming to execute perfect crimes at the Royal Mint of Spain and the Bank of Spain.",
   trailer : "https://www.youtube.com/embed/_InqQJRqGW4?si=MKrU658ymG4wWSUZ"   
},
{
  id: Math.random (),
  Rating : 1,
  title:' Lucifer ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2021/09/Capture-decran-2021-09-13-a-08.42.30-485x360.png',
  description :" Experience Lucifer a TV series where the Devil runs a Los Angeles nightclub and assists the LAPD using his supernatural abilities to solve crimes while grappling with personal and celestial challenges.",
  trailer : "https://www.youtube.com/embed/KRQb74Cr9N0?si=IvzUr7kFMvbTe9iz" 
},
{
  id: Math.random (),
  Rating : 2,
  title:' The Witcher',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2020/03/The-Witcher-Netflix2-1024x672-1-485x360.jpg',
  description :"Discover 'The Witcher,' where Geralt of Rivia, a skilled monster hunter, faces perilous creatures, political intrigue, and personal struggles. With magic and unwavering principles, Geralt confronts both external threats and inner challenges on his journey",
trailer : "https://www.youtube.com/embed/ndl1W4ltcmg?si=3fxpPdZV39UFmBHF"
},
{
  id: Math.random (),
  Rating : 3,
  title:'Place ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/07/The-Boys-Saison-4-485x360.jpg',
  description :"Experience 'Place,' a French drama by Emmanuel Mouret, set in a scenic Parisian park. The film delves into human connections, love, desire, and life's complexities through chance encounters and heartfelt conversations",
  trailer : "https://www.youtube.com/embed/WR7cc5t7tv8?si=3UM13a6SnbQwvTgY" 

},
{
  id: Math.random (),
  Rating :4 ,
  title:'Divergente ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/07/Divergente-sur-Prime-Video-485x360.jpg',
  description :"Discover Divergent a dystopian sci-fi film based on Veronica Roth's novel. Follow Tris Prior as she navigates a society divided by personality traits uncovering her own divergence and confronting a conspiracy that threatens her world.",
trailer : "https://www.youtube.com/embed/gxbwcBlj_dM?si=rcNIzjxeZcbtdhYJ" 
},
{
  id: Math.random (),
  Rating : 5,
  title:' The Boys',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/06/Prime-Video-confirme-une-saison-4-pour-la-serie-The-Boys-485x360.jpg',
  description :" is a gritty superhero series where a vigilante group, The Boys,takes on corrupt and reckless superheroes, unveiling a dark and twisted side of the superhero world.",
  trailer : "https://www.youtube.com/embed/yRwGoS-KPVE?si=XyemqQH2wlt3W_N_" 
},
{
  id: Math.random (),
  Rating :5 ,
  title:'Celebrity Hunted  ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/05/Le-casting-de-la-nouvelle-saison-de-Celebrity-Hunted-sur-Amazon-Prime-Video-nest-plus-un-secret-de-polichinelle-485x360.jpg',
  description :"is a reality TV series where famous individuals attempt to evade capture by skilled hunters, testing their wits and survival abilities in a high-stakes pursuit.",
  trailer : "https://www.youtube.com/embed/eUFmbd0R6SE?si=dhqSSCkleWQG_AVJ" 
},
{
  id: Math.random (),
  Rating : 4 ,
  title:'The Northman ',
  posterUrl:'https://www.mediacritik.com/wp-content/uploads/2022/05/The-Northman-le-film-brutal-sur-lunivers-des-Vikings-est-disponible-sur-Prime-Video-sous-certaines-conditions-485x360.jpg',
  description :"is a historical thriller film following a Viking prince's quest for vengeance after his father's murder set in medieval Scandinavia amidst treachery and supernatural elements",
trailer : "https://www.youtube.com/embed/4SH27F19dHw?si=SiOso3Kvtv9MiYc2"
},

   ]);
   const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 
 const handleSave =() => {
   setMovieData([...movieData,newMovie]);
   handleClose()
 }; 
 return (
    <>
    <NavBar
               ratingChange={ratingChange} 
               setRatingChange={setRatingChange} 
               setSearchInput={setSearchInput}
               newMovie={newMovie}
               setNewMovie={setNewMovie}
               handleSave={handleSave}
               show={show}
               handleClose={handleClose}
               setShow={setShow}
             />
      <Routes>
        <Route 
         path="/"
         element={
           <>
             
              <Filter
               ratingChange={ratingChange} 
               searchInput={SearchInput} 
               movieData={movieData} 
              />
            </>
          }
       />

       
       <Route path="/movie-details/:movieId" 
       element={<MovieDetails movieData={movieData} />}/>
     </Routes >
   </>
  );
}

export default App;

import React from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { blue } from "tailwindcss/colors";
import{useState, useRef} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import Confetti from "react-confetti";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';





export default function FavouriteProjects() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [correctAnswerChecked, setCorrectAnswerChecked] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [avanti, setAvanti] = useState("fermo");
  const [isSubmitted, setIsSubmitted] = useState(false); // new state
  const [correctAnswer, setCorrectAnswer] = useState("yes");


 
const handleOptionChange = (value) => {
  setSelectedOption(value);
  setDomanda(value);
}


const [correctness, setCorrectness] = useState({
  "yes": true,
  "no1": false,
  "no2": false
});

  const imageGroups = [
    {
      name: "Group A",
      images1: [
        userData.gruppounonotiziauno,
        userData.gruppounonotiziadue,
        userData.gruppounonotiziatre,
      ],
      images2: [
        userData.gruppounonotiziaunobad,
        userData.gruppounonotiziaduebad,
        userData.gruppounonotiziatrebad,
      ],
    },
    {
      name: "Group B",
      images1: [
        userData.gruppoduenotiziauno,
        userData.gruppoduenotiziadue,
        userData.gruppoduenotiziatre,
      ],
      images2: [
        userData.gruppoduenotiziaunobad,
        userData.gruppoduenotiziaduebad,
        userData.gruppoduenotiziatrebad,
      ],
    },
  ];

  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(1); // initial step is 1
  const [formData, setFormData] = useState({}); // initialize form data
  const [isCorrect, setIsCorrect] = useState(null);

  
  const[primo,setPrimo] = useState('3');
  const[secondo,setSecondo] = useState('3');
  const[terzo,setTerzo] = useState('3');
  const[quarto,setQuarto] = useState('un');
  const[quinto,setQuinto] = useState('un');
  const[domanda,setDomanda] = useState('un');
  const[domanda2,setDomanda2] = useState('un');
  const[domanda3,setDomanda3] = useState('un');
  const[domanda4,setDomanda4] = useState('un');

  

  const userCollectionRef = collection(db, "fisica")
  const userCollectionRef2 = collection(db, "fisicamail")

  const [position, setPosition] = useState(0);
  
  
  const [selectedGroup, setSelectedGroup] = useState(imageGroups[0]);
  const [selectedImages, setSelectedImages] = useState([
    selectedGroup.images1[0],
    selectedGroup.images1[1],
  ]);
  const [useAlternativeImages, setUseAlternativeImages] = useState(false);



  const imageStyle = {
    position: 'relative',
    width: '15vw',
    top: '50%',
    left: position,
    transform: 'translate(-50%, -50%)',
    transition: 'left 0.5s ease-in-out',
    zIndex: 2,
  };
  
  
  const imageStyle2 = {
    position: 'relative',
    width: '6vw',
    top: '20%',
    right: '0px',
    transform: 'translate(-50%, -50%)',
  
  };


  

  

  const handleSubmitavanti = (e) => {
   
        setStep(step + 1);
    }

 
    
    const handleSubmit20 = (event) => {
      event.preventDefault();
      setIsSubmitted(true); // mark the form as submitted
      if (avanti === "fermo") {
      if (domanda === "yes") {
        setIsCorrect(true);
        setShowTick(true);
       setAvanti("true") 
      } else {
        setIsCorrect(false);
        setShowTick(false);
        setAvanti("true") 
    
      }
    } else {
      setStep(step + 1);
      setAvanti("fermo") 
  
    }
    }
    

    



  
//SUBMIT TOALE
  const handleSubmit =(event) => {
  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  setShowConfetti(true);
//PRIMA PARTE mia a caso, SECONDA Parte codice
    setProgress(progress => progress + 25);
}



const handleCheckboxChange =(event) => {
  setUseAlternativeImages(event.target.checked);
}

//SUBMIT TERZIARIO
const handleSubmit3 =(event) => {
  event.preventDefault(); // prevent page reload

  setProgress(progress => 0);

  const randomGroupIndex = Math.floor(Math.random() * imageGroups.length);
  const randomGroup = imageGroups[randomGroupIndex];
  setSelectedGroup(randomGroup);

  const useAlternativeImages = terzo > 3;
  const images = useAlternativeImages ? randomGroup.images2 : randomGroup.images1;
  const randomImageIndex1 = Math.floor(Math.random() * images.length);
  let randomImageIndex2 = Math.floor(Math.random() * images.length);
  while (randomImageIndex2 === randomImageIndex1) {
    randomImageIndex2 = Math.floor(Math.random() * images.length);
  }
  setSelectedImages([images[randomImageIndex1], images[randomImageIndex2]]);
  setUseAlternativeImages(useAlternativeImages);


  setStep(step + 1); // increase the step
}


//SUBMIT SECONDARIO 
const handleSubmit2 =(event) => {
  setProgress(progress => progress + 25);

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  
  const screenWidth = window.innerWidth;
  const newPosition = position + screenWidth * 0.2; // move image 20% to the right
  setPosition(newPosition);
}



const handleSubmit6 =(event) => {


  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step

}


/////QUIIIII////////
const handleSubmit4 =(event) => {

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  
  setProgress(progress => progress + 15);

}


const handleSubmit5 =(event) => {

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  setShowConfetti(true);
  setProgress(progress => progress + 10);
    


    addDoc(userCollectionRef2, {
      primo:primo,
      secondo:secondo,
      terzo:terzo,
      domanda:domanda,
      gruppo:selectedGroup.name,
      domanda2: domanda2,
      quarto:quarto,
      quinto:quinto,
      domanda3:domanda3,
      domanda4:domanda4,
    
    })
    
}










  return (

  //colore secondario
 // <div className="block lg:hidden relative w-full md:w-1/2 -mr-40 mt-20">


<div>


    <div className="progress-bar-container">
      <progress value={progress} max="100"></progress>
    </div>


        <header className="flex-row md:flex-row justify-between items-center lg:my-0">
      
   

   
         
 



     


  <div>
 

 



  {step === 1 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
        <p className=" leading-loose text-3xl md:text-4xl font-semibold text-gray-800">
          È tutta logica
        </p>

        <p
          className="leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore"
          style={{lineHeight: "25px"}}
        >
          In questo corso esplorerai le basi fondamentali della fisica e i principi dell'ingegneria attraverso enigmi e giochi.
<br></br>
<br></br>
          Gli enigmi di questo capitolo si concentrano su forza attrito e componenti della forza attrito
          <br></br>
          <br></br>
          
           Mentre li risolvi, dovresti essere alla ricerca di schemi: principi generali che puoi utilizzare per fare previsioni nel mondo reale.
          <br></br>

         
        </p>

        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}


{step === 2 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

        <p
          className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio"
          style={{lineHeight: "25px"}} >
Ora che hai una idea sulla differenza tra massa e peso (è fondamentale) passiamo alla forza di attrito. 

Più un mobile è pesante, più sarà difficile spostarlo. È più facile scivolare sul ghiaccio che sul cemento. Questo perché l’attrito cambia in queste situazioni. 

L’attrito è definito come LA FORZA che si oppone allo spostamento. Anche la superficie più liscia nel mondo, a livello microscopico, presenta delle increspature: lo sfregamento tra due superfici è quindi “ostacolato”.


Più un mobile è pesante, più fatica (ossia forza) farai: questo perché la forza attrito DIPENDE DAL PESO DELL’OGGETTO. Per semplificare la teoria consideriamo un mobile sulla terra (con accelerazione 10 m/s2).       
        </p>

        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}



{step === 3 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
        <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">Partiamo dalle basi:</label>
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
              Il mobile ha massa 200 kg, la sua forza peso è: 

              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
                2000 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                200 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
                200 KG 
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}





 
            
{step === 4 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

        <p
          className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio"
          style={{lineHeight: "25px"}} >
Sappiamo che Forza = massa x accelerazione. Quindi FORZA = 200 X 10 = 2000N 


Ogni superficie ha un coefficiente di attrito: è un numero ed è costante da superficie a superficie (e ti viene sempre fornito in verifica).
Per capirci: 

Il legno ha coefficiente di attrito 0,5; il rame 0,5; il vetro 1. 


La forza di attrito è definita come FORZA PESO X COEFFICIENTE. 
     
        </p>

        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}





{step === 5 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
        <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">Partiamo dalle basi:</label>
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
           
Il mobile che ha forza peso 2000 N, deve essere spostato su una superficie ruvida di coefficiente di attrito pari a 0,10. Calcola la forza che Luigi deve applicare per mettere in movimento il mobile (SE METTI IN MOTO UN CORPO VUOL DIRE CHE HAI VINTO LA FORZA DI ATTRITO). 

              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
                200 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                2000 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
                20 N
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}



            
{step === 4 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

        <p
          className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio"
          style={{lineHeight: "25px"}} >
Forza di attrito = forza peso x coefficient e

Forza di attrito = 2000 x 0,10 

200 N

     
        </p>

        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}


      {step === 6 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
   
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
          
              Mario — che pesa 80kg — quando è sulla terra risente di una forza peso di CIRCA (ricorda: FORZA = MASSA X ACCELERAZIONE). 

              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
                800 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                80 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
                250 N 
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}


   {step === 7 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >
      La risposta corretta è 800 N. Arrotondando l’accelerazione terrestre a 10 m/s&#178;, moltiplico la massa di Mario x 10 (accelerazione) = FORZA. 

<BlockMath>
  {'Forza = 80 \\space (massa)\\times 10 \\space(accelerazione)'}
</BlockMath>


</p>
        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}
        


        {step === 8 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
   
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
          
              Mario — che non è ingrassato nel mentre — si trova sulla Luna (con accelerazione di 2 m/s2. Qual ‘è la sua massa?

              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
    180N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
Uguale che sulla terra 
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
     800N
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}
  

  {step === 9 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >
   
La risposta corretta è uguale che sulla terra. Il quesito chiedeva la MASSA di Mario, non la sua forza peso. La massa descrive solamente da quanti elementi è composto l’oggetto ed, essendo Mario composto dalla stessa materia sulla terra che sulla luna — e specialmente non essendo ingrassato — la sua massa è rimasta medesima. 




</p>
        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}




{step === 10 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
   
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
          
              Mario — che ha sempre massa 80 kg — si trova sulla luna (con accelerazione di 2 m/s2). Qual è la sua forza peso? 


              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
    250N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                160 N
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
     80kg
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}
  


  {step === 11 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >


      La risposta corretta è 160 N. Per determinare la forza moltiplico la massa (80 kg) per l’accelerazione (2) = 160 N 



Pertanto Mario, quando prende la sfera blu nello spazio, aumenta la quantità di materia che lo compone (la sua massa). Sapendo che FORZA = MASSA X ACCELERAZIONE ed essendo la massa aumentata, anche la forza aumenta. 

</p>
        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}

{step === 12 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
   
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
          
              Dopo aver afferrato la sfera blu, il capitano Cosmo si sposta su un altro pianeta con una gravità più debole (accelerazione gravitazionale). 

              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
                La massa rimarrà la stessa, ma il peso diminuirà.

              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                La massa aumenterà, ma il peso diminuire
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
                Sia la massa che il peso diminuiranno 
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}

{step === 13 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >


    
La risposta corretta è la prima. LA MASSA NON DIPEDE DAL PIANETA, mentre il peso dipende dall’accelerazione gravitazione. Se il capitano si sposta su un pianeta con accelerazione inferriare e sapendo che F = M X A allora la forza è inferiore.

</p>
        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}


{step === 14 && (
  
  <div className="principale">
    <form onSubmit={handleSubmit20}>
    <div className="containerr altezzamassima">
  <div className="image-container immaginesecondo">

    <div className="complete containerr largo">
      
        <img src={userData.attrito} alt="avatar" className="ridotto" />
      </div>

  </div>

  <div className="bordosinistro">
   
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2">
          
              Il capitano Cosmo decide di tornare sulla Terra. Quale delle seguenti affermazioni è corretta quando si trova sulla Terra?
              </label>
            </p>
          </div>
          <div className="radio-buttons">
            <div className="radio-button">
                        <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="yes" name="climate-articles" value="yes" 
                      onChange={() => {
                        setDomanda("yes");
                        setSelectedOption("yes");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["yes"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "yes" ? 'selected' : ''}`}></span>
                La sua massa rimane la stessa, ma il suo peso diminuisce

              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no1" name="climate-articles" value="no1" 
                      onChange={() => {
                        setDomanda("no1");
                        setSelectedOption("no1");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no1"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no1" ? 'selected' : ''}`}></span>
                La massa aumenterà, ma il peso diminuire
              </label>
            </div>

            <div className="radio-button"> 
            <label className=" grande font-medium text-sm text-gray-700">
                <input type="radio" className="hidden" id="no2" name="climate-articles" value="no2" 
                      onChange={() => {
                        setDomanda("no2");
                        setSelectedOption("no2");
                      }}
                      disabled={isSubmitted}
                />
                <span className={`result-indicator ${isSubmitted ? (correctness["no2"] ? 'correct' : 'incorrect') : 'unsubmitted'}`}></span>
                <span className={`custom-radio ${selectedOption === "no2" ? 'selected' : ''}`}></span>
                La sua massa diminuisce, ma il suo peso rimane lo stesso

              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="space">
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

            {isCorrect !== null && (
              <div className="mt-3 marginesinistro">
                <p>{isCorrect ? "Giusto 🎉" : "Sbagliato :("}</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  )}

{step === 15&& (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >


    
La risposta corretta è la prima. LA MASSA NON DIPEDE DAL PIANETA, mentre il peso dipende dall’accelerazione gravitazione. Se il capitano si sposta su un pianeta con accelerazione inferriare e sapendo che F = M X A allora la forza è inferiore.

</p>
        <button type="submit" className="bottoneprimario">Inizia il corso :)</button>
      </div>
    </div>
  </form>
)}

       


    </div>
 






        </header>
        

        {/* Grid starts here */}
      
   
   

   


   
    </div>
    
  );
}
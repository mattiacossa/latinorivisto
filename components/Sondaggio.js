import React from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { blue } from "tailwindcss/colors";
import{useState, useRef, useEffect} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import Confetti from "react-confetti";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import lottie from 'lottie-web'; // Import the Lottie library





export default function FavouriteProjects() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [progress, setProgress] = useState(20);
  const [correctAnswerChecked, setCorrectAnswerChecked] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [avanti, setAvanti] = useState("fermo");
  const [isSubmitted, setIsSubmitted] = useState(false); // new state
  const [correctAnswer, setCorrectAnswer] = useState("yes");
  const [lottieAnimation, setLottieAnimation] = useState(null); 
  const [sliderValue, setSliderValue] = useState(1);

 
const handleOptionChange = (value) => {
  setSelectedOption(value);
  setDomanda(value);
}

const progressBarStyles = {
  width: `${progress}%`,
  height: '8px',
  backgroundColor: '#0b9f7f',
  borderRadius: '4px',
  transition: 'width 0.2s ease-in-out',
};


const [correctness, setCorrectness] = useState({
  "yes": true,
  "no1": false,
  "no2": false
});


const handleSliderChange = (event) => {
  setSliderValue(parseInt(event.target.value));
};


useEffect(() => {
  console.log('Slider value:', sliderValue); // Check slider value
  // Load the Lottie animation based on the slider value
  if (sliderValue === 1) {
    console.log('Loading animation 1'); // Debug message
    loadLottieAnimation('./an.json'); // Replace with the correct path
  } else if (sliderValue === 2) {
    console.log('Loading animation 2'); // Debug message
    loadLottieAnimation('./an2.json'); // Replace with the correct path
  } else if (sliderValue === 3) {
    console.log('Loading animation 3'); // Debug message
    loadLottieAnimation('./an3.json'); // Replace with the correct path
  }
}, [sliderValue]);

const loadLottieAnimation = (animationPath) => {
  if (lottieAnimation) {
    lottieAnimation.destroy(); // Destroy the existing animation
  }

  const container = document.getElementById('lottieAnimation'); // Container element
  const newAnimation = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
  });

  setLottieAnimation(newAnimation); // Store the new animation instance
};




  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(1); // initial step is 1
  const [formData, setFormData] = useState({}); // initialize form data
  const [isCorrect, setIsCorrect] = useState(null);
  const[prova,setProva] = useState('un');

  const userCollectionRef = collection(db, "fisica")


  const [position, setPosition] = useState(0);
  const [domanda, setDomanda] = useState(0);
  

 
    const handleSubmit20 = (event) => {
      event.preventDefault();
      setIsSubmitted(true); // mark the form as submitted
      if (avanti === "fermo") {
      if (domanda === "yes") {
        setIsCorrect(true);
        setAvanti("true") 
      } else {
        setIsCorrect(false);
        setAvanti("true") 
    
      }
    } else {
      setStep(step + 1);
      setAvanti("fermo") 
      setIsSubmitted(false);
      setProgress(progress => progress + 25);
      setIsCorrect(null);
  
    }
    }
    

    



  







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





  return (

  //colore secondario
 // <div className="block lg:hidden relative w-full md:w-1/2 -mr-40 mt-20">


<div>


  

        <header className="flex-row md:flex-row justify-between items-center lg:my-0">
      
   

   
         
 



     


  <div>
 

 



  {step === 1 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto bordo" />
          </div>



      </div>
      <div className="bordosinistro spazioinalto">
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
          Gli enigmi di questo capitolo si concentrano su massa, forza peso e forza opprimente (attrito).
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
  
  <form onSubmit={handleSubmit20}>
  <div className="containerr altezzamassima">
    <div className="image-container immaginesecondo">



  <div className="complete containerr largo">
  <div className="image-container immaginesecondo">
  <div className="lottie-container" id="lottieAnimation"></div>
</div>


<div className="slider-container">
  <input
    type="range"
    min="1"
    max="3"
    value={sliderValue}
    onChange={handleSliderChange}
  />
</div>


       
        </div>



    </div>

    
  <div className="bordosinistro">
    <div className="myriam">
      <div className="progress-bar" style={progressBarStyles}></div>
   </div>



<div className="bordosuperiore">
        <label className="grande textt block3 font-medium text-sm text-gray-700 mb-2 ">Partiamo dalle basi:</label>
        <div className="mt-3 grigio">
          <div className="container">
            <p>
              <label className="grande textt block3 font-medium text-sm text-gray-800 mb-2" style={{lineHeight: "25px"}}>
                Chi è il misterioso personaggio che sulla terra ha una massa di 80 kg ma un peso di 130 N?

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
                Mario, l’astronauta
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
                Luigi, il nuotatore
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
                Beppe, il capotreno
              </label>
            </div>
              </div>
          </div>

          <div className="tasto bordosuperiore">
            <div>
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
 
  )}



{step === 3 && (
  
  <form onSubmit={handleSubmit2}>
  <div className="containerr altezzamassima">
    <div className="image-container immaginesecondo">



  <div className="complete containerr largo">
    
        <img src={userData.attrito} alt="avatar" className="ridotto" />
        </div>



    </div>

    
  <div className="bordosinistro">
<div className="myriam">
 
      <div className="progress-bar" style={progressBarStyles}></div>

    </div>



<div className="bordosuperiore">
        <div className="mt-3">
          <div className="container">
          
            <p
          className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800"
          style={{lineHeight: "25px"}} >
       La risposta corretta è Mario, l’astronauta. Ma partiamo dalle basi: 
       <br></br><br></br>
MASSA e FORZA PESO (chiamato “peso” per semplicità) sono due grandezze fisiche diverse.

Immagina di sollevare una palla da calcio e una palla di piume, entrambe con stesse dimensioni. Scoprirai che la palla da calcio è molto più pesante della palla di piume. 

<br></br>
<br></br> 

Questo perché la palla da calcio ha MASSA maggiore della palla di piume. La massa è quanto “materiale” c’è dentro un oggetto. LA MASSA È UNA PROPRIETÀ INTRINSECA DELL’OGGETTO ED È SEMPRE COSTANTE, QUALSIASI SIA IL PIANETA.

<br></br> 
<br></br>

 Pertanto Mario — l’astronauta — ha stessa massa sia sulla terra che sulla luna poiché la quantità di materiale che compone il suo corpo è uguale, INDIPENDENTEMENTE DA DOVE SI TROVI. 
         
     

            </p>
          </div>

          </div>

          <div className="tasto bordosuperiore">
            <div>
              <button type="submit" className="bottonesecondario">Avanti</button>
            </div>

         
          </div>
        </div>
        </div>
        </div>
    
      </form>
 
  )}




 
            






{step === 4 && (
  
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
              <label className="leading-loose  text-1xl md:text-1xl text-gray-800 bordospaziatore textt block3  text-gray-700 mb-2"
              style={{lineHeight: "25px"}}>
                
          
Il capitanato Mario è un audace astronauta che si avventura nello spazio alla ricerca di avventure intergalattiche. Un giorno, mentre si trova su un pianeta molto lontano, il Capitano nota un oggetto misterioso che galleggia nell’aria. Il Capitano si avvicina, afferma l’oggetto e scopre che è una sfera blu scintillante. 


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
              Il capitano ha aumentato la sua massa
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
                Il capitano ha aumentato il suo peso 
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
                Il capitano ha aumentato sia la sua massa che il suo peso 
              </label>
            </div>
          </div>

          <div className="tasto">
            <div className="">
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

  )}

{step === 5 && (
  <form onSubmit={handleSubmit6}>
    <div className="containerr altezzamassima">
      <div className="image-container immaginesecondo">



    <div className="complete containerr largo">
      
          <img src={userData.attrito} alt="avatar" className="ridotto" />
          </div>



      </div>
      <div className="bordosinistro">
     

      <p className="bordoalto leading-loose text-1xl md:text-1xl text-gray-800 bordospaziatore grigio" style={{lineHeight: "25px"}} >
La risposta corretta è: il capitano ha aumentato sia la sua massa che il suo peso. Capiamo perché partendo ancora una volta dalle basi: secondo la seconda legge di Newton (imparala a memoria, è alla base di tutta la fisica), la forza esercitata su un corpo equivale al prodotto (x) tra accelerazione e massa. 


<BlockMath>
  {'Forza = massa \\times accelerazione'}
</BlockMath>


Ogni pianeta ha la sua accelerazione (detta gravitazionale): la terra ha accelerazione 9.81 m/s&#178; (impara questo valore che è fondamentale, è costante, non cambia nel tempo e non dipende dal corpo considerato). La luna ha invece accelerazione di circa 1 m/s&#178;.


Di conseguenza, per determinare la forza peso esercitata su un corpo, è necessario sapere la sua massa e l’accelerazione del pianeta su cui si trova. 

</p>
        <button type="submit" className="bottoneprimario">Avanti</button>
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
          
              Mario — che pesa 80kg — quando è sulla terra risente di una forza peso di CIRCA. 
              <BlockMath>
  {'Forza = massa \\times accelerazione'}
</BlockMath>
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
            <div className="">
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
        <button type="submit" className="bottoneprimario">Avanti</button>
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
          
              Mario — che non è ingrassato nel mentre — si trova sulla Luna (con accelerazione di 2 m/s&#178. Qual ‘è la sua massa?

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
            <div className="">
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
        <button type="submit" className="bottoneprimario">Avanti</button>
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
          
              Mario — che ha sempre massa 80 kg — si trova sulla luna (con accelerazione di 2 ). Qual è la sua forza peso? 


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
            <div className="">
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
        <button type="submit" className="bottoneprimario">Avanti</button>
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
            <div className="">
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
        <button type="submit" className="bottoneprimario">Avanti</button>
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
            <div className="">
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
        <button type="submit" className="bottoneprimario">Avanti</button>
      </div>
    </div>
  </form>
)}


{step === 16 && (
  
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
          
             Ritor
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
            <div className="">
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

       


    </div>
 






        </header>
        

        {/* Grid starts here */}
      
   
   

   


   
    </div>
    
  );
}
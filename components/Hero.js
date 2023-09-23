import React, { useState } from 'react';


const tooltipStyle = {
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
};

const Hero = () => {
  const [tooltipText, setTooltipText] = useState('');

  const handleTooltipHover = (text) => {
    setTooltipText(text);
  };

  const handleTooltipLeave = () => {
    setTooltipText('');
  };

  return (
   <div>
    <div className="two-column-layout">
      <div className="left-column">
      <span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Viribus')}
  onMouseLeave={handleTooltipLeave}
>
  Viribus 
</span> 


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('absumptis')}
  onMouseLeave={handleTooltipLeave}
> absumptis
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('expalluit')}
  onMouseLeave={handleTooltipLeave}
> expalluit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('illa')}
  onMouseLeave={handleTooltipLeave}
> illa
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('citaeque')}
  onMouseLeave={handleTooltipLeave}
> citaeque
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('victa')}
  onMouseLeave={handleTooltipLeave}
> victa
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('labore')}
  onMouseLeave={handleTooltipLeave}
> labore
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('spectans')}
  onMouseLeave={handleTooltipLeave}
> spectans
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Peneidas')}
  onMouseLeave={handleTooltipLeave}
> Peneidas
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('undas')}
  onMouseLeave={handleTooltipLeave}
> undas
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Fer')}
  onMouseLeave={handleTooltipLeave}
> Fer
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pater')}
  onMouseLeave={handleTooltipLeave}
> pater
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('inquit')}
  onMouseLeave={handleTooltipLeave}
> inquit
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('opem')}
  onMouseLeave={handleTooltipLeave}
> opem
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('si')}
  onMouseLeave={handleTooltipLeave}
> si
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('flumina')}
  onMouseLeave={handleTooltipLeave}
> flumina
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('numen')}
  onMouseLeave={handleTooltipLeave}
> numen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habetis')}
  onMouseLeave={handleTooltipLeave}
> habetis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('qua')}
  onMouseLeave={handleTooltipLeave}
> qua
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nimium')}
  onMouseLeave={handleTooltipLeave}
> nimium
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nimium')}
  onMouseLeave={handleTooltipLeave}
> nimium
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('placui')}
  onMouseLeave={handleTooltipLeave}
> placui
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mutando')}
  onMouseLeave={handleTooltipLeave}
> mutando
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('perde')}
  onMouseLeave={handleTooltipLeave}
> perde
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('figuram')}
  onMouseLeave={handleTooltipLeave}
> figuram
</span>



<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('figuram')}
  onMouseLeave={handleTooltipLeave}
> figuram
</span>







<span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('Vix')}
    onMouseLeave={handleTooltipLeave}
  >
    Vix
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('prece')}
    onMouseLeave={handleTooltipLeave}
  >
    prece
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('finita,')}
    onMouseLeave={handleTooltipLeave}
  >
    finita,
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('torpor')}
    onMouseLeave={handleTooltipLeave}
  >
    torpor
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('gravis')}
    onMouseLeave={handleTooltipLeave}
  >
    gravis
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('occupat')}
    onMouseLeave={handleTooltipLeave}
  >
    occupat
  </span>



<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mollia')}
  onMouseLeave={handleTooltipLeave}
>
  mollia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cinguntur')}
  onMouseLeave={handleTooltipLeave}
>
  cinguntur
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tenui')}
  onMouseLeave={handleTooltipLeave}
>
  tenui
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('praecordia')}
  onMouseLeave={handleTooltipLeave}
>
  praecordia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('libro,')}
  onMouseLeave={handleTooltipLeave}
>
  libro,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('frondem')}
  onMouseLeave={handleTooltipLeave}
>
  frondem
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('crines,')}
  onMouseLeave={handleTooltipLeave}
>
  crines,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ramos')}
  onMouseLeave={handleTooltipLeave}
>
  ramos
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('brachia')}
  onMouseLeave={handleTooltipLeave}
>
  brachia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('crescunt:')}
  onMouseLeave={handleTooltipLeave}
>
  crescunt:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pes')}
  onMouseLeave={handleTooltipLeave}
>
  pes
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('modo')}
  onMouseLeave={handleTooltipLeave}
>
  modo
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tam')}
  onMouseLeave={handleTooltipLeave}
>
  tam
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('velox')}
  onMouseLeave={handleTooltipLeave}
>
  velox
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pigris')}
  onMouseLeave={handleTooltipLeave}
>
  pigris
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('radicibus')}
  onMouseLeave={handleTooltipLeave}
>
  radicibus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('haeret,')}
  onMouseLeave={handleTooltipLeave}
>
  haeret,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ora')}
  onMouseLeave={handleTooltipLeave}
>
  ora
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cacumen')}
  onMouseLeave={handleTooltipLeave}
>
  cacumen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habet;')}
  onMouseLeave={handleTooltipLeave}
>
  habet;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('remanet')}
  onMouseLeave={handleTooltipLeave}
>
  remanet
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nitor')}
  onMouseLeave={handleTooltipLeave}
>
  nitor
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('unus')}
  onMouseLeave={handleTooltipLeave}
>
  unus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('illa.')}
  onMouseLeave={handleTooltipLeave}
>
  illa.
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Hanc')}
  onMouseLeave={handleTooltipLeave}
>
  Hanc
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('quoque')}
  onMouseLeave={handleTooltipLeave}
>
  quoque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Phoebus')}
  onMouseLeave={handleTooltipLeave}
>
  Phoebus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('amat,')}
  onMouseLeave={handleTooltipLeave}
>
  amat,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('positaque')}
  onMouseLeave={handleTooltipLeave}
>
  positaque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('stipite')}
  onMouseLeave={handleTooltipLeave}
>
  stipite
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dextra')}
  onMouseLeave={handleTooltipLeave}
>
  dextra
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('sentit')}
  onMouseLeave={handleTooltipLeave}
>
  sentit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('adhuc')}
  onMouseLeave={handleTooltipLeave}
>
  adhuc
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('trepidare')}
  onMouseLeave={handleTooltipLeave}
>
  trepidare
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('novo')}
  onMouseLeave={handleTooltipLeave}
>
  novo
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('sub')}
  onMouseLeave={handleTooltipLeave}
>
  sub
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cortice')}
  onMouseLeave={handleTooltipLeave}
>
  cortice
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pectus,')}
  onMouseLeave={handleTooltipLeave}
>
  pectus,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('complexusque')}
  onMouseLeave={handleTooltipLeave}
>
  complexusque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('suis')}
  onMouseLeave={handleTooltipLeave}
>
  suis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ramos,')}
  onMouseLeave={handleTooltipLeave}
>
  ramos,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ut')}
  onMouseLeave={handleTooltipLeave}
>
  ut
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('membra,')}
  onMouseLeave={handleTooltipLeave}
>
  membra,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('lacertis')}
  onMouseLeave={handleTooltipLeave}
>
  lacertis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('oscula')}
  onMouseLeave={handleTooltipLeave}
>
  oscula
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dat')}
  onMouseLeave={handleTooltipLeave}
>
  dat
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ligno:')}
  onMouseLeave={handleTooltipLeave}
>
  ligno:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('refugit')}
  onMouseLeave={handleTooltipLeave}
>
  refugit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tamen')}
  onMouseLeave={handleTooltipLeave}
>
  tamen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('oscula')}
  onMouseLeave={handleTooltipLeave}
>
  oscula
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('lignum.')}
  onMouseLeave={handleTooltipLeave}
>
  lignum.
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Cui')}
  onMouseLeave={handleTooltipLeave}
>
  Cui
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('deus:')}
  onMouseLeave={handleTooltipLeave}
>
  deus:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('«at')}
  onMouseLeave={handleTooltipLeave}
>
  «at
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('quoniam')}
  onMouseLeave={handleTooltipLeave}
>
  quoniam
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('coniunx')}
  onMouseLeave={handleTooltipLeave}
>
  coniunx
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mea')}
  onMouseLeave={handleTooltipLeave}
>
  mea
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('non')}
  onMouseLeave={handleTooltipLeave}
>
  non
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('potes')}
  onMouseLeave={handleTooltipLeave}
>
  potes
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('esse,')}
  onMouseLeave={handleTooltipLeave}
>
  esse,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('arbor')}
  onMouseLeave={handleTooltipLeave}
>
  arbor
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('eris')}
  onMouseLeave={handleTooltipLeave}
>
  eris
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('certe»')}
  onMouseLeave={handleTooltipLeave}
>
  certe»
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dixit')}
  onMouseLeave={handleTooltipLeave}
>
  dixit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('«mea;')}
  onMouseLeave={handleTooltipLeave}
>
  «mea;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('semper')}
  onMouseLeave={handleTooltipLeave}
>
  semper
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habēbunt')}
  onMouseLeave={handleTooltipLeave}
>
  habēbunt
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('coma,')}
  onMouseLeave={handleTooltipLeave}
>
  coma,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('citharae,')}
  onMouseLeave={handleTooltipLeave}
>
  citharae,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nostrae,')}
  onMouseLeave={handleTooltipLeave}
>
  nostrae,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('laure,')}
  onMouseLeave={handleTooltipLeave}
>
  laure,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pharetrae;')}
  onMouseLeave={handleTooltipLeave}
>
  pharetrae;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tu')}
  onMouseLeave={handleTooltipLeave}
>
  tu
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ducibus')}
  onMouseLeave={handleTooltipLeave}
>
  ducibus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Latiis')}
  onMouseLeave={handleTooltipLeave}
>
  Latiis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('aderis,')}
  onMouseLeave={handleTooltipLeave}
>
  aderis,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cum')}
  onMouseLeave={handleTooltipLeave}
>
  cum
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('laeta')}
  onMouseLeave={handleTooltipLeave}
>
  laeta
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('triumphum')}
  onMouseLeave={handleTooltipLeave}
>
  triumphum
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('vox')}
  onMouseLeave={handleTooltipLeave}
>
  vox
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('canet')}
  onMouseLeave={handleTooltipLeave}
>
  canet
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('et')}
  onMouseLeave={handleTooltipLeave}
>
  et
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('visent')}
  onMouseLeave={handleTooltipLeave}
>
  visent
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('longas')}
  onMouseLeave={handleTooltipLeave}
>
  longas
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Capitolia')}
  onMouseLeave={handleTooltipLeave}
>
  Capitolia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pompas».')}
  onMouseLeave={handleTooltipLeave}
>
  pompas».
</span>


      </div>








      <div className="right-column">
        {tooltipText && (
          <div
            className='tooltip-text'
            style={{
              visibility: 'visible',
              opacity: '1',
            }}
          >
            <div className='fontgrande'>
              <h1>{tooltipText}</h1>
            </div>
            {/* Add your desired content for each tooltipText here */}
            {tooltipText === 'Viribus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl pl.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


            {tooltipText === 'absumptis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> participio pl.     </></div>
                </div>
                <div className='bordosopra'>
                [absūmo], absūmis, absumpsi, absumptum, absūmĕre
                </div>
          
Esaurite
       
              </>
            )}


{tooltipText === 'expalluit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind. Perf. 3p. s.     </></div>
                </div>
                <div className='bordosopra'>
                [expallesco], expallescis, expallui, expallescĕre
                </div>
          
Impallidì
       
              </>
            )}


{tooltipText === 'illa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> Pronom. Dimostrat.     </></div>
                <div className='analisi2'>   <> nom. Sing.     </></div>
                </div>
                <div className='bordosopra'>
     Ella
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'citaeque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiunzione     </></div>
               
                </div>
                <div className='bordosopra'>
                att + que
                </div>
          

       
              </>
            )}



{tooltipText === 'victa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> abl. Participio pass     </></div>
                </div>
                <div className='bordosopra'>
                [vinco], vincis, vici, victum, vincĕre
                </div>
          
Vinta
       
              </>
            )}


{tooltipText === 'labore' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> abl. Sing. 3^ decl.     </></div>
                </div>
                <div className='bordosopra'>
               (labor, laboris)
                </div>
          
Forze
       
              </>
            )}
        
        
            
        {tooltipText === 'fugae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> gen. Sing. Compl. spec.     </></div>
                </div>
                <div className='bordosopra'>
legato a labore
                </div>
          
dalla fatica
       
              </>
            )}


{tooltipText === 'spectans' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> participio pres. congiunto (gerundio)     </></div>
                </div>
                <div className='bordosopra'>
                [specto], spectas, spectavi, spectatum, spectāre
                </div>
          
Rivolgendosi
       
              </>
            )}
            


            {tooltipText === 'Peneidas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>acc. pl.     </></div>
                </div>
                <div className='bordosopra'>
                Attrib. di undas
                </div>
          
del Peneo
       
              </>
            )}

{tooltipText === 'undas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. pl.    </></div>
                </div>
                <div className='bordosopra'>
                Compl.ogg. di spectans
                </div>
          
Alle correnti
       
              </>
            )}


{tooltipText === 'Fer' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> imper.pres. 2^ps.     </></div>
                </div>
                <div className='bordosopra'>
                (fero)
                </div>
          
                [fĕro], fĕrs, tuli, latum, fĕrre
       
              </>
            )}



{tooltipText === 'pater' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> vocativo. sing     </></div>
                </div>
                <div className='bordosopra'>
                (pătĕr, patris)
                </div>
          
oh Padre
       
              </>
            )}


{tooltipText === 'inquit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> indic. Pres.     </></div>
                </div>
               
          
Disse
       
              </>
            )}



{tooltipText === 'opem' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing.    </></div>
                </div>
                <div className='bordosopra'>
                Compl.ogg. di fer (Opis, Opis)
                </div>
          
Aiuto
       
              </>
            )}


{tooltipText === 'si' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> proposizione     </></div>
            
                </div>
                <div className='bordosopra'>
                Introduce una prop. condizionale
                </div>
          
Se
       
              </>
            )}

{tooltipText === 'flumina' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>nom. neut.    </></div>
                </div>
                <div className='bordosopra'>
                (flumen,is. 3^ decl.)
                </div>
          
Fiumi
       
              </>
            )}


{tooltipText === 'numen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>acc. sing. neutro      </></div>
                </div>
                <div className='bordosopra'>
                compl. ogg di habetis (nūmĕn, numinis)
                </div>
          
Potere
       
              </>
            )}

{tooltipText === 'habetis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind.pres 2pp.    </></div>
                </div>
                <div className='bordosopra'>
                (habeo)
                </div>
          
Avete
       
              </>
            )}



{tooltipText === 'qua' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome     </></div>
                <div className='analisi2'>   <> pron. Rel. Femm. Abl.s. di causa  </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'nimium' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbo     </></div>
               
                </div>
              
          

       
              </>
            )}


{tooltipText === 'placui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <>  ind.perf 1^ps.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'mutando' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> gerund. Dell’abl     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


            

{tooltipText === 'perde' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> imperat. 2^ps.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'figuram' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'Vix' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'prece' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'finita' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'torpor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'gravis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'occupat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'artus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'mollia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'cinguntur' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'tenui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}

        


{tooltipText === 'praecordia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'libro' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'in frondem' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'crines' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'in ramos' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'brachia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'crescunt' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'pes' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'modo' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'tam' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'velox' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'pigris' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'radicibus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'haeret' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'ora' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'cacumen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'habet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'remanet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'nitor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'unus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'in illa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'Hanc' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'quoque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}

{tooltipText === 'Phoebus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'amat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'positaque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'in stipite' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'dextra' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'sentit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'adhuc' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'trepidare' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'novo' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'sub cortice' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'pectus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'complexusque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'suis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'ramos' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'ut membra' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'lacertis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'oscula' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'dat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'ligno' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'refugit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}

{tooltipText === 'tamen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'oscula' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'lignum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'Cui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'deus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'at' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'quoniam' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'coniunx' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'mea' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'non' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'potes' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'esse' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'arbor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'eris' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'certe' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'dixit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'mea' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'semper' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'habebunt' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'te' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'coma' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'te' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}





{tooltipText === 'citharae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'nostrae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'laure' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'pharetrae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'tu' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'ducibus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'Latiis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'aderis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'cum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'laeta' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'triumphum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'vox' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'canet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'et' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'visent' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'longas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'Capitolia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'pompas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}






          </div>
        )}
      </div>

     
    </div>
    <div className='bottone'>

      <a href="/analisi">
        <button>Vai ad Analisi</button>
      </a>
    </div> 
     </div>
  );
};

export default Hero;

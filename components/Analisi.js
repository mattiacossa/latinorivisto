import React, { useCallback } from 'react';

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: {label: 'Expalluit illa (quella impallidì)' },      sourcePosition: 'right',targetPosition: 'bottom', },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'viribus absumptis (esaurite le forze)' },  sourcePosition: 'top'},
  { id: '3', position: { x: 200, y: 0 }, data: { label: 'citaque victa labore fugae  (e vinta dalla fatica della fuga veloce disse)' },  targetPosition: 'left', type: 'selectorNode', },
  { id: '4', position: { x: 200, y: 120 }, data: { label: 'fer pater (portami aiuto, o padre)' } },
  { id: '5', position: { x: 400, y: 120 }, data: { label: 'spectans Peneidas undas (rivolgendosi alle correnti del Peneo)' }, sourcePosition: 'right' },
  { id: '6', position: { x: 600, y: 120 }, data: { label: 'opem, si flumina numen habetis (se voi fiumi avete potere divino)' }, targetPosition: 'left' },

  {
    id: '7',
    type: 'selectorNode',

  
    position: { x: -10, y: 0 },
  },




  { id: '7', position: { x: 100, y: 300 }, data: { label: 'perde figuram (dissolvi la mia figura)'} },
  { id: '8', position: { x: 100, y: 400 }, data: { label: 'mutando(mutandola)'} },
  { id: '9', position: { x: 400, y: 400 }, data: { label: 'qua numium placui (per cui troppo piacqui!)'} },





];


const initialNodes2 = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Torpor gravis occupat artus (un torpore pesante pervade le membra)'}, targetPosition: 'right'},
  { id: '2', position: { x: 0, y: 200 }, data: { label: 'vix prece finita (appena finita la preghiera)'} },
  { id: '3', position: { x: 200, y: 0 }, data: { label: 'mollia cinguntur tenui praecordia libro (il petto morbido si fascia di una sottile membrana)' }, sourcePosition: 'left', targetPosition: 'right' },
  { id: '4', position: { x: 400, y: 0 }, data: { label: 'in frondem crines (i capelli crescono in fogliame)' }, sourcePosition: 'left', targetPosition: 'right'},
  { id: '5', position: { x: 600, y: 0 }, data: { label: 'in ramos brachia crescunt (le braccia si allungano in rami)' }, sourcePosition: 'left' },


  { id: '6', position: { x: 100, y: 400 }, data: { label: 'modo tam velox pigris radicibus haeret (il piede, tanto veloce poco prima, si fissa in pigre radici,)'} },
  { id: '7', position: { x: 300, y: 400 }, data: { label: 'ora cacumen habet (e la cima possiede il volto)'} },
  { id: '8', position: { x: 300, y: 600 }, data: { label: '(remanet nitor unus in illa.) in quella rimane il solo splendore'} },





];


const initialNodes3 = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Hanc quoque Phoebus amat (Febo ama anche questa)'} },
  { id: '2', position: { x: 200, y: 0 }, data: { label: 'sentit adhuc trepidare novo sub cortice pectus, (e sente ancora trepidare il petto sotto la nuova corteccia)'} },
  { id: '3', position: { x: 200, y: 200 }, data: { label: 'positaque in stipite dextra (posata la destra sul tronco)' } },
  { id: '4', position: { x: 400, y: 0 }, data: { label: 'complexusque suis ramos ut membra (e da dei baci al legno come membra)' } },
  { id: '5', position: { x: 700, y: 0 }, data: { label: '(refugit tamen oscula lignum) tuttavia il legno rifiuta i baci' } },
  { id: '6', position: { x: 700, y: 200 }, data: { label: '(lacertis oscula dat ligno) abbracciando con le sue braccia il tronco  ' } },







];


const initialNodes4 = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Cui deus dixit (E a quella il dio disse)'} },
  { id: '2', position: { x: 300, y: 0 }, data: { label: 'at quoniam coniunx mea non potes esse (dal momento che non puoi essere la mia sposa)'} },
  { id: '3', position: { x: 0, y: 200 }, data: { label: 'arbor eris certe (ebbene sarai almeno la mia pianta)' } },
  { id: '4', position: { x: 500, y: 0 }, data: { label: 'semper habebunt te coma, te citharae, te nostrae, laure, pharetrae (sempre avranno te, o alloro, la mia chioma, la mia cetra, la mia faretra)'} },
  { id: '5', position: { x: 0, y: 300 }, data: { label: 'tu ducibus Latiis aderis (tu sarai vicina ai condottieri latini)' } },
  { id: '6', position: { x: 0, y: 500 }, data: { label: 'cum laeta triumphum vox canet (quando una voce lieta/esultante canterà il trionfo)' } },
  { id: '7', position: { x: 200, y: 500 }, data: { label: 'et visent longas Capitolia pompas (e il Campidoglio vedrà lunghi cortei)' } },
];




const initialEdges = [{ id: 'e1-2', source: '2', target: '1' },{ id: 'e1-2', source: '1', target: '3' }, 



{ id: 'e1-2', source: '3', target: '4' ,     sourceHandle: 'a',}, 



{ id: 'e1-2', source: '3', target: '5' , sourceHandle: 'b',}, { id: 'e1-2', source: '5', target: '6' },  { id: 'e1-2', source: '7', target: '8' }, { id: 'e1-2', source: '7', target: '9' }];
const initialEdges2 = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e1-2', source: '3', target: '1' }, { id: 'e1-2', source: '4', target: '3' }, { id: 'e1-2', source: '5', target: '4' }, { id: 'e1-2', source: '6', target: '7' },  { id: 'e1-2', source: '7', target: '8' }];
const initialEdges3 = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e1-2', source: '2', target: '3' }, { id: 'e1-2', source: '1', target: '4' }, { id: 'e1-2', source: '4', target: '5' }, { id: 'e1-2', source: '4', target: '6' }];
const initialEdges4 = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e1-2', source: '1', target: '3' }, { id: 'e1-2', source: '5', target: '6' }, { id: 'e1-2', source: '6', target: '7' }];


export default function FavouriteProjects() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const [nodes2, setNodes2, onNodesChange2] = useNodesState(initialNodes2);
  const [edges2, setEdges2, onEdgesChange2] = useEdgesState(initialEdges2);


  const [nodes3, setNodes3, onNodesChange3] = useNodesState(initialNodes3);
  const [edges3, setEdges3, onEdgesChange3] = useEdgesState(initialEdges3);



  const [nodes4, setNodes4, onNodesChange4] = useNodesState(initialNodes4);
  const [edges4, setEdges4, onEdgesChange4] = useEdgesState(initialEdges4);


  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onConnect2 = useCallback((params) => setEdges2((eds) => addEdge2(params, eds)), [setEdges2]);
  const onConnect3 = useCallback((params) => setEdges3((eds) => addEdge3(params, eds)), [setEdges3]);
  const onConnect4 = useCallback((params) => setEdges4((eds) => addEdge4(params, eds)), [setEdges4]);



  return (
    <div>
    <div style={{ width: '100vw', height: '50vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    

    <div style={{ width: '100vw', height: '50vh' }}>
    <ReactFlow
      nodes={nodes2}
      edges={edges2}
      onNodesChange={onNodesChange2}
      onEdgesChange={onEdgesChange2}
      onConnect={onConnect2}
      fitView
    >
      <Controls />
      
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>


  <div style={{ width: '100vw', height: '50vh' }}>
    <ReactFlow
      nodes={nodes3}
      edges={edges3}
      onNodesChange={onNodesChange3}
      onEdgesChange={onEdgesChange3}
      onConnect={onConnect3}
      fitView
    >
      <Controls />
      
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>



  <div style={{ width: '100vw', height: '50vh' }}>
    <ReactFlow
      nodes={nodes4}
      edges={edges4}
      onNodesChange={onNodesChange4}
      onEdgesChange={onEdgesChange4}
      onConnect={onConnect4}
      fitView
    >
      <Controls />
      
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>




  </div>
    
  );
}
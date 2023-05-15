import  { useEffect, useState } from 'react';
import clients from '../../../../data/clients.js';
import { useParams } from 'react-router-dom';

const StudyCase = () => {
  const { clientName } = useParams()
  const [currentClient, setCurrentClient] = useState(undefined)

  useEffect(() => {
    const foundClient = clients.find((client) => client.name === clientName)
    setCurrentClient(foundClient)
  }, [clientName])

  return <div>
    { currentClient ? (
      <div className='container'>
        <h1>{currentClient.name}</h1>
        <h3>{currentClient.title}</h3>
        <p>{currentClient.description }</p>
      </div>
    ) : ( <p>Il n'y a pas de client</p> )}

    </div>
};

export default StudyCase;
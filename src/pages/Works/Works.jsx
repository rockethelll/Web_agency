import { Link, Outlet } from 'react-router-dom';
import clients from '../../../data/clients.js';

const Works = () => {
  return (
    <div className='container'>
      <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
      <nav>
        <ul>
          {clients.map((client) => {
            return (
              <li key={client.name}>
                <Link to={`/works/${client.name}-study-case`}>{client.name}</Link>
              </li>
            )
          })}
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Works;
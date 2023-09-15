import { Link } from 'react-router-dom';

export default function Pratos() {
  const listaPratos = [
    {
      prato: 'Prato 1',
      rota: '/pratos/1',
    },
    {
      prato: 'Prato 2',
      rota: '/pratos/2',
    },
    {
      prato: 'Prato 3',
      rota: '/pratos/3',
    },
    {
      prato: 'Prato 4',
      rota: '/pratos/4',
    },
    {
      prato: 'Prato 5',
      rota: '/pratos/5',
    },
    {
      prato: 'Prato 6',
      rota: '/pratos/6',
    },
    {
      prato: 'Prato 7',
      rota: '/pratos/7',
    },
  ];
  return (
    <ul>
      {listaPratos.map(({ prato, rota }) => (
        <li key={prato}>
          <Link to={rota}>{prato}</Link>
        </li>
      ))}
    </ul>
  );
}
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasaFoto from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import Prato from '../Prato/index';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  //Pega itens da lista (pratos) de maneira randomizada
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();
  function redirecionaVerMaisPrato(prato: typeof cardapio[0]){
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(prato => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button 
              className={styles.recomendado__botao}
              onClick={() => redirecionaVerMaisPrato(prato)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasaFoto} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - São Paulo
        </div>
      </div>
    </section>
  );
}
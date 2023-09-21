import { useNavigate, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';


export default function Prato() {
  const { id } = useParams();
  const prato = cardapio.find(prato => prato.id === Number(id));
  const navigate = useNavigate();
  if (!prato){
    return '';
  }
  console.log(prato);
  return (
    <>
      <button className={styles.voltar}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato} />
        </div>
      </section>
    </>
  );
}
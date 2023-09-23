import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';


export default function Prato() {
  const { id } = useParams();
  const prato = cardapio.find(prato => prato.id === Number(id));
  const navigate = useNavigate();
  if (!prato) {
    return <NotFound />;
  }
  console.log(prato);
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
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
        } />
      </Route>
    </Routes>
  );
}
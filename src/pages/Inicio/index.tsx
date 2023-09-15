import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  //Pega itens da lista (pratos) de maneira randomizada
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(prato => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
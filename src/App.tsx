import { useState } from "react";
import styles from "./App.module.css";
import poweredImg from "./assets/powered.png";
import { GridItem } from "./components/GridItem";
import { calculateImc, levels, LevelsProps } from "./helpers/imc";
import leftArrow from "./assets/leftarrow.png";

export function App() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<LevelsProps | null>(null);

  function handleCalculateButton() {
    if (height && weight) {
      console.log("Calculating");
      setToShow(calculateImc(weight, height));
    } else {
      alert("Digite Todos os campos");
    }
  }

  function handleBack() {
    setToShow(null);

    setHeight(0);
    setWeight(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="Logo b7web" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.containerLeftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (Em metros)"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (Em Kg)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.containerRightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((level, key) => {
                return <GridItem key={key} item={level} />;
              })}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img
                  src={leftArrow}
                  alt="left Arrow"
                  width={25}
                  onClick={handleBack}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { LevelsProps } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import downImg from "../../assets/down.png";
import upImg from "../../assets/up.png";

type Props = {
  item: LevelsProps;
};

export function GridItem({ item }: Props) {
  return (
    <div className={styles.Main} style={{ background: item.color }}>
      <div className={styles.GridIcon}>
        <img src={item.icon === "up" ? upImg : downImg} width={30} />
      </div>
      <div className={styles.Title}>{item.title}</div>

{
  item.yourImc && <div className={styles.yourImc}>Sei IMC é de {item.yourImc} Kg/m² </div>
}

      <div className={styles.Info}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}

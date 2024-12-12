import { GameContext } from "@/context/game-context";
import styles from "@/styles/splash.module.css";
import { useContext } from "react";
import { submitScore } from "@/services/submitGame";
import { useAuth } from "@/hooks/useAuth";
import { useUserStore } from "@/store/user";


export default function Splash({ heading = "You won!", type = "" }) {
  const { startGame } = useContext(GameContext);
  const { score } = useContext(GameContext);
  useAuth();
  const accessToken = useUserStore.getState().accessToken;

  const handleSubmit = async () => {
    const status = await submitScore(accessToken, score, '0')
    console.log(status)
    if (status == 200) {
      startGame();
    }
  }

  return (
    <div className={`${styles.splash} ${type === "won" && styles.win}`}>
      <div>
        <h1>{heading}</h1>
        <div className="buttons">
          <button className={styles.button} onClick={startGame} onTouchStart={startGame}>
            Play again
          </button>
          <button className={styles.button} onClick={handleSubmit} onTouchStart={handleSubmit}>
            Submit Score
          </button>
        </div>
      </div>
    </div>
  );
}

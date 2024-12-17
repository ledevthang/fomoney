import { GameContext } from "@/context/game-context";
import styles from "@/styles/splash.module.css";
import { useContext } from "react";
import { submitScore } from "@/services/submitGame";
import { useAuth } from "@/hooks/useAuth";
import { useUserStore } from "@/store/user";
import { useState } from 'react';
import { Modal, ConfigProvider, Spin } from 'antd';



export default function Splash({ heading = "You won!", type = "" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const { startGame } = useContext(GameContext);
  const { score } = useContext(GameContext);
  useAuth();
  const accessToken = useUserStore.getState().accessToken;

  const handleSubmit = async () => {
    setSubmitFailed(false);
    setIsLoading(true)
    const status = await submitScore(accessToken, score, '0')
    if (status == 200) {
      setIsLoading(false)
      setSubmitSuccess(true);
    } else{
      setIsLoading(false)
      setSubmitFailed(true);
    }
  }

  const handleLoading = () => {
    setIsLoading(false)
  }

  const handleNewGame = () => {
    setSubmitSuccess(false)
    startGame();
  }

  const closeSucceed = () =>{
    // setSubmitSuccess(false);
  }

  return (
    <div className={`${styles.splash} ${type === "won" && styles.win}`}>
      <div>
        <h1>{heading}</h1>
        <div className="buttons">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#ffffff',
              },
              components: {
                Modal: {
                  contentBg: '#937ef5',
                  borderRadiusLG: 20,
                  // boxShadow: '0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237);'
                },
                Spin: {
                  contentHeight: 500,
                }
              },
            }}
          >
              <Modal
                style={{ top: 200, }}
                // centered
                open={isLoading}
                onOk={handleLoading}
                onCancel={handleLoading}
                closeIcon={null}
                width={200}
                footer={[]}
              >
                <div className={styles.loading_content}>
                  <Spin className={styles.loading} />
                  <div className={styles.loading_text}>Loading...</div>
                </div>
              </Modal>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#ffffff',
              },
              components: {
                Modal: {
                  contentBg: '#937ef5',
                  borderRadiusLG: 20,
                  // boxShadow: '0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237);'
                },
                Spin: {
                  contentHeight: 500,
                }
              },
            }}
          >
              <Modal
                style={{ top: 200, }}
                // centered
                open={submitSuccess}
                onOk={closeSucceed}
                onCancel={closeSucceed}
                closeIcon={null}
                width={200}
                footer={[]}
              >
                <div className={styles.submit_pop}>
                  <div className={styles.submit_success}>Congrats!</div>
                  <div className={styles.submit_success}>Submit succeed!</div>
                  <button className={styles.button_NewGame} onClick={handleNewGame}>New Game</button>
                </div>
              </Modal>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#ffffff',
              },
              components: {
                Modal: {
                  contentBg: '#937ef5',
                  borderRadiusLG: 20,
                  // boxShadow: '0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237),0 0 5px rgb(205, 166, 237);'
                },
                Spin: {
                  contentHeight: 500,
                }
              },
            }}
          >
              <Modal
                style={{ top: 200, }}
                // centered
                open={submitFailed}
                onOk={closeSucceed}
                onCancel={closeSucceed}
                closeIcon={null}
                width={200}
                footer={[]}
              >
                <div className={styles.submit_pop}>
                  <div className={styles.submit_success}>Submit failed</div>
                  <div className={styles.submit_success}>Please try again</div>
                  <button className={styles.button_NewGame} onClick={handleSubmit}>Submit Score</button>
                </div>
              </Modal>
          </ConfigProvider>
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

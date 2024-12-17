/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import pillblue from "../../assets/images/pillblue.png";
import pillred from "../../assets/images/pillred.png";
import sonic from "../../assets/images/sonic-logo.png";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import "@/styles/style.css";
import { useAllowPlay } from "@/store/game";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/store/user";
import { AuthProvider } from "@prisma/client";

export default function Home() {
  const [openRules, setOpenRules] = useState(false);
  const [selectTeam, setSelectTeam] = useState("");
  const [userTeam, setUserTeam] = useState("");
  const [teamWarning, setTeamWarning] = useState(false);
  const allowPlayGame = useAllowPlay();
  const user = useUser();

  // const [showClaimLong, setShowClaimLong] = useState(true);

  const selectBlue = () => {
    if (userTeam) {
      return;
    }
    const redElement = document.querySelector(".pillred_2");
    const blueElement = document.querySelector(".pillblue_2");
    if (redElement instanceof HTMLElement) {
      redElement.classList.remove("selected");
    }
    if (blueElement instanceof HTMLElement) {
      blueElement.classList.add("selected");
    }
    setSelectTeam("chain");
  };

  const selectRed = () => {
    if (userTeam) {
      return;
    }
    const blueElement = document.querySelector(".pillblue_2");
    const redElement = document.querySelector(".pillred_2");
    if (blueElement instanceof HTMLElement) {
      blueElement.classList.remove("selected");
    }
    if (redElement instanceof HTMLElement) {
      redElement.classList.add("selected");
    }
    setSelectTeam("meme");
  };

  const handleGo = () => {
    if (!selectTeam) {
      alert("Please select team first");
      setTeamWarning(true);
      return;
    }
    // router.push(`/play${selectTeam}`)
    redirect(`/game/play${selectTeam}`);
  };

  const handleTeamWarning = () => {
    setTeamWarning(false);
  };

  if (!allowPlayGame && user?.provider === AuthProvider.solana) {
    return (
      <div className="container">
        <div className="homebody">
          <main>
            <div className="homebase">
              <div className="prize_pool">
                <Image
                  src={sonic}
                  className="prize_logo_sonic"
                  alt="sonic_logo"
                />
                <div className="prize_num_sonic">20480</div>
              </div>
              <p className="mt-8 text-center">
                You need to consume a KEY to play game
              </p>
              <div className="mt-4 flex justify-center">
                <Link href={"/"}>
                  <Button className="bg-yellow-500 text-lg">Play now</Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="homebody">
        <main>
          <div className="homebase">
            <div className="prize_pool">
              <Image
                src={sonic}
                className="prize_logo_sonic"
                alt="sonic_logo"
              />
              <div className="prize_num_sonic">20480</div>
            </div>
            {/* <div className='hp_tx_time'>
                            <div className='countdown_hp'>
                                <div className='title_time' onClick={handleWallet}>Connect Wallet</div>
                            </div>
                        </div> */}
          </div>
          <div id="purchase" className="purchase_container_sonic">
            <div className="purchase_middle_1_sonic">
              <div className="purchase_title">CHOOSE YOUR TEAM FIRST</div>
              <div className="pill_choose_sonic">
                <Image
                  src={pillblue}
                  onClick={selectBlue}
                  className="pillblue_2"
                  alt="pillblue"
                />
                <Image
                  src={pillred}
                  onClick={selectRed}
                  className="pillred_2"
                  alt="pillred"
                />
              </div>
              <div className="team_choose">
                <div className="team_name">CHAIN</div>
                <div className="team_name">MEME</div>
              </div>
              <button className="purchasse_middle_button_go" onClick={handleGo}>
                play
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// export default HomePageSonic;

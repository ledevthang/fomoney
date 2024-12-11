"use client";
import { redirect } from "next/navigation";
import Image from 'next/image';
import pillblue from '../../assets/images/pillblue.png';
import pillred from '../../assets/images/pillred.png';
import sonic from '../../assets/images/sonic-logo.png';
import { useState } from 'react';
import "@/styles/globals.css";
import '@/styles/style.css';





export default function Home() {
    const [openRules, setOpenRules] = useState(false);
    const [selectTeam, setSelectTeam] = useState('');
    const [userTeam, setUserTeam] = useState('')
    const [teamWarning, setTeamWarning] = useState(false);


    // const [showClaimLong, setShowClaimLong] = useState(true);



    const selectBlue = () => {
        if (userTeam) {
            return;
        }
        document.querySelector('.pillred_2').classList.remove('selected');
        document.querySelector('.pillblue_2').classList.add('selected');
        setSelectTeam('chain');
    }

    const selectRed = () => {

        if (userTeam) {
            return;
        }
        document.querySelector('.pillblue_2').classList.remove('selected');
        document.querySelector('.pillred_2').classList.add('selected');
        setSelectTeam('meme');
    }

    const handleGo = () => {

        if (!selectTeam) {
            setTeamWarning(true);
            return;
        }
        // router.push(`/play${selectTeam}`)
        redirect(`/game/play${selectTeam}`);
        return;
    }



    const handleTeamWarning = () => {
        setTeamWarning(false);
    }




    return (
        <div className='container'>
            <div className='homebody'>
                <main>
                    <div className='homebase'>
                        <div className='prize_pool'>
                            <Image src={sonic} className='prize_logo_sonic' alt='sonic_logo' />
                            <div className='prize_num_sonic'>20480</div>
                        </div>
                        {/* <div className='hp_tx_time'>
                            <div className='countdown_hp'>
                                <div className='title_time' onClick={handleWallet}>Connect Wallet</div>
                            </div>
                        </div> */}
                    </div>
                    <div id='purchase' className='purchase_container_sonic'>

                        <div className='purchase_middle_1_sonic'>
                            <div className='purchase_title'>CHOOSE YOUR TEAM FIRST</div>
                            <div className='pill_choose_sonic'>
                                <Image src={pillblue} onClick={selectBlue} className='pillblue_2' alt='pillblue' />
                                <Image src={pillred} onClick={selectRed} className='pillred_2' alt='pillred' />
                            </div>
                            <div className='team_choose'>
                                <div className='team_name'>CHAIN</div>
                                <div className='team_name'>MEME</div>
                            </div>
                            <button className='purchasse_middle_button_go' onClick={handleGo}>play</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}


// export default HomePageSonic;

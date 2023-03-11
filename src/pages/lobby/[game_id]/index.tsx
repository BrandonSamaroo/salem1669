import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faUserXmark } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button";

// TODO move to separate file
type Player = string;

export default function HomePage() {
    const router = useRouter();

    const gameID = router.query.game_id as string;

    // * State for all players in the current lobby
    const [players, setPlayers] = useState<Player[]>(["player1", "player2", "player3"]);

    // * Func to remove player from the lobby
    const removePlayer = (player: Player) => {
        setPlayers((prevState) => {
            // * Copy prev state
            const newState = [...prevState];

            // * Remove player at the index of the passed in player
            newState.splice(prevState.indexOf(player), 1);

            // * Return updated state
            return newState;
        });
    };

    return (
        <>
            <Head>
                <title>Lobby | Salem1669</title>
            </Head>

            <div className='mx-4 mt-8 flex flex-col items-center gap-8'>
                <span className='text-2xl'>Room Code</span>
                <div className='flex flex-wrap justify-center gap-4 sm:flex-nowrap'>
                    <input
                        className='w-4/5 rounded border border-primary/50 bg-inherit py-2 px-4 text-center text-onBg'
                        type='text'
                        defaultValue={gameID}
                    />
                    <Button onClick={() => navigator.clipboard.writeText(gameID)}>
                        <FontAwesomeIcon icon={faCopy} className='mr-2' />
                        Copy
                    </Button>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <span className='text-2xl'>Players in Game</span>
                    <div className='flex flex-col gap-4'>
                        {players.map((player) => (
                            <div key={players.indexOf(player)} className='flex flex-wrap items-center justify-center gap-4'>
                                <span className='rounded border border-primary px-8 py-1 text-lg'>{player}</span>
                                <Button btnStyle='danger' onClick={() => removePlayer(player)}>
                                    <FontAwesomeIcon icon={faUserXmark} className='mr-2' /> Kick
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <Button btnSize='large'>{players.length < 5 ? `Need ${5 - players.length} more players to start..` : "Start Game"}</Button>
            </div>
        </>
    );
}

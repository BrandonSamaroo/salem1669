import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button";
import { Timer } from "@/components/Timer";
import { TryalCard } from "@/components/game/cards/TryalCard";
import { AccusationCard } from "@/components/game/cards/AccusationCard";
import { effectIconMap, IPlayerDeck, PlayerDeck } from "@/components/game/PlayerDeck";

// TODO game state needs to include the playing cards that the players hold in their hand
const dummyData: IPlayerDeck[] = [
    {
        name: "Player 1",
        effects: ["Asylum"],
        accusations: 0,
        tryalCards: { Witch: 0, "Not A Witch": 2, Constable: 0 },
    },
    {
        name: "Player 2",
        effects: ["Matchmaker"],
        accusations: 4,
        tryalCards: { Witch: 0, "Not A Witch": 0, Constable: 0 },
    },
    {
        name: "Player 3",
        effects: ["Matchmaker"],
        accusations: 3,
        tryalCards: { Witch: 0, "Not A Witch": 0, Constable: 0 },
    },
    {
        name: "Player 4",
        effects: ["Black Cat", "Piety"],
        accusations: 6,
        tryalCards: { Witch: 0, "Not A Witch": 2, Constable: 1 },
    },
    {
        name: "Player 5",
        effects: ["Gavel"],
        accusations: 0,
        tryalCards: { Witch: 0, "Not A Witch": 1, Constable: 0 },
    },
    {
        name: "Player 6",
        accusations: 0,
        tryalCards: { Witch: 0, "Not A Witch": 0, Constable: 0 },
    },
];

export default function HomePage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Game | Salem1669</title>
            </Head>

            <div className='grid h-[90vh] w-full grid-cols-4 grid-rows-3 gap-4 p-4'>
                {/* // * Players in Game */}
                <div className='col-span-2 row-span-2 flex flex-wrap items-center justify-between gap-4 overflow-auto rounded-2xl border border-bg3 bg-bg2 p-4 md:justify-evenly lg:col-span-3'>
                    {dummyData.map((player, idx) => (
                        <PlayerDeck
                            key={idx}
                            name={player.name}
                            effects={player.effects}
                            accusations={player.accusations}
                            tryalCards={player.tryalCards}
                        />
                    ))}
                </div>

                {/* // * Global Game Parameters */}
                <div className='col-span-2 row-span-2 flex flex-col justify-around gap-6 overflow-auto rounded-2xl border border-bg3 bg-bg2 p-4 lg:col-span-1'>
                    <Button href='/' internal>
                        Leave Game
                        <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='ml-2' />
                    </Button>
                    <div className='flex items-center justify-center gap-6'>
                        <Timer countdown={60} />
                        <Button>End Turn</Button>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-4'>
                        {/* // TODO change to Game Deck */}
                        <TryalCard cardType='Constable' numberOfCards={1} />
                        <span>Conspiracy in Deck: No</span>
                        <Button>Draw 2</Button>
                    </div>
                </div>

                {/* // * Current Player Cards */}
                <div className='col-span-4 row-start-3 flex items-center justify-between gap-4 rounded-2xl border border-bg3 bg-bg2 p-4'>
                    {/* // * Tryal Cards */}
                    {/* // TODO remove overflow-hidden and make responsive */}
                    <div className='flex items-center justify-center gap-4 overflow-hidden'>
                        <TryalCard cardType='Constable' numberOfCards={1} />
                        <TryalCard cardType='Witch' numberOfCards={1} />
                        <TryalCard cardType='Not A Witch' numberOfCards={3} />
                    </div>
                    <span className='h-full w-1 bg-primary' />

                    {/* // * Accusation Cards */}
                    {/* // TODO remove overflow-hidden and make responsive */}
                    <div className='flex items-center justify-center gap-4 overflow-hidden'>
                        <AccusationCard cardType={1} numberOfCards={4} />
                        <AccusationCard cardType={3} numberOfCards={2} />
                        <AccusationCard cardType={7} numberOfCards={1} />
                    </div>
                    <span className='h-full w-1 bg-primary' />

                    {/* // * Playing Cards */}
                    {/* // TODO make components for Playing Cards */}
                    {/* // TODO remove overflow-hidden and make responsive */}
                    <div className='flex items-center justify-center overflow-hidden'>
                        <figure className='peer relative left-0 flex transition-all hover:z-10 peer-hover:left-12'>
                            <AccusationCard cardType={1} numberOfCards={4} />
                        </figure>
                        <figure className='peer relative left-0 -ml-16 flex transition-all hover:z-10 peer-hover:left-12'>
                            <AccusationCard cardType={3} numberOfCards={2} />
                        </figure>
                        <figure className='peer relative left-0 -ml-16 flex transition-all hover:z-10 peer-hover:left-12'>
                            <AccusationCard cardType={7} numberOfCards={1} />
                        </figure>
                        <figure className='peer relative left-0 -ml-16 flex transition-all hover:z-10 peer-hover:left-12'>
                            <AccusationCard cardType={7} numberOfCards={1} />
                        </figure>
                    </div>

                    {/* // * Effects on Current Player */}
                    {dummyData[3].effects && (
                        <>
                            <span className='h-full w-1 bg-primary' />
                            <div className='flex h-full flex-col justify-evenly'>
                                {dummyData[3].effects?.map((effect) => (
                                    <FontAwesomeIcon key={effect} icon={effectIconMap[effect]} className='text-3xl' />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

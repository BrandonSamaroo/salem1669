import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCat,
    faGavel,
    faHeartBroken,
    faPersonWalkingArrowRight,
    faShield,
    faShieldAlt,
    faShieldBlank,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button";
import { Timer } from "@/components/Timer";
import { TryalCard } from "@/components/game/cards/TryalCard";
import { AccusationCard } from "@/components/game/cards/AccusationCard";

export default function HomePage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Game | Salem1669</title>
            </Head>

            {/* <div className='grid h-[80vh] w-full grid-cols-4 grid-rows-[repeat(3,minmax(0,30%))] gap-4 p-4'> */}
            <div className='grid h-[90vh] w-full grid-cols-4 grid-rows-3 gap-4 p-4'>
                {/* <div className='grid h-full w-full grid-cols-4 grid-rows-3 gap-4 p-4'> */}
                {/* // * Players in Game */}
                <div className='col-span-2 row-span-2 flex flex-wrap items-center justify-evenly gap-4 overflow-auto rounded-2xl border border-bg3 bg-bg2 p-4 lg:col-span-3'>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
                    <span className='flex h-[200px] w-[400px] rounded-lg border border-bg3 bg-bg1 p-4'>Player Card</span>
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
                    <div className='flex items-center justify-center gap-4 overflow-hidden'>
                        <AccusationCard cardType={1} numberOfCards={4} />
                        <AccusationCard cardType={3} numberOfCards={2} />
                        <AccusationCard cardType={7} numberOfCards={1} />
                    </div>
                    <span className='h-full w-1 bg-primary' />

                    {/* // * Effects on Current Player */}
                    <div className='flex h-full flex-col justify-evenly'>
                        {[faCat, faHeartBroken, faGavel, faShield].map((icon) => (
                            <FontAwesomeIcon key={icon.iconName} icon={icon} className='text-3xl' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button";
import { TryalCard } from "@/components/game/cards/TryalCard";
import { AccusationCard } from "@/components/game/cards/AccusationCard";

export default function HomePage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Game | Salem1669</title>
            </Head>

            <div className='mx-4 mt-8 flex flex-col items-center gap-8'>
                <span className='text-2xl'>Game ID: {router.query.game_id}</span>
                <Button>
                    Leave Game
                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='ml-2' />
                </Button>
                <div className='flex gap-4'>
                    <TryalCard cardType='Constable' numberOfCards={1} />
                    <TryalCard cardType='Witch' numberOfCards={1} />
                    <TryalCard cardType='Not A Witch' numberOfCards={3} />
                </div>
                <div className='flex gap-4'>
                    <AccusationCard cardType={1} numberOfCards={4} />
                    <AccusationCard cardType={3} numberOfCards={2} />
                    <AccusationCard cardType={7} numberOfCards={1} />
                </div>
            </div>
        </>
    );
}

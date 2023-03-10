import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button";

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
            </div>
        </>
    );
}

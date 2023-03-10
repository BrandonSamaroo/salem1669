import Head from "next/head";

import { Button } from "@/components/Button";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Salem1669 | Home</title>
                <meta name='description' content='Site Description.' />
                {/* // TODO add meta tags, favicons and web manifest */}
            </Head>

            <div className='mx-4 mt-8 flex flex-col items-center gap-8'>
                <span className='text-2xl'>Enter a name</span>
                <input
                    className='w-4/5 rounded border border-primary/50 bg-inherit py-2 px-4 text-center text-onBg'
                    type='text'
                    placeholder='Default Name'
                />
                <span className='text-2xl'>and</span>
                <Button btnSize='large'>Create New Game</Button>
                <span className='text-2xl'>...or</span>
                <div className='flex flex-col items-center'>
                    <label htmlFor='room-id'>Enter 6-digit Room ID</label>
                    <input className='w-4/5 rounded border border-primary/50 bg-inherit py-2 px-4 text-center text-onBg' type='text' id='room-id' />
                </div>
                <Button btnSize='large'>Join Game</Button>
            </div>
        </>
    );
}

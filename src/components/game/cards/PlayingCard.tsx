import { PlayingCardType } from "@/types/PlayingCardType";

import { GameCard } from "./GameCard";

// TODO move to separate file
interface IPlayingCard {
    className?: string;
    onClick?: React.MouseEventHandler;
    cardType: PlayingCardType;
    numberOfCards: number;
}

export const PlayingCard = ({ className, onClick, cardType, numberOfCards }: IPlayingCard) => {
    return (
        <GameCard className={className} onClick={onClick}>
            <h1 className='text-center text-xl'>{cardType}</h1>
            <span className='absolute top-0 left-0 m-2 flex h-6 w-6 items-center justify-center rounded-full border'>{numberOfCards}</span>
            {/* //REMOVEME unneccessary and clutters the UI, remove if not being used  */}
            {/* <span className='rounded bg-primary px-2 py-1 text-onPrim'>Use Card</span> */}
        </GameCard>
    );
};

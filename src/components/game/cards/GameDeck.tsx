import { PlayingCardType } from "@/types/PlayingCardType";

import { GameCard } from "./GameCard";

// TODO move to separate file
interface IGameDeck {
    className?: string;
    onClick?: React.MouseEventHandler;
    cards: Array<PlayingCardType>;
}

export const GameDeck = ({ className, onClick, cards }: IGameDeck) => {
    return (
        <GameCard className={className} onClick={onClick}>
            <h1 className='text-center text-xl'>Game Deck</h1>
            <span className='absolute top-1 left-1 m-2 flex h-6 w-6 items-center justify-center rounded-full border border-primary'>
                {cards.length}
            </span>
        </GameCard>
    );
};

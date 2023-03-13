import { TryalCardType } from "@/types/TryalCardType";

// TODO move to separate file
interface ITryalCard {
    className?: string;
    onClick?: React.MouseEventHandler;
    cardType: TryalCardType;
    numberOfCards: number;
}

export const TryalCard = ({ className, onClick, cardType, numberOfCards }: ITryalCard) => {
    return (
        <div
            className={`${className} relative flex h-[200px] w-[125px] flex-col items-center justify-center gap-8 border border-primary bg-bg3`}
            onClick={onClick}
        >
            <h1 className='text-center text-xl'>Tryal Card</h1>
            <span className='absolute top-0 left-0 m-2 flex h-6 w-6 items-center justify-center rounded-full border'>{numberOfCards}</span>
            <span className='rounded bg-primary px-2 py-1 text-onPrim'>{cardType}</span>
        </div>
    );
};

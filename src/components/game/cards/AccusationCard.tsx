// TODO move to separate file
interface IAccusationsCard {
    className?: string;
    onClick?: React.MouseEventHandler;
    cardType: 1 | 3 | 7;
    numberOfCards: number;
}

export const AccusationCard = ({ className, onClick, cardType, numberOfCards }: IAccusationsCard) => {
    return (
        <div
            className={`${className} relative flex h-[200px] w-[125px] flex-col items-center justify-center gap-8 border border-primary bg-bg3`}
            onClick={onClick}
        >
            <h1 className='text-center text-xl'>Accusation Card</h1>
            <span className='absolute top-0 left-0 m-2 flex h-6 w-6 items-center justify-center rounded-full border'>{numberOfCards}</span>
            <span className='rounded bg-primary px-2 py-1 text-onPrim'>{cardType} Accusations</span>
        </div>
    );
};

// TODO move to separate file
interface IGameCard {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler;
}

export const GameCard = ({ children, className, onClick }: IGameCard) => {
    return (
        <figure
            // TODO need to make cards responsive
            // REMOVEME
            // className={`${className} relative flex h-[200px] w-[125px] flex-col items-center justify-center gap-8 rounded-md border-2 border-bg3 bg-bg1 hover:shadow-[0_0_30px_-20px_primary] hover:shadow-primary`}
            className={`${className} relative flex aspect-[2/3] w-[125px] flex-col items-center justify-center gap-8 rounded-md border-2 border-bg3 bg-bg1 hover:shadow-[0_0_30px_-20px_primary] hover:shadow-primary`}
            onClick={onClick}
            role='button'
        >
            {children}
        </figure>
    );
};

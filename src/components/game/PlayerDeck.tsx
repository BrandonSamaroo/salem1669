import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCat, faHeartBroken, faGavel, faShield, faCross } from "@fortawesome/free-solid-svg-icons";

// * Type of Tryal Cards
// TODO separate into it's own file for global referencing
type TryalCardType = "Not A Witch" | "Witch" | "Constable";

// TODO separate into it's own file for global referencing
export interface IPlayerDeck {
    name: string;
    effects?: Array<"Asylum" | "Black Cat" | "Gavel" | "Matchmaker" | "Piety">;
    accusations: number;
    tryalCards: { [key in TryalCardType]: number };
}

// TODO separate into it's own file for global referencing
// * Map the effect type to the icon to show for that effect
export const effectIconMap = {
    Asylum: faShield,
    "Black Cat": faCat,
    Gavel: faGavel,
    Matchmaker: faHeartBroken,
    Piety: faCross,
};

// TODO the player deck component should be responsive
// REMOVEME using max height with vh is a terrible idea and needs to be fixed, this was only for temp purposes to develop a feel for the game state requirements
export const PlayerDeck = ({ name, accusations, effects, tryalCards }: IPlayerDeck) => {
    return (
        <figure className='flex max-h-[25vh] min-w-[400px] items-center gap-4 rounded-lg border border-bg3 bg-bg1 p-4'>
            <FontAwesomeIcon icon={faUser} className='text-6xl' />
            <div className='flex h-full w-full flex-col items-center gap-4'>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <span className='flex w-full justify-around gap-2'>
                    {effects?.map((effect) => (
                        <FontAwesomeIcon key={effect} icon={effectIconMap[effect]} className='text-2xl text-primary' />
                    ))}
                </span>
                <span className='grid w-full grid-cols-2 grid-rows-2 place-items-center rounded border border-bg3 p-1'>
                    <div>Accusations</div>
                    <div>Lives</div>
                    <div>{accusations}</div>
                    <div>{5 - Object.values(tryalCards).reduce((returnItem, currentItem) => returnItem + currentItem, 0)}</div>
                </span>
                {/* // ? alternative UI view  */}
                {/* // REMOVEME if not being used */}
                {/* <span className='grid w-full grid-cols-2 grid-rows-1 place-items-center rounded border border-bg3 p-1'>
                    <div>Accusations</div>
                    <div>{accusations}</div>
                </span>
                <span className='grid w-full grid-cols-2 grid-rows-1 place-items-center rounded border border-bg3 p-1'>
                    <div>Lives</div>
                    <div>{5 - Object.values(tryalCards).reduce((returnItem, currentItem) => returnItem + currentItem, 0)}</div>
                </span> */}
                <div className='flex w-full flex-wrap justify-center gap-4 rounded border border-bg3 p-1 text-center'>
                    {Object.entries(tryalCards).map((entry, idx) => (
                        <span
                            key={idx}
                            className={`grid grid-cols-1 grid-rows-2 place-items-center ${entry[0] !== "Constable" && "border-r border-bg3 pr-4"}`}
                        >
                            <div>{entry[0]}</div>
                            <div>{entry[1]}</div>
                        </span>
                    ))}
                </div>
            </div>
        </figure>
    );
};

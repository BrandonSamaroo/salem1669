import { PlayingCardType } from "./PlayingCardType";
import { PlayingEffectType } from "./PlayingEffectType";
import { TryalCardType } from "./TryalCardType";

export type PlayerData = {
    name: string;
    effects?: PlayingEffectType[];
    accusations: number;
    playingCards: Array<{ cardType: PlayingCardType; numberOfCards: number }>;
    tryalCards: { [key in TryalCardType]: number };
};

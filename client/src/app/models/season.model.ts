import { Episode } from "./episode.model";

export interface Season {
    number: number;
    title: string;
    date: string;
    director: string;
    writers: string[];
    stars: string[];
    summary: string;
    episodes?: Episode[];
}
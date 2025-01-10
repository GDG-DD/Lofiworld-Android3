import type { Station } from '$lib/types';
import { objectify } from 'radashi';

//import { classical } from './classical';
//import { electronic } from './electronic';
//import { jazz } from './jazz';
import { lofi } from './lofi';
//import { pop } from './pop';
//import { rnb } from './rnb';

export const genres = {
	lofi,
	//classical,
	//jazz,
	//electronic,
	//pop,
	//rnb
};

export const christmasStations = [
	//jazz.stations.christmas1,
	//jazz.stations.christmas2,
	lofi.stations.christmas,
	//classical.stations.christmas
];

export const halloweenStations = [
	//electronic.stations.halloween1,
	//electronic.stations.halloween2,
	//electronic.stations.halloween3
];

export interface StationWithGenre extends Station {
	genre: keyof typeof genres;
}

const stations: StationWithGenre[] = Object.entries(genres).flatMap(([genre, genreObject]) => {
    // Check if genreObject and genreObject.stations are defined before accessing them
    if (!genreObject || !genreObject.stations) return []; 
    return Object.values(genreObject.stations).map((station) => ({
        ...station,
        genre: genre as keyof typeof genres, // Explicitly cast genre
    }));
});

export const stationMap = objectify(stations, (station) => station.trackID);

export const stationList = stations.filter((s) => !s.hidden);

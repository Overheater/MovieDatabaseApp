import apiService from './api.service';
// change this to the correct movie system
import { Movie } from '../models/movie';

let MovieService = class MovieService {
	constructor() {
	}
    
    getMovies() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieList())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.movies.forEach(element => {
                    items.push(new Movie(element.title, element.yearReleased));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
};

// Create a Singleton
const movieService = new MovieService();
export default movieService;
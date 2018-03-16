import apiService from './api.service';
// change this to the correct movie system
import { Movie } from '../models/movie';

let MovieService = class MovieService {
	constructor() {
	}
    
    getMovies() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPopMovieList())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.movies.forEach(data => {
                    items.push(new Movie(data.title, data.release_date));
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
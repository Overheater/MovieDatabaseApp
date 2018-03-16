import apiService from './api.service';
// change this to the correct movie system
import { Movie } from '../models/movie';
import { Genre } from '../models/Genre';

//ResizeMethod="resize"
//style
let MovieService = class MovieService {
	constructor() {
	}
    
    getGenreMovies(GID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenreMovieList(GID))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(data => {
                    items.push(new Movie(data.title, data.release_date,data.poster_path,data.popularity,data.overview,data.id ));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    // Call for the Genres on the discovery Page
    getGenres() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenresList())
            .then((response) => response.json())
            .then((responseJson) => {
                let genres = [];
                responseJson.genres.forEach(data => {
                    genres.push(new Genre(data.id, data.name));
                });
                resolve(genres);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    Getmovie(MID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieInfo(MID))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                resolve(new Movie(responseJson.title, responseJson.release_date,responseJson.poster_path,responseJson.popularity,responseJson.overview,responseJson.id));
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    };

};


// Create a Singleton
const movieService = new MovieService();
export default movieService;
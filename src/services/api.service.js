let ApiService = class ApiService {
	constructor() {
		this.apiProtocol = 'https:';
		this.apiHost = 'api.themoviedb.org';
	}

	/*
	* Utility methods/properties
	*/
	get apiLocation() {
		return `${this.apiProtocol}//${this.apiHost}`;
	}

	/*
	* API addresses
	*/
	getPopMovieList() {
		return `${this.apiLocation}/3/movie/popular?api_key=af10a1cc2cde7834ccd716f3aa89f4b8&language=en-US&page=1`;
	}
	getGenresList(){
		return `${this.apiLocation}/3/genre/movie/list?api_key=af10a1cc2cde7834ccd716f3aa89f4b8&language=en-US`;
	}
	getGenreMovieList(GID){
		return `${this.apiLocation}/3/discover/movie?api_key=af10a1cc2cde7834ccd716f3aa89f4b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GID}`;
	}
	getMovieInfo(MID){
		return `${this.apiLocation}/3/movie/${MID}?api_key=af10a1cc2cde7834ccd716f3aa89f4b8&language=en-US`;
	}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;
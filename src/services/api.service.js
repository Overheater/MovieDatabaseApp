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
	getPopMovieList(Pagenumb) {
		return `${this.apiLocation}/3/movie/popular?api_key=af10a1cc2cde7834ccd716f3aa89f4b8&language=en-US&page=${Pagenumb}`;
	}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;
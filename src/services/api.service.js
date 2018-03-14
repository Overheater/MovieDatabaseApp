let ApiService = class ApiService {
	constructor() {
		this.apiProtocol = 'https:';
		this.apiHost = 'facebook.github.io/react-native';
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
	getMovieList() {
		return `${this.apiLocation}/movies.json`;
	}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;
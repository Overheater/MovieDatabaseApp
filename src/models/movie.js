export class Movie {
    constructor(Title,Date,Poster,Pop,Over,ID) {
        this.title = Title;
        this.ReleaseDate = Date;
        this.posterpath = Poster;
        this.Popularity = Pop;
        this.overviewsub = Over.substring(0,200);
        this.overview=Over;
        this.MID=ID;
    }
    //for descriptions overview.substring(0,n) which will take token 0 to n

    getTitle() {
        return this.title;
    }

    getReleaseDate() {
        return this.ReleaseDate;
    }
    getPoster(){
        return 'https://image.tmdb.org/t/p/w1280'+this.posterpath;
    }
    getPop(){
        return this.Popularity;
    }
    getoverviewsub(){
        return this.overviewsub;
    }
    getID(){
        return this.MID
    }
}
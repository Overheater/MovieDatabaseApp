export class Genre {
    constructor(id, Name) {
        this.ID = id;
        this.gName = Name;
    }

    getID() {
        return this.ID;
    }

    getName() {
        return this.gName;
    }
}
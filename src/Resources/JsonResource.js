class JsonResource {
    constructor(request) {
        this.response = this.toArray(request);
        return this.response;
    }

    toArray(object){
        return object;
    }
}

module.exports = JsonResource;
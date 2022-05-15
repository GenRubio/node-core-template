class JsonResource {
    constructor(request) {
        this.response = this.toArray(request);
        return this.response;
    }

    toArray(object){
        
    }
}

module.exports = JsonResource;
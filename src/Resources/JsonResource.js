class JsonResource {
    constructor(request) {
        this.response = this.toArray(request);
        return this.response;
    }

    toArray(request){
        return request;
    }
}

module.exports = JsonResource;
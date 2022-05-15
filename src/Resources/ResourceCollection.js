class ResourceCollection {
    constructor(request) {
        this.response = this.toArray(request);
        return this.response;
    }

    toArray(request){
        return request;
    }
}

module.exports = ResourceCollection;
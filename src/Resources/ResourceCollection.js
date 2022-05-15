class ResourceCollection {
    constructor(request) {
        this.object = request;
        this.response = this.toArray(this.object);
        this.returnResource();
    }

    toArray(object){
        
    }

    returnResource() {
        return this.response;
    }
}

module.exports = ResourceCollection;
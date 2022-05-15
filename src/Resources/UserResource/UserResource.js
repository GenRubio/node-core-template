const JsonResource = require('../JsonResource');
class UserResource extends JsonResource {
    constructor(request) {
        super(request);
    }
    
    toArray(object) {
        return {
            name: object.name,
            email: object.email
        }
    }
}

module.exports = UserResource;
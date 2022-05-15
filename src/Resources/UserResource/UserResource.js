const JsonResource = require('../JsonResource');
class UserResource extends JsonResource {
    constructor(request) {
        super(request);
    }
    
    toArray(request) {
        return {
            name: request.name,
            email: request.email
        }
    }
}

module.exports = UserResource;
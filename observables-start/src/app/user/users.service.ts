import {Subject} from 'rxjs/Subject';
// Subject is Observer and Observable at the same time

export class UsersService {
    userActivated = new Subject();

}

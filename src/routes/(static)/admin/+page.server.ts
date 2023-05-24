import { error } from '@sveltejs/kit';
import { user, aid } from '../../../firebase';

/** @type {import('./$types').PageServerLoad} */
export async function load( ) {

    let _user = $user;
	
    user.subscribe((data) => {
		_user = data;
		console.log(_user);
	});

    if (_user?.uid == aid) {
        
        return
    }
    throw error(404, 'Not found');
}
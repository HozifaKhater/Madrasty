// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from '../../../../../core/reducers';
import { currentUser, Logout, User } from '../../../../../core/auth';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	// Public properties
	user$: Observable<User>;

	@Input() avatar: boolean = true;
	@Input() greeting: boolean = true;
	@Input() badge: boolean;
	@Input() icon: boolean;
	@Input() placement: string;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private store: Store<AppState>) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.user$ = this.store.pipe(select(currentUser));
		var langdir = localStorage.getItem('language')
		console.log(langdir)
	
		// console.log(this.placement)
		if (langdir =='ar')
		{
			this.placement="bottom-left"
		}
		else if (langdir =='en')
		{
			this.placement="bottom-right"
		}
		// if (langdir !== 'ar' && document.getElementsByTagName('div')[0].hasAttribute('placement')) {
		// 	document.getElementsByTagName('div')[0].setAttribute('placement', '"bottom-right');
		// } else if (langdir === 'ar' && !document.getElementsByTagName('div')[0].hasAttribute('placement')) {
		// 	document.getElementsByTagName('div')[0].setAttribute('placement', '"bottom-left');
		// }
	
	}

	/**
	 * Log out
	 */
	logout() {
		this.store.dispatch(new Logout());
	}
}

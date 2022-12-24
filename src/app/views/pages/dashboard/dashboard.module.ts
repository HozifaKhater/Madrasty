// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';
import { CalendarModule } from '../calendar/calendar.module';
// import { CalendarComponent } from '../calendar/calendar.component';
@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		CalendarModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
	],
	providers: [],
	declarations: [
		DashboardComponent

	]
})
export class DashboardModule {
}

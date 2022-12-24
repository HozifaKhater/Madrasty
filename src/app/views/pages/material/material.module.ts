import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';
import { AutocompleteComponent } from './formcontrols/autocomplete/autocomplete.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { MaterialPreviewModule } from '../../partials/content/general/material-preview/material-preview.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import {
	MatAutocompleteModule,
	MatNativeDateModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSliderModule,
	MatPaginatorModule,
	MatSortModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatToolbarModule,
	MatDividerModule,
	MatTabsModule,
	MatTableModule,
	MatTooltipModule,
	MatListModule,
	MatGridListModule,
	MatButtonToggleModule,
	MatBottomSheetModule,
	MatExpansionModule,
	MatMenuModule,
	MatTreeModule,
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetRef,
	MAT_DATE_LOCALE,
	MAT_DATE_FORMATS,

} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Form controls
import { DatepickerComponent } from './formcontrols/datepicker/datepicker.component';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import { FormfieldComponent } from './formcontrols/formfield/formfield.component';
import { InputComponent } from './formcontrols/input/input.component';
import { RadiobuttonComponent } from './formcontrols/radiobutton/radiobutton.component';
import { SelectComponent } from './formcontrols/select/select.component';
import { SliderComponent } from './formcontrols/slider/slider.component';
import { SlidertoggleComponent } from './formcontrols/slidertoggle/slidertoggle.component';
// Navigation
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
// Layout
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './layout/grid-list/grid-list.component';
import { ListComponent } from './layout/list/list.component';
import { MaterialTabsComponent } from './layout/material-tabs/material-tabs.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TreeComponent } from './layout/tree/tree.component';
import { DefaultFormsComponent } from './layout/default-forms/default-forms.component';
// Buttons & indicators
import { ButtonComponent } from './buttons-and-indicators/button/button.component';
import { ButtonToggleComponent } from './buttons-and-indicators/button-toggle/button-toggle.component';
import { ChipsComponent } from './buttons-and-indicators/chips/chips.component';
import { IconComponent } from './buttons-and-indicators/icon/icon.component';
import { ProgressBarComponent } from './buttons-and-indicators/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './buttons-and-indicators/progress-spinner/progress-spinner.component';
import { RipplesComponent } from './buttons-and-indicators/ripples/ripples.component';
// Popups & modals
import { DialogComponent, ModalComponent, Modal2Component, Modal3Component } from './popups-and-modals/dialog/dialog.component';
import { SnackbarComponent } from './popups-and-modals/snackbar/snackbar.component';
import { MaterialTooltipComponent } from './popups-and-modals/material-tooltip/material-tooltip.component';
import { BottomSheetComponent } from './popups-and-modals/bottom-sheet/bottom-sheet.component';
import { BottomSheetExampleComponent } from './popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component';
import { PizzaPartyComponent } from './popups-and-modals/snackbar/pizza-party.component';
// Data table
import { PaginatorComponent } from './data-table/paginator/paginator.component';
import { SortHeaderComponent } from './data-table/sort-header/sort-header.component';
import { MaterialTableComponent } from './data-table/material-table/material-table.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { EditorComponent } from '../editor/editor.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ECommerceModule } from '../apps/e-commerce/e-commerce.module';
import { UserManagementModule } from '../../pages/user-management/user-management.module';
import { HttpModule } from '@angular/http';
import { DepartmentDataService } from '../../../Services/DepartmentDataService';
import { SubjectDataService } from '../../../Services/SubjectDataService';
import { EmployeeDataService } from '../../../Services/EmployeeDataService';
import { ta7dier_masterDataService } from '../../../Services/Ta7dier_masterDataService';
import { corridorsDataService } from '../../../Services/CorridorsDataService';
import { MasterJobsDataService } from '../../../Services/MasterJobsDataService';
import { StudentDataService } from '../../../Services/StudentDataService';
import { ActivityDataService } from '../../../Services/ActivityDataService';
import { Corridor_supervisionDataService } from '../../../Services/Corridor_supervisionDataService';
import { GridListEntryComponent } from './layout/grid-list-entry/grid-list-entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { Evaluation_itemsDataService } from '../../../Services/Evaluation_itemsDataService';
import { Takeem_masterDataService } from '../../../Services/Takeem_masterDataService';
import { user_privDataService } from '../../../Services/user_privDataService ';
import { DelaysDataService } from '../../../Services/DelaysDataService';
import { Student_premDataService } from '../../../Services/Student_premDataService';
import { HolidaysDataService } from '../../../Services/HolidaysDataService';
import { School_dataDataService } from '../../../Services/School_dataDataService';
import { Logo_converterDataService } from '../../../Services/Logo_converterDataService';
import { CalendarModule } from '../calendar/calendar.module'; 
import { Calendargdwel_7ssModule } from '../calendar-gdwel_7ss/calendar-gdwel_7ss.module';
import { NchraDataService } from '../../../Services/NchraDataService';
import { LevelsDataService } from '../../../Services/LevelsDataService';
import { ClassesDataService } from '../../../Services/ClassesDataService';
import { Mra7lDataService } from '../../../Services/Mra7lDataService';
import { School_year_dataDataService } from '../../../Services/School_year_dataDataService';
import { Visit_typesDataService } from '../../../Services/visit_typesDataService';
import { VisitComponent } from './popups-and-modals/visits/visits.component';
import { VisitsDataService } from '../../../Services/visitsDataService';
import { TripsDataService } from '../../../Services/TripsDataService';
import { teams_and_groupsDataService } from '../../../Services/teams_and_groupsDataService';
import { divisionsDataService } from '../../../Services/divisionsDataService';
import { gdwel_7ssDataService } from '../../../Services/gdwel_7ssDataService';

import { AbsenceDataService } from '../../../Services/AbsenceDataService';
import { Twze3_studentsDataService } from '../../../Services/Twze3_studentsDataService';

import { MatSelectFilterModule } from 'mat-select-filter';
import { financial__fund_expensesDataService } from '../../../Services/financial__fund_expensesDataService';
import { student_mattersDataService } from '../../../Services/student_mattersDataService';
import { statusComponent } from './formcontrols/status/status.component';
import { statusDataService } from '../../../Services/StatusDataService';
import { mentality_inquiriesDataService } from '../../../Services/mentality_inquiriesDataService';
import { mentality_inquiriesComponent } from './formcontrols/mentality_inquiries/mentality_inquiries.component';
import { student_mattersComponent } from './formcontrols/student_matters/student_matters.component';
import { financial__fund_expensesComponent } from './formcontrols/financial__fund_expenses/financial__fund_expenses.component';
import { holidayComponent } from './popups-and-modals/holidays/holiday.component';
import { student_parent_meetingDataService } from '../../../Services/student_parent_meetingDataService ';
import { student_parent_meetingComponent } from './formcontrols/student_parent_meeting/student_parent_meeting.component';
import { DefinitionComponent } from './formcontrols/DefinitionPage/definition.component';
/*import { MatTimepickerModule } from 'mat-timepicker';*/
const routes: Routes = [
	{
		path: '',
		component: MaterialComponent,
		children: [
			{
				path: 'form-controls/autocomplete',
				component: AutocompleteComponent
			},
			{
				path: 'form-controls/checkbox',
				component: CheckboxComponent
            },
            {
                path: 'form-controls/DefinitionPage',
                component: DefinitionComponent
            },
			{
				path: 'form-controls/datepicker',
				component: DatepickerComponent
			},
			{
				path: 'form-controls/formfield',
				component: FormfieldComponent
			},
			{
				path: 'form-controls/input',
				component: InputComponent
            },
            {
                path: 'form-controls/mentality_inquiries',
                component: mentality_inquiriesComponent
            },
			{
				path: 'form-controls/radiobutton',
				component: RadiobuttonComponent
			},
			{
				path: 'form-controls/select',
				component: SelectComponent
			},
			{
				path: 'form-controls/slider',
				component: SliderComponent
			},
			{
				path: 'form-controls/slidertoggle',
				component: SlidertoggleComponent
            },
            
            {
                path: 'form-controls/student_parent_meeting',
                component: student_parent_meetingComponent
            },
			{
				path: 'navigation/menu',
				component: MenuComponent
			},
			{
				path: 'navigation/sidenav',
				component: SidenavComponent
			},
			{
				path: 'navigation/toolbar',
				component: ToolbarComponent
			},
			{
				path: 'layout/card',
				component: CardComponent
			},
			{
				path: 'layout/divider',
				component: DividerComponent
			},
			{
				path: 'layout/expansion-panel',
				component: ExpansionPanelComponent
			},
			{
				path: 'layout/grid-list',
				component: GridListComponent
			},
			{
				path: 'layout/grid-list-entry',
				component: GridListEntryComponent
			},
			{
				path: 'layout/list',
				component: ListComponent
			},
			{
				path: 'layout/tabs',
				component: MaterialTabsComponent
			},
			{
				path: 'layout/stepper',
				component: StepperComponent
			},
			{
				path: 'layout/default-forms',
				component: DefaultFormsComponent
			},
			{
				path: 'layout/tree',
				component: TreeComponent
			},
			{
				path: 'buttons-and-indicators/button',
				component: ButtonComponent
			},
			{
				path: 'buttons-and-indicators/button-toggle',
				component: ButtonToggleComponent
			},
			{
				path: 'buttons-and-indicators/chips',
				component: ChipsComponent
			},
			{
				path: 'buttons-and-indicators/icon',
				component: IconComponent
			},
			{
				path: 'buttons-and-indicators/progress-bar',
				component: ProgressBarComponent
			},
			{
				path: 'buttons-and-indicators/progress-spinner',
				component: ProgressSpinnerComponent
			},
			{
				path: 'buttons-and-indicators/ripples',
				component: RipplesComponent
			},
			{
				path: 'popups-and-modals/bottom-sheet',
				component: BottomSheetComponent
			},
			{
				path: 'popups-and-modals/dialog',
				component: DialogComponent
            },
            {
                path: 'popups-and-modals/holiday',
                component: holidayComponent
            },
			{
				path: 'popups-and-modals/snackbar',
				component: SnackbarComponent
            },
            {
                path: 'popups-and-modals/visits',
                component: VisitComponent
            },
			{
				path: 'popups-and-modals/tooltip',
				component: MaterialTooltipComponent
			},
			{
				path: 'data'
			},
			{
				path: 'data-table/paginator',
				component: PaginatorComponent
			},
			{
				path: 'data-table/sort-header',
				component: SortHeaderComponent
			},
			{
				path: 'data-table/table',
				component: MaterialTableComponent
            },
            
            {
                path: 'form-controls/status',
                component:statusComponent
            }
            ,

            {
                path: 'form-controls/student_matters',
                component: student_mattersComponent
            }
            ,

            {
                path: 'form-controls/financial__fund_expenses',
                component: financial__fund_expensesComponent
            }
		]
	},
];

@NgModule({
	imports: [
		// material modules
    /*		MatTimepickerModule,*/
        MatSelectFilterModule,
        Calendargdwel_7ssModule,
        CalendarModule,
		HttpModule,
		ECommerceModule,
		CKEditorModule,
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatListModule,
		MatSliderModule,
		MatCardModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatMenuModule,
		MatTabsModule,
		MatTooltipModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
		MatGridListModule,
		MatToolbarModule,
		MatBottomSheetModule,
		MatExpansionModule,
		MatDividerModule,
		MatSortModule,
		MatStepperModule,
		MatChipsModule,
		MatPaginatorModule,
		MatDialogModule,
		MatRippleModule,
		CoreModule,
		CommonModule,
		MatRadioModule,
		MatTreeModule,
		MatButtonToggleModule,
		PartialsModule,
		MaterialPreviewModule,
		FormsModule,
		ReactiveFormsModule,
		UserManagementModule,
		RouterModule.forChild(routes),
		 NgbModule
	],
	exports: [RouterModule,
		SortHeaderComponent],
	entryComponents: [
		PizzaPartyComponent,
		DialogComponent,
		ModalComponent,
		Modal2Component,
		Modal3Component,
		IconComponent,
		TreeComponent,
		BottomSheetExampleComponent
	],
	providers: [
		MatIconRegistry,
		{ provide: MatBottomSheetRef, useValue: {} },
		{ provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
		{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
		DepartmentDataService, SubjectDataService,
		EmployeeDataService, ta7dier_masterDataService,
		corridorsDataService, MasterJobsDataService,
		StudentDataService, ActivityDataService,
		Corridor_supervisionDataService, DatePipe,
        Evaluation_itemsDataService, Takeem_masterDataService, user_privDataService
        , DelaysDataService, Student_premDataService, HolidaysDataService,
        School_dataDataService,
        NchraDataService, LevelsDataService,
        ClassesDataService, Mra7lDataService, School_year_dataDataService, Visit_typesDataService, VisitsDataService,
        TripsDataService,
        teams_and_groupsDataService,
        divisionsDataService,
        gdwel_7ssDataService, AbsenceDataService, Twze3_studentsDataService
        , financial__fund_expensesDataService, student_mattersDataService, statusDataService, mentality_inquiriesDataService
        , student_parent_meetingDataService
    ],
    declarations: [
        DefinitionComponent,
        holidayComponent,
        financial__fund_expensesComponent,
        student_mattersComponent,
        mentality_inquiriesComponent,
        statusComponent,
		EditorComponent,
		MaterialComponent,
		AutocompleteComponent,
		CheckboxComponent,
		DatepickerComponent,
		FormfieldComponent,
		InputComponent,
		RadiobuttonComponent,
		SelectComponent,
		SliderComponent,
		SlidertoggleComponent,
		MenuComponent,
		SidenavComponent,
		ToolbarComponent,
		CardComponent,
		DividerComponent,
		ExpansionPanelComponent,
		GridListComponent,
		GridListEntryComponent,
		ListComponent,
		MaterialTabsComponent,
		StepperComponent,
		ButtonComponent,
		ButtonToggleComponent,
		ChipsComponent,
		IconComponent,
		ProgressBarComponent,
		ProgressSpinnerComponent,
		DialogComponent,
		ModalComponent,
		Modal2Component,
		Modal3Component,
		PizzaPartyComponent,
		SnackbarComponent,
		MaterialTooltipComponent,
		PaginatorComponent,
		SortHeaderComponent,
		MaterialTableComponent,
		DefaultFormsComponent,
		TreeComponent,
		BottomSheetComponent,
		BottomSheetExampleComponent,
        RipplesComponent,
        VisitComponent,
        student_parent_meetingComponent
     
	]
})
export class MaterialModule {
	public Editor = ClassicEditor;
}


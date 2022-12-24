export class MenuConfig {
    public defaults: any = {
        header: {
            self: {},
            items: [
                {
                    title: 'Dashboards',
                    root: true,
                    alignment: 'left',
                    page: '/dashboard',
                    translate: 'MENU.DASHBOARD',
                },
                //{
                //    title: 'Menu1',
                //    root: true,
                //    alignment: 'left',
                //    translate: 'Menu1',
                //    toggle: 'click',
                //    submenu: [
                //        {
                //            title: 'Menu 1',
                //            translate: 'Menu1',
                //            bullet: 'dot',
                //            icon: 'flaticon-interface-7',
                //            submenu: [
                //                {
                //                    title: 'Data Entry',

                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'Data Entry',
                //                            page: '/material/form-controls/autocomplete',
                //                            permission: 'accessToECommerceModule'
                //                        },
                //                        {
                //                            title: 'Departments Data',
                //                            page: '/material/form-controls/checkbox'
                //                        },
                //                        {
                //                            title: 'Activity Data',
                //                            page: '/material/form-controls/radiobutton'
                //                        },
                //                        {
                //                            title: 'Subjects',
                //                            page: '/material/form-controls/datepicker'
                //                        },
                //                        {
                //                            title: 'Jobs',
                //                            page: '/material/form-controls/formfield'
                //                        },
                //                        {
                //                            title: 'Employees Data',
                //                            page: '/material/form-controls/input'
                //                        },
                //                        {
                //                            title: 'Students Data',
                //                            page: '/material/form-controls/select'
                //                        },
                //                        {
                //                            title: "User's data",
                //                            page: '/material/form-controls/slider'
                //                        }
                //                        ,
                //                        {
                //                            title: "الحالات",
                //                            page: '/material/form-controls/status'
                //                        }
                //                        ,
                //                        {
                //                            title: "صندوق الاستفسارات النفسيه",
                //                            page: '/material/form-controls/mentality_inquiries'
                //                        }
                //                        ,
                //                        {
                //                            title: "الصندوق المالى",
                //                            page: '/material/form-controls/financial__fund_expenses'
                //                        }
                //                        ,
                //                        {
                //                            title: "امور خاصه بالطالب",
                //                            page: '/material/form-controls/student_matters'
                //                        }//,
                //                        //{
                //                        //	title: 'Slider Toggle',
                //                        //	page: '/material/form-controls/slidertoggle'
                //                        //}
                //                    ]
                //                },
                //                {
                //                    title: 'التقييمات',
                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'بنود التقييم',
                //                            page: '/material/navigation/menu'
                //                        },
                //                        {
                //                            title: 'تقييم فرق الخطة الاستراتيجية',
                //                            page: '/material/navigation/sidenav'
                //                        },
                //                        {
                //                            title: 'أداء تقييم',
                //                            page: '/material/navigation/toolbar'
                //                        }
                //                    ]
                //                },
                //                {
                //                    title: 'التحضيرات',
                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'كتابة التحضير',
                //                            page: '/material/layout/card'
                //                        },
                //                        {
                //                            title: 'بطاقة رعاية طالب متفوق',
                //                            page: '/material/layout/divider'
                //                        },

                //                        {
                //                            title: 'بطاقة متابعة طالب ضعيف',
                //                            page: '/material/layout/list'
                //                        },
                //                        {
                //                            title: 'غيابات/استئذانات المعلمين',
                //                            page: '/material/layout/grid-list'
                //                        },
                //                        {
                //                            title: 'ادخال غيابات/استئذانات المعلمين',
                //                            page: '/material/layout/grid-list-entry'
                //                        },
                //                        {
                //                            title: 'متابعة الحالة اليومية للهيئة الادارية و التعليمية',
                //                            page: '/material/layout/expansion-panel'
                //                        },

                //                        {
                //                            title: 'الأجنحة',
                //                            page: '/material/layout/tabs'
                //                        },
                //                        {
                //                            title: 'توزيع المشرفين',
                //                            page: '/material/layout/stepper'
                //                        },

                //                        {
                //                            title: 'اعتماد تحضير',
                //                            page: '/material/layout/tree'
                //                        }
                //                    ]
                //                },
                //                {
                //                    title: 'حالة التحضيرات',
                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'حالة التحضير',
                //                            page: '/material/buttons-and-indicators/button'
                //                        },
                //                        {
                //                            title: 'افادة تأخير عن بداية الدوام بالمرفق التعليمي',
                //                            page: '/material/buttons-and-indicators/button-toggle'
                //                        },
                //                        {
                //                            title: 'اذن خروج طالب برفقه ولي أمره',
                //                            page: '/material/buttons-and-indicators/chips'
                //                        },
                //                        {
                //                            title: 'نشره داخلية\خارجية',
                //                            page: '/material/buttons-and-indicators/icon'
                //                        },
                //                        {
                //                            title: 'الصفوف',
                //                            page: '/material/buttons-and-indicators/progress-bar'
                //                        },
                //                        {
                //                            title: 'الفصول',
                //                            page: '/material/buttons-and-indicators/progress-spinner'
                //                        },
                //                        {
                //                            title: 'المراحل',
                //                            page: '/material/buttons-and-indicators/ripples'
                //                        }
                //                    ]
                //                },
                //                {
                //                    title: 'بيانات المدرسة',
                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'بيانات المدرسة',
                //                            page: '/material/popups-and-modals/bottom-sheet'
                //                        },
                //                        {
                //                            title: 'جدول الحصص',
                //                            page: '/material/popups-and-modals/dialog'
                //                        },
                //                        {
                //                            title: 'اعياد و اجازات',
                //                            page: '/material/popups-and-modals/holiday'
                //                        },
                //                        {
                //                            title: 'Snackbar',
                //                            page: '/material/popups-and-modals/snackbar'
                //                        },
                //                        {
                //                            title: 'Tooltip',
                //                            page: '/material/popups-and-modals/tooltip'
                //                        }
                //                    ]
                //                },
                //                {
                //                    title: 'Data table',
                //                    bullet: 'dot',
                //                    submenu: [
                //                        {
                //                            title: 'تسجيل الغياب',
                //                            page: '/material/data-table/paginator'
                //                        },
                //                        {
                //                            title: 'توزيع الطلاب علي الفصول',
                //                            page: '/material/data-table/sort-header'
                //                        },
                //                        {
                //                            title: 'تسلسل الطلبة في الفصل',
                //                            page: '/material/data-table/table'
                //                        }
                //                    ]
                //                }
                //            ]
                //        },
                //        {
                //            title: 'Ng-Bootstrap',
                //            bullet: 'dot',
                //            icon: 'flaticon-web',
                //            submenu: [
                //                {
                //                    title: 'بيانات المكتبة',
                //                    page: '/ngbootstrap/accordion'
                //                },
                //                {
                //                    title: 'استعارة كتاب',
                //                    page: '/ngbootstrap/alert'
                //                },
                //                {
                //                    title: 'ارجاع كتاب',
                //                    page: '/ngbootstrap/buttons'
                //                },
                //                {
                //                    title: 'استعراض الكتب',
                //                    page: '/ngbootstrap/carousel'
                //                },
                //                {
                //                    title: 'رحله جديده',
                //                    page: '/ngbootstrap/collapse'
                //                },
                //                {
                //                    title: 'Subjects',
                //                    page: '/ngbootstrap/datepicker'
                //                },
                //                {
                //                    title: 'تشكيل فرق الخطة الاستراتيجية',
                //                    page: '/ngbootstrap/dropdown'
                //                },
                //                {
                //                    title: 'اجتماع جماعة',
                //                    page: '/ngbootstrap/modal'
                //                },
                //                {
                //                    title: 'جدول توزيع الملاحظين',
                //                    page: '/ngbootstrap/pagination'
                //                },
                //                {
                //                    title: 'اجتماع مشرفي الأجنحة',
                //                    page: '/ngbootstrap/popover'
                //                },
                //                {
                //                    title: 'Progressbar',
                //                    page: '/ngbootstrap/progressbar'
                //                },
                //                {
                //                    title: 'Rating',
                //                    page: '/ngbootstrap/rating'
                //                },
                //                {
                //                    title: 'Tabs',
                //                    page: '/ngbootstrap/tabs'
                //                },
                //                {
                //                    title: 'Timepicker',
                //                    page: '/ngbootstrap/timepicker'
                //                },
                //                {
                //                    title: 'Tooltips',
                //                    page: '/ngbootstrap/tooltip'
                //                },
                //                {
                //                    title: 'Typehead',
                //                    page: '/ngbootstrap/typehead'
                //                }
                //            ]
                //        },
                //    ]
                //},
                //{
                //    title: 'Applications',
                //    root: true,
                //    alignment: 'left',
                //    toggle: 'click',
                //    submenu: [
                //        {
                //            title: 'eCommerce',
                //            bullet: 'dot',
                //            icon: 'flaticon-business',
                //            permission: 'accessToECommerceModule',
                //            submenu: [
                //                {
                //                    title: 'Customers',
                //                    page: '/ecommerce/customers'
                //                },
                //                {
                //                    title: 'Products',
                //                    page: '/ecommerce/products'
                //                },
                //            ]
                //        },
                //        {
                //            title: 'User Management',
                //            bullet: 'dot',
                //            icon: 'flaticon-user',
                //            submenu: [
                //                {
                //                    title: 'متابعة الصيانة',
                //                    page: '/user-management/users'
                //                },
                //                {
                //                    title: 'Roles',
                //                    page: '/user-management/roles'
                //                }
                //            ]
                //        },
                //    ]
                //},
                //{
                //    title: 'Custom',
                //    root: true,
                //    alignment: 'left',
                //    toggle: 'click',
                //    submenu: [
                //        {
                //            title: 'Error Pages',
                //            bullet: 'dot',
                //            icon: 'flaticon2-list-2',
                //            submenu: [
                //                {
                //                    title: 'Error 1',
                //                    page: '/error/error-v1'
                //                },
                //                {
                //                    title: 'Error 2',
                //                    page: '/error/error-v2'
                //                },
                //                {
                //                    title: 'Error 3',
                //                    page: '/error/error-v3'
                //                },
                //                {
                //                    title: 'Error 4',
                //                    page: '/error/error-v4'
                //                },
                //                {
                //                    title: 'Error 5',
                //                    page: '/error/error-v5'
                //                },
                //                {
                //                    title: 'Error 6',
                //                    page: '/error/error-v6'
                //                },
                //            ]
                //        },
                //        {
                //            title: 'Wizard',
                //            bullet: 'dot',
                //            icon: 'flaticon2-mail-1',
                //            submenu: [
                //                {
                //                    title: 'Wizard 1',
                //                    page: '/wizard/wizard-1'
                //                },
                //                {
                //                    title: 'Wizard 2',
                //                    page: '/wizard/wizard-2'
                //                },
                //                {
                //                    title: 'Wizard 3',
                //                    page: '/wizard/wizard-3'
                //                },
                //                {
                //                    title: 'Wizard 4',
                //                    page: '/wizard/wizard-4'
                //                },
                //            ]
                //        },
                //    ]
                //},
            ]
        },
        aside: {
            self: {},
            items: [

                {
                    title: 'Dashboard',
                    root: true,
                    icon: 'flaticon2-architecture-and-city',
                    //page: '/dashboard',
                    translate: 'MENU.DASHBOARD',
                    //bullet: 'dot',

                    submenu: [
                        //{
                        //    title: 'Data Entry',
                        //    translate: 'Menu1',
                        //    page: '/material/layout/default-forms',
                        //    permission: 'accessToECommerceModule'
                        //},
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تعريفات',
                            page: '/material/form-controls/DefinitionPage'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الأقسام',
                            page: '/material/form-controls/checkbox'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الأنشطة',
                            page: '/material/form-controls/radiobutton'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'المواد',
                            page: '/material/form-controls/datepicker'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الوظائف',
                            page: '/material/form-controls/formfield'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الموظفين',
                            page: '/material/form-controls/input'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الطلاب',
                            page: '/material/form-controls/select'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "الصندوق المالى",
                            page: '/material/form-controls/financial__fund_expenses'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'كتابة التحضير',
                            page: '/material/layout/card'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'بطاقة رعاية طالب متفوق',
                            page: '/material/layout/divider'
                        },
                       

                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'مقترحات',
                            page: '/material/layout/suggestions'
                        }
                    ]

                },

                {
                    title: 'Layout Builder',
                    translate: 'Menu1',
                    root: true,
                    icon: 'flaticon2-expand',
                    //bullet: 'dot',
                    submenu: [
                        
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "المستخدمين",
                            page: '/material/form-controls/slider'
                        },
                       
                       
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'بطاقة متابعة طالب ضعيف',
                            page: '/material/layout/list'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'غيابات/استئذانات المعلمين',
                            page: '/material/layout/grid-list'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'ادخال غيابات/استئذانات المعلمين',
                            page: '/material/layout/grid-list-entry'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الحالة اليومية للهيئة الادارية و التعليمية',
                            page: '/material/layout/expansion-panel'
                        },


                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الأجنحة',
                            page: '/material/layout/tabs'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'توزيع المشرفين',
                            page: '/material/layout/stepper'
                        },

                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'اعتماد التحضير',
                            page: '/material/buttons-and-indicators/button'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تسجيل الغياب',
                            page: '/material/data-table/paginator'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'توزيع الطلاب علي الفصول',
                            page: '/material/data-table/sort-header'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تسلسل الطلبة في الفصل',
                            page: '/material/data-table/table'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الطلاب الفائقون دراسيا',
                            page: '/material/data-table/excellent-students'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الاختبارات والمقاييس',
                            page: '/material/data-table/tests-metric'
                        }
                    ]

                },
                { section: 'Components data' },
                {
                    title: 'Google Material',
                    translate: 'Menu1',
                    root: true,
                    //bullet: 'dot',
                    icon: 'flaticon2-browser-2',
                    submenu: [
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'بيانات المكتبة',
                            page: '/ngbootstrap/accordion'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'استعارة كتاب',
                            page: '/ngbootstrap/alert'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'ارجاع كتاب',
                            page: '/ngbootstrap/buttons'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'استعراض الكتب',
                            page: '/ngbootstrap/carousel'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'رحله جديده',
                            page: '/ngbootstrap/collapse'
                        },
                       
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'اجتماع جماعة',
                            page: '/ngbootstrap/modal'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'جدول توزيع الملاحظين',
                            page: '/ngbootstrap/pagination'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'اجتماع مشرفي الأجنحة',
                            page: '/ngbootstrap/popover'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الزيارات',
                            page: '/material/popups-and-modals/visits'
                        }
                    ]



                },


                {
                    title: 'Google Material',
                    translate: 'Menu1',
                    root: true,
                    //bullet: 'dot',
                    icon: 'flaticon2-browser-2',

                    submenu: [
                    
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'افادة تأخير عن بداية الدوام بالمرفق التعليمي',
                            page: '/material/buttons-and-indicators/button-toggle'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'اذن خروج طالب برفقه ولي أمره',
                            page: '/material/buttons-and-indicators/chips'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'نشره داخلية\خارجية',
                            page: '/material/buttons-and-indicators/icon'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الصفوف',
                            page: '/material/buttons-and-indicators/progress-bar'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'الفصول',
                            page: '/material/buttons-and-indicators/progress-spinner'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'المراحل',
                            page: '/material/buttons-and-indicators/ripples'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تغيير التشعيب',
                            page: '/material/data-table/change-branch'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'متابعة الصيانة',
                            page: '/user-management/users'
                        },

                       
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تشكيل شعبة تحسين الأداء',
                            page: '/ngbootstrap/datepicker'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تشكيل فرق الخطة الاستراتيجية',
                            page: '/ngbootstrap/dropdown'
                        },
                    ]





                },
                { section: 'Components' },
                {
                    title: 'Ng-Bootstrap',
                    root: true,
                    //bullet: 'dot',
                    icon: 'flaticon2-digital-marketing',
                    submenu: [


                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'بيانات المدرسة',
                            page: '/material/popups-and-modals/bottom-sheet'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'التقويم',
                            page: '/material/popups-and-modals/dialog'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'جدول الحصص',
                            page: '/material/popups-and-modals/dialog'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'اعياد و اجازات',
                            page: '/material/popups-and-modals/holiday'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'معلومات السنه الدراسيه',
                            page: '/material/popups-and-modals/snackbar'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تعريف الزياره',
                            page: '/material/popups-and-modals/tooltip'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "لقاء اولياء الامور",
                            page: '/material/form-controls/student_parent_meeting'
                        }
                    ]
                },

                {
                    title: 'eCommerce',
                    //bullet: 'dot',
                    icon: 'flaticon2-list-2',
                    root: true,
                    permission: 'accessToECommerceModule',
                    submenu: [
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'توزيع الطلبة حسب المستوى التحصيلى',
                            page: '/material/navigation/level_statistics'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'ما يستجد من اعمال',
                            page: '/material/form-controls/new_work'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'امور اخرى',
                            page: '/material/popups-and-modals/visits_manager'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'التوجيهات',
                            page: '/material/form-controls/guide'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'البيانات الاوليه و التاريخ الدراسى و الحاله الصحيه',
                            page: '/material/data-table/student_basic_data'
                        }



                    ]
                },
                //{ section: 'application' },
                {
                    title: 'User Management',
                    root: true,
                    //bullet: 'dot',
                    icon: 'flaticon2-user-outline-symbol',
                    submenu: [
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'التشعيب',
                            page: '/material/navigation/branch_stat'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'حالات الرسوب في أسابيع',
                            page: '/material/data-table/failure-cases'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'توزيع الطلبة حسب الصفوف',
                            page: '/material/navigation/disonlevel'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'خطة عمل الباحث النفسي للفصل الدراسي',
                            page: '/material/formcontrols/terms'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "امور خاصه بالطالب",
                            page: '/material/form-controls/student_matters'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "الحالات",
                            page: '/material/form-controls/status'
                        }
                        ,
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: "صندوق الاستفسارات النفسيه",
                            page: '/material/form-controls/mentality_inquiries'
                        }//,
                        //{
                        //	title: 'Slider Toggle',
                        //	page: '/material/form-controls/slidertoggle'
                        //}

                        , {
                            icon: 'flaticon2-open-box text-info',
                            title: 'بنود التقييم',
                            page: '/material/navigation/menu'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'تقييم فرق الخطة الاستراتيجية',
                            page: '/material/navigation/sidenav'
                        },
                        {
                            icon: 'flaticon2-open-box text-info',
                            title: 'أداء تقييم',
                            page: '/material/navigation/toolbar'
                        }
                    ]
                }

                //{
                //    title: 'Error Pages',
                //    root: true,
                //    //bullet: 'dot',
                //    icon: 'flaticon2-list-2',
                //    //submenu: [
                //    //    {
                //    //        title: 'Error 1',
                //    //        page: '/error/error-v1'
                //    //    },
                //    //    {
                //    //        title: 'Error 2',
                //    //        page: '/error/error-v2'
                //    //    },
                //    //    {
                //    //        title: 'Error 3',
                //    //        page: '/error/error-v3'
                //    //    },
                //    //    {
                //    //        title: 'Error 4',
                //    //        page: '/error/error-v4'
                //    //    },
                //    //    {
                //    //        title: 'Error 5',
                //    //        page: '/error/error-v5'
                //    //    },
                //    //    {
                //    //        title: 'Error 6',
                //    //        page: '/error/error-v6'
                //    //    },
                //    //]
                //}
                //,
                //{
                //    title: 'Wizard',
                //    root: true,
                //    //bullet: 'dot',
                //    icon: 'flaticon2-mail-1',
                //    //submenu: [
                //    //    {
                //    //        title: 'Wizard 1',
                //    //        page: '/wizard/wizard-1'
                //    //    },
                //    //    {
                //    //        title: 'Wizard 2',
                //    //        page: '/wizard/wizard-2'
                //    //    },
                //    //    {
                //    //        title: 'Wizard 3',
                //    //        page: '/wizard/wizard-3'
                //    //    },
                //    //    {
                //    //        title: 'Wizard 4',
                //    //        page: '/wizard/wizard-4'
                //    //    },
                //    //]
                //},
            ]
        },
    };
    public updatedCategories: any;

    public get configs(): any {
        //this.updatedCategories = this.defaults.aside.items.map(item => ({
        //    ...item,
        //    submenu: item.filter(submenu => submenu.id === "5")
        //}));
        //console.log("new func", this.defaults.aside.items)

        return this.defaults;
    }
}


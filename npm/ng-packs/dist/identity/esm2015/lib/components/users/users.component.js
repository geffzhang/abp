/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import { CreateUser, DeleteUser, GetUserById, GetUserRoles, GetUsers, UpdateUser, GetRoles, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
export class UsersComponent {
    /**
     * @param {?} confirmationService
     * @param {?} fb
     * @param {?} store
     */
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.trackByFn = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => Object.keys(item)[0] || index);
    }
    /**
     * @return {?}
     */
    get roleGroups() {
        return snq((/**
         * @return {?}
         */
        () => (/** @type {?} */ (((/** @type {?} */ (this.form.get('roleNames')))).controls))), []);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.get();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearch(value) {
        this.pageQuery.filter = value;
        this.get();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this.store.dispatch(new GetRoles()).subscribe((/**
         * @return {?}
         */
        () => {
            this.roles = this.store.selectSnapshot(IdentityState.getRoles);
            this.form = this.fb.group({
                userName: [this.selected.userName || '', [Validators.required, Validators.maxLength(256)]],
                email: [this.selected.email || '', [Validators.required, Validators.email, Validators.maxLength(256)]],
                name: [this.selected.name || '', [Validators.maxLength(64)]],
                surname: [this.selected.surname || '', [Validators.maxLength(64)]],
                phoneNumber: [this.selected.phoneNumber || '', [Validators.maxLength(16)]],
                lockoutEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
                twoFactorEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
                roleNames: this.fb.array(this.roles.map((/**
                 * @param {?} role
                 * @return {?}
                 */
                role => this.fb.group({
                    [role.name]: [!!snq((/**
                         * @return {?}
                         */
                        () => this.selectedUserRoles.find((/**
                         * @param {?} userRole
                         * @return {?}
                         */
                        userRole => userRole.id === role.id))))],
                })))),
            });
            if (!this.selected.userName) {
                this.form.addControl('password', new FormControl('', [Validators.required, Validators.maxLength(32)]));
            }
            else {
                this.form.addControl('password', new FormControl('', [Validators.maxLength(32)]));
            }
        }));
    }
    /**
     * @return {?}
     */
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    /**
     * @return {?}
     */
    onAdd() {
        this.selected = (/** @type {?} */ ({}));
        this.selectedUserRoles = (/** @type {?} */ ([]));
        this.openModal();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    onEdit(id) {
        this.store
            .dispatch(new GetUserById(id))
            .pipe(switchMap((/**
         * @return {?}
         */
        () => this.store.dispatch(new GetUserRoles(id)))), pluck('IdentityState'), take(1))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            this.selected = state.selectedUser;
            this.selectedUserRoles = state.selectedUserRoles;
            this.openModal();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        const { roleNames } = this.form.value;
        /** @type {?} */
        const mappedRoleNames = snq((/**
         * @return {?}
         */
        () => roleNames.filter((/**
         * @param {?} role
         * @return {?}
         */
        role => !!role[Object.keys(role)[0]])).map((/**
         * @param {?} role
         * @return {?}
         */
        role => Object.keys(role)[0]))), []);
        this.store
            .dispatch(this.selected.id
            ? new UpdateUser(Object.assign({}, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new CreateUser(Object.assign({}, this.form.value, { roleNames: mappedRoleNames })))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.modalBusy = false;
            this.isModalVisible = false;
        }));
    }
    /**
     * @param {?} id
     * @param {?} userName
     * @return {?}
     */
    delete(id, userName) {
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new DeleteUser(id));
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPageChange(data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    }
    /**
     * @return {?}
     */
    get() {
        this.loading = true;
        this.store
            .dispatch(new GetUsers(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
}
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-users',
                template: "<div class=\"row entry-row\">\n  <div class=\"col-auto\">\n    <h1 class=\"content-header-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h1>\n  </div>\n  <div class=\"col\">\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\">\n      <button\n        [abpPermission]=\"'AbpIdentity.Users.Create'\"\n        id=\"create-role\"\n        class=\"btn btn-primary\"\n        type=\"button\"\n        (click)=\"onAdd()\"\n      >\n        <i class=\"fa fa-plus mr-1\"></i> <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <label\n        ><input\n          type=\"search\"\n          class=\"form-control form-control-sm\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          (input.debounce)=\"onSearch($event.target.value)\"\n      /></label>\n    </div>\n    <p-table\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpIdentity\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\n            <abp-sort-order-icon #sortOrderIcon key=\"userName\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\n            <abp-sort-order-icon key=\"email\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\"></abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\n            <abp-sort-order-icon key=\"phoneNumber\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button\n                  [abpPermission]=\"'AbpIdentity.Users.Update'\"\n                  ngbDropdownItem\n                  (click)=\"onEdit(data.id)\"\n                >\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\n                </button>\n                <button\n                  [abpPermission]=\"'AbpIdentity.Users.ManagePermissions'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\n                >\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\n                </button>\n                <button\n                  [abpPermission]=\"'AbpIdentity.Users.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.userName)\"\n                >\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>{{ data.userName }}</td>\n          <td>{{ data.email }}</td>\n          <td>{{ data.phoneNumber }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-template #loaderRef\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\n    ></ng-template>\n\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n      <ngb-tabset>\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div class=\"form-group\">\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"user-name\" class=\"form-control\" formControlName=\"userName\" autofocus />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label>\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\n                ><span *ngIf=\"!selected.userName\"> * </span>\n                <input\n                  type=\"password\"\n                  id=\"password\"\n                  autocomplete=\"new-password\"\n                  class=\"form-control\"\n                  formControlName=\"password\"\n                />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\n                <input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"lockout-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"lockoutEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\n                }}</label>\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"two-factor-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"twoFactorEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\n                }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\n                class=\"custom-checkbox custom-control mb-2\"\n              >\n                <input\n                  type=\"checkbox\"\n                  name=\"Roles[0].IsAssigned\"\n                  value=\"true\"\n                  class=\"custom-control-input\"\n                  [attr.id]=\"'roles-' + i\"\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\n                />\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{ roles[i].name }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management [(visible)]=\"visiblePermissions\" providerName=\"U\" [providerKey]=\"providerKey\">\n</abp-permission-management>\n"
            }] }
];
/** @nocollapse */
UsersComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store }
];
UsersComponent.propDecorators = {
    modalContent: [{ type: ViewChild, args: ['modalContent', { static: false },] }]
};
tslib_1.__decorate([
    Select(IdentityState.getUsers),
    tslib_1.__metadata("design:type", Observable)
], UsersComponent.prototype, "data$", void 0);
tslib_1.__decorate([
    Select(IdentityState.getUsersTotalCount),
    tslib_1.__metadata("design:type", Observable)
], UsersComponent.prototype, "totalCount$", void 0);
if (false) {
    /** @type {?} */
    UsersComponent.prototype.data$;
    /** @type {?} */
    UsersComponent.prototype.totalCount$;
    /** @type {?} */
    UsersComponent.prototype.modalContent;
    /** @type {?} */
    UsersComponent.prototype.form;
    /** @type {?} */
    UsersComponent.prototype.selected;
    /** @type {?} */
    UsersComponent.prototype.selectedUserRoles;
    /** @type {?} */
    UsersComponent.prototype.roles;
    /** @type {?} */
    UsersComponent.prototype.visiblePermissions;
    /** @type {?} */
    UsersComponent.prototype.providerKey;
    /** @type {?} */
    UsersComponent.prototype.pageQuery;
    /** @type {?} */
    UsersComponent.prototype.isModalVisible;
    /** @type {?} */
    UsersComponent.prototype.loading;
    /** @type {?} */
    UsersComponent.prototype.modalBusy;
    /** @type {?} */
    UsersComponent.prototype.sortOrder;
    /** @type {?} */
    UsersComponent.prototype.sortKey;
    /** @type {?} */
    UsersComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBVyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFtQixTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUE4QixXQUFXLEVBQWEsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxHQUNULE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSzVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUF3Q3pCLFlBQW9CLG1CQUF3QyxFQUFVLEVBQWUsRUFBVSxLQUFZO1FBQXZGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQXRCM0csdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBSTNCLGNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBSXBDLFlBQU8sR0FBRyxLQUFLLENB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LFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBQyxDQUFDO2FBQzVDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQW5LRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9wVEFBcUM7YUFDdEM7Ozs7WUFyQlEsbUJBQW1CO1lBRVMsV0FBVztZQUMvQixLQUFLOzs7MkJBMEJuQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUFMNUM7SUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztzQ0FDeEIsVUFBVTs2Q0FBc0I7QUFHdkM7SUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO3NDQUM1QixVQUFVO21EQUFTOzs7SUFKaEMsK0JBQ3VDOztJQUV2QyxxQ0FDZ0M7O0lBRWhDLHNDQUMrQjs7SUFFL0IsOEJBQWdCOztJQUVoQixrQ0FBNEI7O0lBRTVCLDJDQUF1Qzs7SUFFdkMsK0JBQTJCOztJQUUzQiw0Q0FBMkI7O0lBRTNCLHFDQUFvQjs7SUFFcEIsbUNBQW9DOztJQUVwQyx3Q0FBd0I7O0lBRXhCLGlDQUFnQjs7SUFFaEIsbUNBQWtCOztJQUVsQixtQ0FBZTs7SUFFZixpQ0FBYTs7SUFFYixtQ0FBNkY7Ozs7O0lBTWpGLDZDQUFnRDs7Ozs7SUFBRSw0QkFBdUI7Ozs7O0lBQUUsK0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UsIFRvYXN0ZXIgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XG5pbXBvcnQge1xuICBDcmVhdGVVc2VyLFxuICBEZWxldGVVc2VyLFxuICBHZXRVc2VyQnlJZCxcbiAgR2V0VXNlclJvbGVzLFxuICBHZXRVc2VycyxcbiAgVXBkYXRlVXNlcixcbiAgR2V0Um9sZXMsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9pZGVudGl0eSc7XG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FicC11c2VycycsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2Vycy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFVzZXJzKVxuICBkYXRhJDogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbVtdPjtcblxuICBAU2VsZWN0KElkZW50aXR5U3RhdGUuZ2V0VXNlcnNUb3RhbENvdW50KVxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBtb2RhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIHNlbGVjdGVkOiBJZGVudGl0eS5Vc2VySXRlbTtcblxuICBzZWxlY3RlZFVzZXJSb2xlczogSWRlbnRpdHkuUm9sZUl0ZW1bXTtcblxuICByb2xlczogSWRlbnRpdHkuUm9sZUl0ZW1bXTtcblxuICB2aXNpYmxlUGVybWlzc2lvbnMgPSBmYWxzZTtcblxuICBwcm92aWRlcktleTogc3RyaW5nO1xuXG4gIHBhZ2VRdWVyeTogQUJQLlBhZ2VRdWVyeVBhcmFtcyA9IHt9O1xuXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcblxuICBzb3J0T3JkZXIgPSAnJztcblxuICBzb3J0S2V5ID0gJyc7XG5cbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QWJzdHJhY3RDb250cm9sPiA9IChpbmRleCwgaXRlbSkgPT4gT2JqZWN0LmtleXMoaXRlbSlbMF0gfHwgaW5kZXg7XG5cbiAgZ2V0IHJvbGVHcm91cHMoKTogRm9ybUdyb3VwW10ge1xuICAgIHJldHVybiBzbnEoKCkgPT4gKHRoaXMuZm9ybS5nZXQoJ3JvbGVOYW1lcycpIGFzIEZvcm1BcnJheSkuY29udHJvbHMgYXMgRm9ybUdyb3VwW10sIFtdKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0KCk7XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZSkge1xuICAgIHRoaXMucGFnZVF1ZXJ5LmZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0KCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Um9sZXMoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0Um9sZXMpO1xuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIHVzZXJOYW1lOiBbdGhpcy5zZWxlY3RlZC51c2VyTmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildXSxcbiAgICAgICAgZW1haWw6IFt0aGlzLnNlbGVjdGVkLmVtYWlsIHx8ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV1dLFxuICAgICAgICBuYW1lOiBbdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoNjQpXV0sXG4gICAgICAgIHN1cm5hbWU6IFt0aGlzLnNlbGVjdGVkLnN1cm5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLm1heExlbmd0aCg2NCldXSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFt0aGlzLnNlbGVjdGVkLnBob25lTnVtYmVyIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTYpXV0sXG4gICAgICAgIGxvY2tvdXRFbmFibGVkOiBbdGhpcy5zZWxlY3RlZC50d29GYWN0b3JFbmFibGVkIHx8ICh0aGlzLnNlbGVjdGVkLmlkID8gZmFsc2UgOiB0cnVlKV0sXG4gICAgICAgIHR3b0ZhY3RvckVuYWJsZWQ6IFt0aGlzLnNlbGVjdGVkLnR3b0ZhY3RvckVuYWJsZWQgfHwgKHRoaXMuc2VsZWN0ZWQuaWQgPyBmYWxzZSA6IHRydWUpXSxcbiAgICAgICAgcm9sZU5hbWVzOiB0aGlzLmZiLmFycmF5KFxuICAgICAgICAgIHRoaXMucm9sZXMubWFwKHJvbGUgPT5cbiAgICAgICAgICAgIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgICBbcm9sZS5uYW1lXTogWyEhc25xKCgpID0+IHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMuZmluZCh1c2VyUm9sZSA9PiB1c2VyUm9sZS5pZCA9PT0gcm9sZS5pZCkpXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLnVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdwYXNzd29yZCcsIG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMyKV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdwYXNzd29yZCcsIG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDMyKV0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgb25BZGQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIElkZW50aXR5LlVzZXJJdGVtO1xuICAgIHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMgPSBbXSBhcyBJZGVudGl0eS5Sb2xlSXRlbVtdO1xuICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gIH1cblxuICBvbkVkaXQoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VXNlckJ5SWQoaWQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VyUm9sZXMoaWQpKSksXG4gICAgICAgIHBsdWNrKCdJZGVudGl0eVN0YXRlJyksXG4gICAgICAgIHRha2UoMSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogSWRlbnRpdHkuU3RhdGUpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVXNlcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJSb2xlcyA9IHN0YXRlLnNlbGVjdGVkVXNlclJvbGVzO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xuXG4gICAgY29uc3QgeyByb2xlTmFtZXMgfSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICBjb25zdCBtYXBwZWRSb2xlTmFtZXMgPSBzbnEoXG4gICAgICAoKSA9PiByb2xlTmFtZXMuZmlsdGVyKHJvbGUgPT4gISFyb2xlW09iamVjdC5rZXlzKHJvbGUpWzBdXSkubWFwKHJvbGUgPT4gT2JqZWN0LmtleXMocm9sZSlbMF0pLFxuICAgICAgW10sXG4gICAgKTtcblxuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxuICAgICAgICAgID8gbmV3IFVwZGF0ZVVzZXIoe1xuICAgICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICByb2xlTmFtZXM6IG1hcHBlZFJvbGVOYW1lcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlVXNlcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBtYXBwZWRSb2xlTmFtZXMsXG4gICAgICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsQnVzeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXG4gICAgICAud2FybignQWJwSWRlbnRpdHk6OlVzZXJEZWxldGlvbkNvbmZpcm1hdGlvbk1lc3NhZ2UnLCAnQWJwSWRlbnRpdHk6OkFyZVlvdVN1cmUnLCB7XG4gICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFt1c2VyTmFtZV0sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBUb2FzdGVyLlN0YXR1cykgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBUb2FzdGVyLlN0YXR1cy5jb25maXJtKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVXNlcihpZCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShkYXRhKSB7XG4gICAgdGhpcy5wYWdlUXVlcnkuc2tpcENvdW50ID0gZGF0YS5maXJzdDtcbiAgICB0aGlzLnBhZ2VRdWVyeS5tYXhSZXN1bHRDb3VudCA9IGRhdGEucm93cztcblxuICAgIHRoaXMuZ2V0KCk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3JlXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFVzZXJzKHRoaXMucGFnZVF1ZXJ5KSlcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
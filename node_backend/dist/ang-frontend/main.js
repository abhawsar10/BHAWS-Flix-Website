(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Q:\USC\Classes\CSCI 571 Web Tech\USC Films Website\ang-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "06+7":
/*!******************************************************!*\
  !*** ./src/app/now-playing/now-playing.component.ts ***!
  \******************************************************/
/*! exports provided: NowPlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingComponent", function() { return NowPlayingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_page_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page-info.service */ "Dm+6");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/watch/movie", a1]; };
function NowPlayingComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r4 = ctx_r6.index;
    const title_r3 = ctx_r6.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r5.ids[i_r4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.images[i_r4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](title_r3);
} }
function NowPlayingComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NowPlayingComponent_ngb_carousel_2_1_ng_template_0_Template, 7, 5, "ng-template", 7);
} }
function NowPlayingComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NowPlayingComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.titles);
} }
function NowPlayingComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r9 = ctx_r11.index;
    const title_r8 = ctx_r11.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r10.ids[i_r9]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.images[i_r9], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](title_r8);
} }
function NowPlayingComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NowPlayingComponent_ngb_carousel_4_1_ng_template_0_Template, 6, 5, "ng-template", 7);
} }
function NowPlayingComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NowPlayingComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.titles);
} }
class NowPlayingComponent {
    constructor(config, HomePageInfoService, breakpointObserver) {
        this.HomePageInfoService = HomePageInfoService;
        this.breakpointObserver = breakpointObserver;
        this.mobile = false;
        this.now_playing = [];
        this.titles = [];
        this.images = [];
        this.ids = [];
        config.interval = 1000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.pauseOnFocus = true;
        config.animation = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.breakpointObserver
                .observe(['(min-width: 800px)'])
                .subscribe((state) => {
                if (state.matches) {
                    this.mobile = false;
                }
                else {
                    this.mobile = true;
                }
            });
            yield this.HomePageInfoService.sendGetRequest("now_playing").subscribe((data) => {
                this.now_playing = data["now_playing"];
                var i;
                for (i = 0; i < this.now_playing.length; i++) {
                    this.images[i] = this.now_playing[i]["backdrop_path"];
                    this.titles[i] = this.now_playing[i]["title"];
                    this.ids[i] = this.now_playing[i]["id"];
                }
                //this.stylecarousels();
            });
        });
    }
}
NowPlayingComponent.ɵfac = function NowPlayingComponent_Factory(t) { return new (t || NowPlayingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_page_info_service__WEBPACK_IMPORTED_MODULE_3__["HomePageInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
NowPlayingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NowPlayingComponent, selectors: [["app-now-playing"]], decls: 5, vars: 2, consts: [["id", "bigcontainer"], ["id", "smallcontainer1"], ["class", "now_playing_carousel", 3, "interval", 4, "ngIf"], ["id", "smallcontainer2"], ["class", "now_playing_carousel_mobile", 3, "interval", 4, "ngIf"], [1, "now_playing_carousel", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["id", "imag_cont", 1, "picsum-img-wrapper", "np_custom-card"], [3, "routerLink"], ["alt", "Random first slide", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "now_playing_carousel_mobile", 3, "interval"], [1, "overlay", 2, "opacity", "1"], ["id", "capformobile", 1, "carousel-caption"]], template: function NowPlayingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NowPlayingComponent_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NowPlayingComponent_ngb_carousel_4_Template, 2, 2, "ngb-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images && !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images && ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["#bigcontainer[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n}\r\n#smallcontainer1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    width: 72%;\r\n    margin: auto;\r\n}\r\n#smallcontainer2[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    width: 85%;\r\n    margin: auto;\r\n}\r\n#imag_cont[_ngcontent-%COMP%]{\r\n    max-height: 439px;\r\n\r\n}\r\n#imag_cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.now_playing_carousel[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n\r\n}\r\n.now_playing_carousel_mobile[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n\r\n}\r\n.np_custom-card[_ngcontent-%COMP%]{ \r\n    cursor: pointer;\r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgb(0,0,0,0);\r\n}\r\n.now_playing_carousel[_ngcontent-%COMP%]:hover   .np_custom-card[_ngcontent-%COMP%]{\r\n    transform: scale(1.1);\r\n}\r\n.now_playing_carousel[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n.now_playing_carousel_mobile[_ngcontent-%COMP%]:hover   .np_custom-card[_ngcontent-%COMP%]{\r\n    transform: scale(1.1);\r\n}\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    left: 5%;\r\n    text-align: left;\r\n    right: auto;\r\n    padding:5px;\r\n    padding-left: 50px;\r\n    padding-bottom: 40px;;\r\n}\r\n#capformobile[_ngcontent-%COMP%]{\r\n    left: 5%;\r\n    text-align: left;\r\n    right: auto;\r\n    padding-left: 10px;\r\n    padding-bottom: 5px;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-image: linear-gradient(to top, rgba(0,0,0,1) 15% , rgba(0,0,0,0));\r\n}\r\n.now_playing_carousel_mobile[_ngcontent-%COMP%]  .carousel-indicators{\r\n    display: none;\r\n}\r\n.now_playing_carousel_mobile[_ngcontent-%COMP%]  .carousel-control-prev-icon{\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n.now_playing_carousel_mobile[_ngcontent-%COMP%]  .carousel-control-next-icon{\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n.now_playing_carousel[_ngcontent-%COMP%]  .carousel-control-prev{\r\n    left: -30px;\r\n}\r\n.now_playing_carousel[_ngcontent-%COMP%]  .carousel-control-next{\r\n    right: -30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdy1wbGF5aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBR0E7SUFDSSxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksYUFBYTs7QUFFakI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDRFQUE0RTtBQUNoRjtBQUdBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6Im5vdy1wbGF5aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmlnY29udGFpbmVye1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3NtYWxsY29udGFpbmVyMXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDcyJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jc21hbGxjb250YWluZXIye1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiNpbWFnX2NvbnR7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MzlweDtcclxuXHJcbn1cclxuI2ltYWdfY29udCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWw6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxufVxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWxfbW9iaWxlOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5ucF9jdXN0b20tY2FyZHsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDApO1xyXG59XHJcblxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWw6aG92ZXIgLm5wX2N1c3RvbS1jYXJke1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5ub3dfcGxheWluZ19jYXJvdXNlbDpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWxfbW9iaWxlOmhvdmVyIC5ucF9jdXN0b20tY2FyZHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7O1xyXG59XHJcbiNjYXBmb3Jtb2JpbGV7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEpIDE1JSAsIHJnYmEoMCwwLDAsMCkpO1xyXG59XHJcblxyXG5cclxuLm5vd19wbGF5aW5nX2Nhcm91c2VsX21vYmlsZTo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5vd19wbGF5aW5nX2Nhcm91c2VsX21vYmlsZTo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb257XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWxfbW9iaWxlOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbntcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4ubm93X3BsYXlpbmdfY2Fyb3VzZWw6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuICAgIGxlZnQ6IC0zMHB4O1xyXG59XHJcbi5ub3dfcGxheWluZ19jYXJvdXNlbDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dm+6":
/*!*******************************************!*\
  !*** ./src/app/home-page-info.service.ts ***!
  \*******************************************/
/*! exports provided: HomePageInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageInfoService", function() { return HomePageInfoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HomePageInfoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //private API_SERVER = "http://127.0.0.1:8080/apis/endpoints";
        this.API_SERVER = "https://abhawsar.uc.r.appspot.com/apis/endpoints";
        this.PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                q: ''
            }
        });
    }
    sendGetRequest(route) {
        return this.httpClient.get(`${this.API_SERVER}/${route}`);
    }
    search_movie_endpoint(term) {
        if (term.length == 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.httpClient.get(this.API_SERVER + "/search", { params: this.PARAMS.set('q', term) });
    }
}
HomePageInfoService.ɵfac = function HomePageInfoService_Factory(t) { return new (t || HomePageInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HomePageInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HomePageInfoService, factory: HomePageInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../now-playing/now-playing.component */ "06+7");
/* harmony import */ var _continue_watching_carousel_continue_watching_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../continue-watching-carousel/continue-watching-carousel.component */ "YEqx");
/* harmony import */ var _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page-carousels/home-page-carousels.component */ "JPjc");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 8, vars: 0, consts: [["carousel_title", "Popular Movies", "data_recd", "pop_movies", "media_type", "movie"], ["carousel_title", "Top Rated Movies", "data_recd", "top_movies", "media_type", "movie"], ["carousel_title", "Trending Movies", "data_recd", "trending_movies", "media_type", "movie"], ["carousel_title", "Popular TV Shows", "data_recd", "pop_tv", "media_type", "tv"], ["carousel_title", "Top Rated TV Shows", "data_recd", "top_tv", "media_type", "tv"], ["carousel_title", "Trending TV Shows", "data_recd", "trending_tv", "media_type", "tv"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-now-playing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-continue-watching-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-page-carousels", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-page-carousels", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-home-page-carousels", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-home-page-carousels", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-home-page-carousels", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-home-page-carousels", 5);
    } }, directives: [_now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_1__["NowPlayingComponent"], _continue_watching_carousel_continue_watching_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ContinueWatchingCarouselComponent"], _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_3__["HomePageCarouselsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "JPjc":
/*!**********************************************************************!*\
  !*** ./src/app/home-page-carousels/home-page-carousels.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomePageCarouselsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageCarouselsComponent", function() { return HomePageCarouselsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_page_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page-info.service */ "Dm+6");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function HomePageCarouselsComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.carousel_title);
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r14.index;
    const group_r5 = ctx_r14.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r8.media_type, ctx_r8.idFormatted[i_r6][0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.titlesFormatted[i_r6][0]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r15.index;
    const group_r5 = ctx_r15.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r9.media_type, ctx_r9.idFormatted[i_r6][1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.titlesFormatted[i_r6][1]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r16.index;
    const group_r5 = ctx_r16.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r10.media_type, ctx_r10.idFormatted[i_r6][2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.titlesFormatted[i_r6][2]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r17.index;
    const group_r5 = ctx_r17.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r11.media_type, ctx_r11.idFormatted[i_r6][3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.titlesFormatted[i_r6][3]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r18.index;
    const group_r5 = ctx_r18.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r12.media_type, ctx_r12.idFormatted[i_r6][4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.titlesFormatted[i_r6][4]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r19.index;
    const group_r5 = ctx_r19.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r13.media_type, ctx_r13.idFormatted[i_r6][5]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[5], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.titlesFormatted[i_r6][5]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_2_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_4_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_6_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_8_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_10_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_a_12_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[5]);
} }
function HomePageCarouselsComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePageCarouselsComponent_ngb_carousel_2_1_ng_template_0_Template, 13, 6, "ng-template", 6);
} }
function HomePageCarouselsComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePageCarouselsComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nofocus nofocus", ctx_r1.data_recd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.imagesFormatted);
} }
function HomePageCarouselsComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.carousel_title);
} }
function HomePageCarouselsComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r23 = ctx_r25.index;
    const image_r22 = ctx_r25.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r24.media_type, ctx_r24.id[i_r23]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.titles[i_r23]);
} }
function HomePageCarouselsComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePageCarouselsComponent_ngb_carousel_4_1_ng_template_0_Template, 7, 6, "ng-template", 6);
} }
function HomePageCarouselsComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePageCarouselsComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nofocusmobile nofocusmobile", ctx_r3.data_recd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.images);
} }
class HomePageCarouselsComponent {
    constructor(config, HomePageInfoService, breakpointObserver) {
        this.HomePageInfoService = HomePageInfoService;
        this.breakpointObserver = breakpointObserver;
        this.carousel_title = "Popular Movies";
        this.data_recd = "pop_movies";
        this.media_type = "movie";
        this.media_id = "";
        this.mobile = false;
        //images = [0,1,2,3,4,5,6,7,8,9,10,11].map(() => `https://picsum.photos/180/270?random&t=${Math.random()}`);
        this.imagesFormatted = [[]];
        this.idFormatted = [[]];
        this.titlesFormatted = [[]];
        this.response = [];
        this.titles = [];
        this.images = [];
        this.id = [];
        config.interval = 10000000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.pauseOnFocus = true;
        config.animation = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.breakpointObserver
                .observe(['(min-width: 600px)'])
                .subscribe((state) => {
                if (state.matches) {
                    this.mobile = false;
                }
                else {
                    this.mobile = true;
                }
            });
            yield this.HomePageInfoService.sendGetRequest(this.data_recd + "/" + this.media_id).subscribe((data) => {
                var ele = document.getElementById("bigcontainer" + this.data_recd);
                ele.style.display = "block";
                this.response = data[this.data_recd];
                if (this.response == undefined) {
                    var ele = document.getElementById("bigcontainer" + this.data_recd);
                    ele.style.display = "none";
                    console.log("No Data found in ", this.data_recd, " carousel ");
                }
                else if (this.response.length == 0) {
                    var ele = document.getElementById("bigcontainer" + this.data_recd);
                    ele.style.display = "none";
                    console.log("No Data found in ", this.data_recd, " carousel ");
                }
                else {
                    for (var i = 0; i < this.response.length; i++) {
                        this.images[i] = this.response[i]["poster_path"];
                        this.id[i] = this.response[i]["id"];
                        if (this.media_type == "movie") {
                            this.titles[i] = this.response[i]["title"];
                        }
                        else {
                            this.titles[i] = this.response[i]["name"];
                        }
                    }
                    this.formatimages();
                    //this.stylecarousels();
                }
            });
        });
    }
    stylecarousels() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mobile) {
                setTimeout(yield function () { }, 100);
                var clas = yield document.querySelectorAll(".nofocusmobile" + this.data_recd + " .carousel-indicators");
                var clasr = yield document.querySelectorAll(".nofocusmobile" + this.data_recd + " .carousel-control-next");
                var clasl = yield document.querySelectorAll(".nofocusmobile" + this.data_recd + " .carousel-control-prev");
                clas[0].style.display = "none";
                clasr[0].style.right = "-40px";
                clasl[0].style.left = "-40px";
            }
            else {
                setTimeout(yield function () { }, 100);
                var clas = yield document.querySelectorAll(".nofocus" + this.data_recd + " .carousel-indicators");
                var clasl = yield document.querySelectorAll(".nofocus" + this.data_recd + " .carousel-control-prev");
                var clasr = yield document.querySelectorAll(".nofocus" + this.data_recd + " .carousel-control-next");
                clas[0].style.bottom = "-50px";
                clasr[0].style.right = "-120px";
                clasl[0].style.left = "-120px";
            }
        });
    }
    formatimages() {
        this.imagesFormatted = [];
        this.idFormatted = [];
        this.titlesFormatted = [];
        var j = -1;
        for (var i = 0; i < this.images.length; i++) {
            if (i % 6 == 0) {
                j++;
                this.idFormatted[j] = [];
                this.idFormatted[j].push(this.id[i]);
                this.imagesFormatted[j] = [];
                this.imagesFormatted[j].push(this.images[i]);
                this.titlesFormatted[j] = [];
                this.titlesFormatted[j].push(this.titles[i]);
            }
            else {
                this.idFormatted[j].push(this.id[i]);
                this.imagesFormatted[j].push(this.images[i]);
                this.titlesFormatted[j].push(this.titles[i]);
            }
        }
    }
    ngOnChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.breakpointObserver
                .observe(['(min-width: 600px)'])
                .subscribe((state) => {
                if (state.matches) {
                    this.mobile = false;
                }
                else {
                    this.mobile = true;
                }
            });
            yield this.HomePageInfoService.sendGetRequest(this.data_recd + "/" + this.media_id).subscribe((data) => {
                var ele = document.getElementById("bigcontainer" + this.data_recd);
                ele.style.display = "block";
                this.response = data[this.data_recd];
                if (this.response == undefined) {
                    var ele = document.getElementById("bigcontainer" + this.data_recd);
                    ele.style.display = "none";
                    console.log("No Data found in ", this.data_recd, " carousel ");
                }
                else if (this.response.length == 0) {
                    var ele = document.getElementById("bigcontainer" + this.data_recd);
                    ele.style.display = "none";
                    console.log("No Data found in ", this.data_recd, " carousel ");
                }
                else {
                    for (var i = 0; i < this.response.length; i++) {
                        this.images[i] = this.response[i]["poster_path"];
                        this.id[i] = this.response[i]["id"];
                        if (this.media_type == "movie") {
                            this.titles[i] = this.response[i]["title"];
                        }
                        else {
                            this.titles[i] = this.response[i]["name"];
                        }
                    }
                    this.formatimages();
                    //this.stylecarousels();
                }
            });
        });
    }
}
HomePageCarouselsComponent.ɵfac = function HomePageCarouselsComponent_Factory(t) { return new (t || HomePageCarouselsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_page_info_service__WEBPACK_IMPORTED_MODULE_3__["HomePageInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
HomePageCarouselsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageCarouselsComponent, selectors: [["app-home-page-carousels"]], inputs: { carousel_title: "carousel_title", data_recd: "data_recd", media_type: "media_type", media_id: "media_id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "bigcontainer", 3, "id"], ["id", "carouselname1", 4, "ngIf"], [3, "class", 4, "ngIf"], ["id", "carouselname2", 4, "ngIf"], ["id", "carouselname1"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "flex-nowrap", "justify-content-center"], [1, "card", "sm-2", "custom-card"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["onerror", "this.onerror=null; this.src='https://cinemaone.net/images/movie_placeholder.png';", 1, "flexit", 2, "height", "100%", "width", "100%", 3, "src"], [1, "overlay"], [1, "carousel-caption"], ["id", "carouselname2"], [1, "card", "sm-2", "custom-card1", 2, "min-width", "163px", "max-width", "60vw"], ["onerror", "this.onerror=null; this.src='https://cinemaone.net/images/movie_placeholder.png';", 1, "imgfit", 2, "height", "100%", "width", "100%", 3, "src"], [1, "overlay", 2, "opacity", "1"]], template: function HomePageCarouselsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePageCarouselsComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePageCarouselsComponent_ngb_carousel_2_Template, 2, 4, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomePageCarouselsComponent_h2_3_Template, 2, 1, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePageCarouselsComponent_ngb_carousel_4_Template, 2, 4, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "bigcontainer", ctx.data_recd, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".bigcontainer[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    overflow: hidden;\r\n\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    padding-top: 20px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    \r\n    width:85%;\r\n    margin: auto;\r\n}\r\n\r\n#carouselname1[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 9%;\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n}\r\n\r\n#carouselname2[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 70px;\r\n    padding-right: 50px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n.nofocusmobile[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n.imgfit[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.custom-card[_ngcontent-%COMP%]{ \r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgb(0,0,0,0);\r\n    margin:1%;\r\n    max-width: 15%; \r\n    min-width: 15%;\r\n}\r\n\r\n.custom-card1[_ngcontent-%COMP%]{ \r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgb(0,0,0,0);\r\n}\r\n\r\n.custom-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.custom-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n\r\n.custom-card1[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    left: 5%;\r\n    text-align: left;\r\n    right: auto;\r\n    padding:5px;\r\n    font-size: 15px;\r\n    padding-bottom: 0px;;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-image: linear-gradient(to top, rgba(0,0,0,1) 10% , rgba(0,0,0,0));\r\n}\r\n\r\n.nofocusmobile[_ngcontent-%COMP%]  .carousel-indicators{\r\n    \r\n    display: none;\r\n}\r\n\r\n.nofocusmobile[_ngcontent-%COMP%]  .carousel-control-prev{\r\n    \r\n    left: -9%;\r\n}\r\n\r\n.nofocusmobile[_ngcontent-%COMP%]  .carousel-control-next{\r\n    \r\n    right: -9%;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]  .carousel-indicators{\r\n    \r\n    bottom: -50px;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]  .carousel-control-prev{\r\n    \r\n    left: -10%;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]  .carousel-control-next{\r\n    \r\n    right: -10%;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]  .carousel-inner{\r\n\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n}\r\n\r\n.nofocus[_ngcontent-%COMP%]  .carousel-inner:focus{\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1jYXJvdXNlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLFVBQVU7RUFDWjs7QUFDRjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNEVBQTRFO0FBQ2hGOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBQ0E7O0lBRUksU0FBUztBQUNiOztBQUNBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUNBOztJQUVJLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS1wYWdlLWNhcm91c2Vscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZ2NvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbHtcclxuICAgIFxyXG4gICAgd2lkdGg6ODUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jY2Fyb3VzZWxuYW1lMXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDklO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcblxyXG4jY2Fyb3VzZWxuYW1lMntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4ubm9mb2N1czpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5vZm9jdXNtb2JpbGU6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW1nZml0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4gIFxyXG4uY3VzdG9tLWNhcmR7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwKTtcclxuICAgIG1hcmdpbjoxJTtcclxuICAgIG1heC13aWR0aDogMTUlOyBcclxuICAgIG1pbi13aWR0aDogMTUlO1xyXG59XHJcbi5jdXN0b20tY2FyZDF7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwKTtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uY3VzdG9tLWNhcmQ6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbi5jdXN0b20tY2FyZDE6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDs7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEpIDEwJSAsIHJnYmEoMCwwLDAsMCkpO1xyXG59XHJcblxyXG4ubm9mb2N1c21vYmlsZTo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuICAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubm9mb2N1c21vYmlsZTo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xyXG4gICAgXHJcbiAgICBsZWZ0OiAtOSU7XHJcbn1cclxuLm5vZm9jdXNtb2JpbGU6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcclxuICAgIFxyXG4gICAgcmlnaHQ6IC05JTtcclxufVxyXG5cclxuLm5vZm9jdXM6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgICBcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbn1cclxuLm5vZm9jdXM6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuICAgIFxyXG4gICAgbGVmdDogLTEwJTtcclxufVxyXG4ubm9mb2N1czo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xyXG4gICAgXHJcbiAgICByaWdodDogLTEwJTtcclxufVxyXG5cclxuLm5vZm9jdXM6Om5nLWRlZXAgLmNhcm91c2VsLWlubmVye1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG4ubm9mb2N1czo6bmctZGVlcCAuY2Fyb3VzZWwtaW5uZXI6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LmTv":
/*!********************************************************!*\
  !*** ./src/app/home-nav-bar/home-nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: HomeNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavBarComponent", function() { return HomeNavBarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _home_page_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page-info.service */ "Dm+6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = function (a1, a2) { return ["/watch/", a1, a2]; };
function HomeNavBarComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, r_r3.media_type, r_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r3["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r3.title)("term", t_r4);
} }
const _c1 = function (a0) { return { "padding-right": a0 }; };
const _c2 = function () { return ["active"]; };
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return { "direction": "ltr", "width": "100%" }; };
const _c5 = function () { return { "direction": "rtl", "width": "80%" }; };
class HomeNavBarComponent {
    constructor(breakpointObserver, HomePageInfoService) {
        this.breakpointObserver = breakpointObserver;
        this.HomePageInfoService = HomePageInfoService;
        this.isMenuCollapsed = true;
        this.mobile = false;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => this.HomePageInfoService.search_movie_endpoint(term)));
        this.formatter = (x) => x.title;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 992px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile = false;
            }
            else {
                this.mobile = true;
            }
        });
    }
    onSelect($event, input) {
        $event.preventDefault();
        input.value = '';
    }
}
HomeNavBarComponent.ɵfac = function HomeNavBarComponent_Factory(t) { return new (t || HomeNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_page_info_service__WEBPACK_IMPORTED_MODULE_3__["HomePageInfoService"])); };
HomeNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeNavBarComponent, selectors: [["app-home-nav-bar"]], decls: 21, vars: 22, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "mb-3", "navbar-custom", "pl-5", "pr-5", 3, "ngStyle"], ["id", "nav0", 1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "col-lg-9"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], ["id", "nav1", 1, "nav-link", 3, "routerLink", "click"], ["id", "nav2", 1, "nav-link", 3, "routerLink", "click"], ["id", "goright", 1, "navbar-nav", "col-lg-3", 3, "ngStyle"], ["id", "goright1"], [1, "form-inline", "mr-0"], [1, "md-form", "my-0", "form-group", 2, "width", "100%"], ["name", "searchbar", "id", "home-search", "type", "text", "placeholder", "Search", 1, "form-control", "mx", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], ["input", ""], ["rt", ""], [2, "display", "block", "text-overflow", "ellipsis", "overflow", "hidden", 3, "routerLink"], [1, "mr-3", 2, "width", "75px", 3, "src"], [3, "result", "term"]], template: function HomeNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "BHAWS Flix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavBarComponent_Template_button_click_3_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u2630 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavBarComponent_Template_a_click_8_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavBarComponent_Template_a_click_11_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeNavBarComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model = $event; })("selectItem", function HomeNavBarComponent_Template_input_selectItem_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.onSelect($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeNavBarComponent_ng_template_19_Template, 3, 7, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.mobile ? "54px" : "0px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/mylist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r1)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: [".navbar-custom {\r\n    background: linear-gradient(to right, rgb(1,12,32), rgb(14, 79, 202));\r\n    padding-right: 54px;\r\n    border-bottom: 2px solid purple;\r\n    font-size: 20px;\r\n}\r\n\r\n#nav0 {\r\n    font-size: 30px;\r\n    color: yellow;\r\n\r\n}\r\n\r\n.nav-item{\r\n    text-align: right;\r\n}\r\n\r\n#goright{\r\n    padding-right:0;\r\n}\r\n\r\n#goright1{\r\n    direction: ltr; \r\n    width: 70%;\r\n}\r\n\r\n#home-search,textarea  {\r\n    background-color:  rgb(1,12,32);\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n#home-search:focus {\r\n    outline-color:  rgb(1,12,32);\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.form-control:focus{\r\n    box-shadow:none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.dropdown-menu{\r\n\r\n    background-color: rgb(5,11,47);\r\n    border: 1px white solid;\r\n    color: white;\r\n    max-width: 100%;\r\n    min-width: 100%;\r\n}\r\n\r\n.dropdown-item{\r\n    color: white;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUVBQXFFO0lBQ3JFLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUtBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztFQUNiIiwiZmlsZSI6ImhvbWUtbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMSwxMiwzMiksIHJnYigxNCwgNzksIDIwMikpO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNuYXYwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcblxyXG59XHJcblxyXG4ubmF2LWl0ZW17XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbiNnb3JpZ2h0e1xyXG4gICAgcGFkZGluZy1yaWdodDowO1xyXG59XHJcbiNnb3JpZ2h0MXtcclxuICAgIGRpcmVjdGlvbjogbHRyOyBcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNob21lLXNlYXJjaCx0ZXh0YXJlYSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigxLDEyLDMyKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jaG9tZS1zZWFyY2g6Zm9jdXMge1xyXG4gICAgb3V0bGluZS1jb2xvcjogIHJnYigxLDEyLDMyKTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsMTEsNDcpO1xyXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVte1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "Qxlp":
/*!********************************************************!*\
  !*** ./src/app/my-list-page/my-list-page.component.ts ***!
  \********************************************************/
/*! exports provided: MyListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListPageComponent", function() { return MyListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MyListPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function MyListPageComponent_div_2_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, movie_r5.media_type, movie_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r5.title);
} }
function MyListPageComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyListPageComponent_div_2_div_4_div_1_Template, 6, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.list_array);
} }
function MyListPageComponent_div_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, movie_r7.media_type, movie_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r7.title);
} }
function MyListPageComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyListPageComponent_div_2_div_5_div_1_Template, 6, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.list_array);
} }
const _c1 = function () { return { "width": "80%" }; };
const _c2 = function () { return { "width": "70%" }; };
function MyListPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyListPageComponent_div_2_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyListPageComponent_div_2_div_5_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);
} }
class MyListPageComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.size_of_my_list = 0;
        this.mobile = false;
        this.list_array = [{
                "id": 123,
                "title": "Hello",
                "poster_path": "",
                "media_type": "movie"
            }];
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 550px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile = false;
            }
            else {
                this.mobile = true;
            }
        });
        var list = JSON.parse(window.localStorage.getItem('mylist') || `{"list_array":[]}`);
        this.list_array = list["list_array"];
        this.size_of_my_list = this.list_array.length;
    }
}
MyListPageComponent.ɵfac = function MyListPageComponent_Factory(t) { return new (t || MyListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MyListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyListPageComponent, selectors: [["app-my-list-page"]], decls: 3, vars: 2, consts: [["id", "biglistcontainer"], ["class", "listcontainer", 4, "ngIf"], ["class", "listcontainer", 3, "ngStyle", 4, "ngIf"], [1, "listcontainer"], [2, "text-align", "center", "padding-top", "90px"], [1, "listcontainer", 3, "ngStyle"], [2, "padding-bottom", "25px"], ["id", "listinner", 1, "container-fluid", 2, "text-align", "center"], ["class", "row  flex overflow-auto", "style", "padding-bottom: 10px;", 4, "ngIf"], ["class", " justify-content-center row  flex overflow-auto", "style", "padding-bottom: 10px;", 4, "ngIf"], [1, "row", "flex", "overflow-auto", 2, "padding-bottom", "10px"], ["class", "m-3 mb-5 mt-5 card sm-2 ml_custom-card", "style", " width:142px;", 4, "ngFor", "ngForOf"], [1, "m-3", "mb-5", "mt-5", "card", "sm-2", "ml_custom-card", 2, "width", "142px"], [3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", "height", "100%", 3, "src"], [1, "overlay"], [1, "carousel-caption"], [1, "justify-content-center", "row", "flex", "overflow-auto", 2, "padding-bottom", "10px"], ["class", "m-3 mb-5 card sm-2 ml_custom-card", "style", "\n                min-width:67vw;\n                max-width:67vw;", 4, "ngFor", "ngForOf"], [1, "m-3", "mb-5", "card", "sm-2", "ml_custom-card", 2, "min-width", "67vw", "max-width", "67vw"], [1, "overlay", 2, "opacity", "1"]], template: function MyListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyListPageComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyListPageComponent_div_2_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.size_of_my_list == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.size_of_my_list != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".listcontainer[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n\r\n}\r\n\r\n#listinner[_ngcontent-%COMP%]{\r\n    \r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ml_custom-card[_ngcontent-%COMP%]{ \r\n    cursor: pointer;\r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.ml_custom-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n    background-color: black;\r\n}\r\n\r\n.ml_custom-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    left: 5%;\r\n    text-align: left;\r\n    right: auto;\r\n    padding:5px;\r\n    font-size: 15px;\r\n    padding-bottom: 0px;;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-image: linear-gradient(to top, rgba(0,0,0,1) 10% , rgba(0,0,0,0));\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWxpc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLCtCQUErQjtJQUMvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtFQUNaOztBQUVGO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw0RUFBNEU7QUFDaEYiLCJmaWxlIjoibXktbGlzdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxpc3Rjb250YWluZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4jbGlzdGlubmVye1xyXG4gICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tbF9jdXN0b20tY2FyZHsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxufVxyXG4ubWxfY3VzdG9tLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tbF9jdXN0b20tY2FyZDpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuIFxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDs7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwxKSAxMCUgLCByZ2JhKDAsMCwwLDApKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-nav-bar/home-nav-bar.component */ "LmTv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ang-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "full-page"], ["id", "main-content"], ["id", "footie", 1, "page-footer", "mb-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Powered by TMDB. Developed by Ankit Bhawsar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["HomeNavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#footie[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    padding-bottom: 2px;\r\n    background-image: linear-gradient(to top, rgba(0,0,0,1) , rgba(0,0,0,0));\r\n}\r\n\r\n#main-content[_ngcontent-%COMP%]{\r\n    \r\n    padding-bottom: 5rem;\r\n      \r\n}\r\n\r\n#full-page[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0VBQXdFO0FBQzVFOztBQUVBOztJQUVJLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RpZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEpICwgcmdiYSgwLDAsMCwwKSk7XHJcbn1cclxuXHJcbiNtYWluLWNvbnRlbnR7XHJcbiAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICBcclxufVxyXG5cclxuI2Z1bGwtcGFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "YEqx":
/*!************************************************************************************!*\
  !*** ./src/app/continue-watching-carousel/continue-watching-carousel.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContinueWatchingCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueWatchingCarouselComponent", function() { return ContinueWatchingCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_page_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page-info.service */ "Dm+6");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function ContinueWatchingCarouselComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r14.index;
    const group_r5 = ctx_r14.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r8.media_typesFormatted[i_r6][0], ctx_r8.idFormatted[i_r6][0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.titlesFormatted[i_r6][0]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r15.index;
    const group_r5 = ctx_r15.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r9.media_typesFormatted[i_r6][1], ctx_r9.idFormatted[i_r6][1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.titlesFormatted[i_r6][1]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r16.index;
    const group_r5 = ctx_r16.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r10.media_typesFormatted[i_r6][2], ctx_r10.idFormatted[i_r6][2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.titlesFormatted[i_r6][2]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r17.index;
    const group_r5 = ctx_r17.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r11.media_typesFormatted[i_r6][3], ctx_r11.idFormatted[i_r6][3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.titlesFormatted[i_r6][3]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r18.index;
    const group_r5 = ctx_r18.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r12.media_typesFormatted[i_r6][4], ctx_r12.idFormatted[i_r6][4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.titlesFormatted[i_r6][4]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r6 = ctx_r19.index;
    const group_r5 = ctx_r19.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r13.media_typesFormatted[i_r6][5], ctx_r13.idFormatted[i_r6][5]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", group_r5[5], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.titlesFormatted[i_r6][5]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_2_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_4_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_6_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_8_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_10_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_a_12_Template, 5, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r5[5]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContinueWatchingCarouselComponent_ngb_carousel_2_1_ng_template_0_Template, 13, 6, "ng-template", 8);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContinueWatchingCarouselComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.imagesFormatted);
} }
function ContinueWatchingCarouselComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContinueWatchingCarouselComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r23 = ctx_r25.index;
    const image_r22 = ctx_r25.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r24.media_types[i_r23], ctx_r24.id[i_r23]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.titles[i_r23]);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContinueWatchingCarouselComponent_ngb_carousel_4_1_ng_template_0_Template, 7, 6, "ng-template", 8);
} }
function ContinueWatchingCarouselComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContinueWatchingCarouselComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.images);
} }
class ContinueWatchingCarouselComponent {
    constructor(config, HomePageInfoService, breakpointObserver) {
        this.HomePageInfoService = HomePageInfoService;
        this.breakpointObserver = breakpointObserver;
        this.mobile = false;
        this.imagesFormatted = [[]];
        this.idFormatted = [[]];
        this.titlesFormatted = [[]];
        this.media_typesFormatted = [[]];
        this.images = [];
        this.id = [];
        this.titles = [];
        this.media_types = [];
        this.response = [];
        config.interval = 10000000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.pauseOnFocus = true;
        config.animation = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.breakpointObserver
                .observe(['(min-width: 600px)'])
                .subscribe((state) => {
                if (state.matches) {
                    this.mobile = false;
                }
                else {
                    this.mobile = true;
                }
            });
            var continuelist = JSON.parse(window.localStorage.getItem('continuelist') || `{"continuelistarray":[]}`);
            this.response = continuelist["continuelistarray"];
            var ele = document.getElementById("bigcontainercontinuewatching");
            ele.style.display = "block";
            if (this.response.length == 0) {
                var ele = document.getElementById("bigcontainercontinuewatching");
                ele.style.display = "none";
                console.log("No Data found in continue watching carousel");
            }
            else {
                for (var i = 0; i < this.response.length; i++) {
                    this.images[i] = this.response[i]["poster_path"];
                    this.id[i] = this.response[i]["id"];
                    this.titles[i] = this.response[i]["title"];
                    this.media_types[i] = this.response[i]["media_type"];
                }
                this.formatarrays();
            }
        });
    }
    formatarrays() {
        this.imagesFormatted = [];
        this.idFormatted = [];
        this.titlesFormatted = [];
        this.media_typesFormatted = [];
        var j = -1;
        for (var i = 0; i < this.images.length; i++) {
            if (i % 6 == 0) {
                j++;
                this.idFormatted[j] = [];
                this.idFormatted[j].push(this.id[i]);
                this.imagesFormatted[j] = [];
                this.imagesFormatted[j].push(this.images[i]);
                this.titlesFormatted[j] = [];
                this.titlesFormatted[j].push(this.titles[i]);
                this.media_typesFormatted[j] = [];
                this.media_typesFormatted[j].push(this.media_types[i]);
            }
            else {
                this.idFormatted[j].push(this.id[i]);
                this.imagesFormatted[j].push(this.images[i]);
                this.titlesFormatted[j].push(this.titles[i]);
                this.media_typesFormatted[j].push(this.media_types[i]);
            }
        }
    }
}
ContinueWatchingCarouselComponent.ɵfac = function ContinueWatchingCarouselComponent_Factory(t) { return new (t || ContinueWatchingCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_page_info_service__WEBPACK_IMPORTED_MODULE_3__["HomePageInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
ContinueWatchingCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContinueWatchingCarouselComponent, selectors: [["app-continue-watching-carousel"]], decls: 5, vars: 4, consts: [["id", "bigcontainercontinuewatching"], ["id", "carouselname1", 4, "ngIf"], ["class", "nofocuscontinuewatch", 4, "ngIf"], ["id", "carouselname2", 4, "ngIf"], ["class", "nofocusmobilecontinuewatch nofocusmobile", 4, "ngIf"], ["id", "carouselname1"], [1, "nofocuscontinuewatch"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "flex-nowrap", "justify-content-center"], [1, "card", "sm-2", "custom-card"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["onerror", "this.onerror=null; this.src='https://cinemaone.net/images/movie_placeholder.png';", 1, "flexit", 2, "height", "100%", "width", "100%", 3, "src"], [1, "overlay"], [1, "carousel-caption"], ["id", "carouselname2"], [1, "nofocusmobilecontinuewatch", "nofocusmobile"], [1, "card", "sm-2", "custom-card1", 2, "min-width", "163px", "max-width", "60vw"], ["onerror", "this.onerror=null; this.src='https://cinemaone.net/images/movie_placeholder.png';", 1, "imgfit", 2, "height", "100%", "width", "100%", 3, "src"], [1, "overlay", 2, "opacity", "1"]], template: function ContinueWatchingCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContinueWatchingCarouselComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContinueWatchingCarouselComponent_ngb_carousel_2_Template, 2, 1, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContinueWatchingCarouselComponent_h2_3_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContinueWatchingCarouselComponent_ngb_carousel_4_Template, 2, 1, "ngb-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["#bigcontainercontinuewatching[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    overflow: hidden;\r\n    padding-top: 20px;\r\n    padding-bottom: 50px;\r\n    \r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\nngb-carousel[_ngcontent-%COMP%]{\r\n    \r\n    width:85%;\r\n    margin: auto;\r\n}\r\n#carouselname1[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 9%;\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n}\r\n#carouselname2[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n.nofocusmobilecontinuewatch[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n.imgfit[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.custom-card[_ngcontent-%COMP%]{ \r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgb(0,0,0,0);\r\n    margin:1%;\r\n    max-width: 15%; \r\n    min-width: 15%;\r\n}\r\n.custom-card1[_ngcontent-%COMP%]{ \r\n    border: none;\r\n    transition: transform 0.2s ease;\r\n    background-color: rgb(0,0,0,0);\r\n}\r\n.custom-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n.custom-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n.custom-card1[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    left: 5%;\r\n    text-align: left;\r\n    right: auto;\r\n    padding:5px;\r\n    font-size: 15px;\r\n    padding-bottom: 0px;;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-image: linear-gradient(to top, rgba(0,0,0,1) 10% , rgba(0,0,0,0));\r\n}\r\n.nofocusmobilecontinuewatch[_ngcontent-%COMP%]  .carousel-indicators{\r\n    \r\n    display: none;\r\n}\r\n.nofocusmobilecontinuewatch[_ngcontent-%COMP%]  .carousel-control-prev{\r\n    \r\n    left: -9%;\r\n}\r\n.nofocusmobilecontinuewatch[_ngcontent-%COMP%]  .carousel-control-next{\r\n    \r\n    right: -9%;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]  .carousel-indicators{\r\n    \r\n    bottom: -50px;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]  .carousel-control-prev{\r\n    \r\n    left: -10%;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]  .carousel-control-next{\r\n    \r\n    right: -10%;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]  .carousel-inner{\r\n\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n}\r\n.nofocuscontinuewatch[_ngcontent-%COMP%]  .carousel-inner:focus{\r\n\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRpbnVlLXdhdGNoaW5nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCLDJDQUEyQztBQUMvQztBQUNBOztJQUVJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUNGO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNEVBQTRFO0FBQ2hGO0FBSUE7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLFNBQVM7QUFDYjtBQUNBOztJQUVJLFVBQVU7QUFDZDtBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJjb250aW51ZS13YXRjaGluZy1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JpZ2NvbnRhaW5lcmNvbnRpbnVld2F0Y2hpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxufVxyXG5uZ2ItY2Fyb3VzZWx7XHJcbiAgICBcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2Nhcm91c2VsbmFtZTF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufVxyXG5cclxuI2Nhcm91c2VsbmFtZTJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ub2ZvY3VzY29udGludWV3YXRjaDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5vZm9jdXNtb2JpbGVjb250aW51ZXdhdGNoOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmltZ2ZpdHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuICBcclxuLmN1c3RvbS1jYXJkeyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTsgXHJcbiAgICBtaW4td2lkdGg6IDE1JTtcclxufVxyXG4uY3VzdG9tLWNhcmQxeyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLmN1c3RvbS1jYXJkOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4uY3VzdG9tLWNhcmQxOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7O1xyXG59XHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwxKSAxMCUgLCByZ2JhKDAsMCwwLDApKTtcclxufVxyXG5cclxuXHJcblxyXG4ubm9mb2N1c21vYmlsZWNvbnRpbnVld2F0Y2g6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5vZm9jdXNtb2JpbGVjb250aW51ZXdhdGNoOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XHJcbiAgICBcclxuICAgIGxlZnQ6IC05JTtcclxufVxyXG4ubm9mb2N1c21vYmlsZWNvbnRpbnVld2F0Y2g6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcclxuICAgIFxyXG4gICAgcmlnaHQ6IC05JTtcclxufVxyXG5cclxuLm5vZm9jdXNjb250aW51ZXdhdGNoOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3Jze1xyXG4gICAgXHJcbiAgICBib3R0b206IC01MHB4O1xyXG59XHJcbi5ub2ZvY3VzY29udGludWV3YXRjaDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xyXG4gICAgXHJcbiAgICBsZWZ0OiAtMTAlO1xyXG59XHJcbi5ub2ZvY3VzY29udGludWV3YXRjaDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xyXG4gICAgXHJcbiAgICByaWdodDogLTEwJTtcclxufVxyXG4ubm9mb2N1c2NvbnRpbnVld2F0Y2g6Om5nLWRlZXAgLmNhcm91c2VsLWlubmVye1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG4ubm9mb2N1c2NvbnRpbnVld2F0Y2g6Om5nLWRlZXAgLmNhcm91c2VsLWlubmVyOmZvY3Vze1xyXG5cclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-nav-bar/home-nav-bar.component */ "LmTv");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _my_list_page_my_list_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-list-page/my-list-page.component */ "Qxlp");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./now-playing/now-playing.component */ "06+7");
/* harmony import */ var _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-page-carousels/home-page-carousels.component */ "JPjc");
/* harmony import */ var _media_details_media_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./media-details/media-details.component */ "aVqH");
/* harmony import */ var _continue_watching_carousel_continue_watching_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./continue-watching-carousel/continue-watching-carousel.component */ "YEqx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["HomeNavBarComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["HomeNavBarComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        _my_list_page_my_list_page_component__WEBPACK_IMPORTED_MODULE_11__["MyListPageComponent"],
        _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_12__["NowPlayingComponent"],
        _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_13__["HomePageCarouselsComponent"],
        _media_details_media_details_component__WEBPACK_IMPORTED_MODULE_14__["MediaDetailsComponent"],
        _continue_watching_carousel_continue_watching_carousel_component__WEBPACK_IMPORTED_MODULE_15__["ContinueWatchingCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]], exports: [_home_nav_bar_home_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["HomeNavBarComponent"]] }); })();


/***/ }),

/***/ "aVqH":
/*!**********************************************************!*\
  !*** ./src/app/media-details/media-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MediaDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDetailsComponent", function() { return MediaDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home-page-info.service */ "Dm+6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home-page-carousels/home-page-carousels.component */ "JPjc");











const _c0 = ["selfClosingAlert1"];
function MediaDetailsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediaDetailsComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.add_to_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add to Watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MediaDetailsComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediaDetailsComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.remove_from_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Remove from Watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MediaDetailsComponent_ngb_alert_24_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closed", function MediaDetailsComponent_ngb_alert_24_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.successMessage1 = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.successMessage1, " ");
} }
function MediaDetailsComponent_div_38_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MediaDetailsComponent_div_38_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediaDetailsComponent_div_38_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const actor_r20 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40); return ctx_r22.openLg(_r4, actor_r20.id, actor_r20.poster_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MediaDetailsComponent_div_38_div_4_div_7_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r20 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r18.mobile ? "m-3" : "m-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", actor_r20.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](actor_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", actor_r20.character);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", actor_r20.character, " ");
} }
function MediaDetailsComponent_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 47);
} }
const _c1 = function () { return {}; };
const _c2 = function () { return { "width": "73%", "margin": "auto", "padding-top": "20px" }; };
const _c3 = function () { return { "padding-left": "5%" }; };
function MediaDetailsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MediaDetailsComponent_div_38_div_4_Template, 10, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MediaDetailsComponent_div_38_div_5_Template, 1, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r3.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r3.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.cast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.mobile);
} }
function MediaDetailsComponent_ng_template_39_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 73);
} }
function MediaDetailsComponent_ng_template_39_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 74);
} }
function MediaDetailsComponent_ng_template_39_i_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 75);
} }
function MediaDetailsComponent_ng_template_39_i_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 76);
} }
function MediaDetailsComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediaDetailsComponent_ng_template_39_Template_button_click_4_listener() { const modal_r24 = ctx.$implicit; return modal_r24.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, MediaDetailsComponent_ng_template_39_i_29_Template, 1, 0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, MediaDetailsComponent_ng_template_39_i_31_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, MediaDetailsComponent_ng_template_39_i_33_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MediaDetailsComponent_ng_template_39_i_35_Template, 1, 0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.one_actor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r5.one_actor.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Birth: ", ctx_r5.one_actor.birthday, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Birthplace: ", ctx_r5.one_actor.place_of_birth, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Gender: ", ctx_r5.one_actor.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.one_actor.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.one_actor.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Known for: ", ctx_r5.one_actor.known_for_department, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r5.one_actor.also_known_as, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.one_actor_ext.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.one_actor_ext.imdb_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.one_actor_ext.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.one_actor_ext.instagram_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.one_actor_ext.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.one_actor_ext.facebook_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.one_actor_ext.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.one_actor_ext.twitter_id != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.one_actor.biography, " ");
} }
function MediaDetailsComponent_div_42_div_6_br_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function MediaDetailsComponent_div_42_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MediaDetailsComponent_div_42_div_6_br_7_Template, 1, 0, "br", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u00A0\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", rev_r31.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("A review created by ", rev_r31.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rev_r31.rating, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Written by ", rev_r31.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](15, 8, rev_r31.created_at, ctx_r30.date_format, "PDT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rev_r31.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", rev_r31.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0\u00A0Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MediaDetailsComponent_div_42_div_6_Template, 22, 12, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.no_reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.review);
} }
function MediaDetailsComponent_app_home_page_carousels_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-home-page-carousels", 92);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("media_id", ctx_r7.media_id);
} }
function MediaDetailsComponent_app_home_page_carousels_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-home-page-carousels", 93);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("media_id", ctx_r8.media_id);
} }
function MediaDetailsComponent_app_home_page_carousels_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-home-page-carousels", 94);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("media_id", ctx_r9.media_id);
} }
function MediaDetailsComponent_app_home_page_carousels_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-home-page-carousels", 95);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("media_id", ctx_r10.media_id);
} }
const _c4 = function (a0) { return { "width": a0 }; };
const _c5 = function (a0) { return { "padding-left": a0 }; };
const _c6 = function () { return { "padding-left": "0", "padding-right": "0" }; };
const _c7 = function () { return { "padding-left": "20px", "padding-right": "20px" }; };
class MediaDetailsComponent {
    constructor(breakpointObserver, modalService, route, HomePageInfoService, router) {
        this.breakpointObserver = breakpointObserver;
        this.modalService = modalService;
        this.route = route;
        this.HomePageInfoService = HomePageInfoService;
        this.router = router;
        this.par = {};
        this.is_on_watchlist = false;
        this.apiLoaded = false;
        this.response = [];
        this.media_id = "";
        this.media_type = "";
        this.title = "Sample Title";
        this.encoded_title = "";
        this.tagline = "";
        this.dateline = "";
        this.genreline = "";
        this.langline = "";
        this.descline = "";
        this.postpath = "https://cinemaone.net/images/movie_placeholder.png";
        this.video_id = "";
        this.fb_video_id = "";
        this.no_cast = 10;
        this.cast = [{
                id: 880,
                name: "Sample",
                character: "",
                poster_path: "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png"
            }];
        this.date_format = 'MMMM d, y, h:mm:ss a';
        this.no_reviews = 10;
        this.review = [{
                author: "",
                content: "",
                created_at: new Date("2021-03-15T16:20:41.130Z"),
                url: "https://www.themoviedb.org/review/604f89596517d6006a209fa0",
                rating: 0,
                avatar_path: "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW8/ReviewsPlaceholderImage.jpg"
            }];
        this._success1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.successMessage1 = '';
        this.mobile = false;
        this.one_actor = {
            name: "Sample Name",
            birthday: "NA",
            place_of_birth: "NA",
            gender: "NA",
            also_known_as: "NA",
            homepage: "Na",
            known_for_department: "NA",
            biography: "NA",
            profile_path: "NA"
        };
        this.one_actor_ext = {
            "imdb_id": "",
            "facebook_id": "",
            "instagram_id": "",
            "twitter_id": ""
        };
        this.cast_photo = 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png';
        this.route.params.subscribe(params => {
            this.par = params;
            this.ngOnInit();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.breakpointObserver
                .observe(['(min-width: 581px)'])
                .subscribe((state) => {
                if (state.matches) {
                    this.mobile = false;
                }
                else {
                    this.mobile = true;
                }
            });
            this._success1.subscribe(message => this.successMessage1 = message);
            this._success1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(() => {
                if (this.selfClosingAlert1) {
                    this.selfClosingAlert1.close();
                }
            });
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
            window.onload = function () {
                window.scrollTo(0, 0);
            };
            this.media_id = this.par["id"];
            this.media_type = this.par["media_type"];
            this.show_watchlist_button();
            yield this.HomePageInfoService.sendGetRequest(`${this.par["media_type"]}/${this.par["id"]}`).subscribe((data) => {
                this.video_id = data["video"]["key"];
                this.fb_video_id = encodeURIComponent("https://www.youtube.com/watch?v=" + this.video_id);
                this.no_cast = data["cast"].length;
                this.cast = data["cast"];
                this.no_reviews = data["reviews"].length;
                this.review = data["reviews"];
                if (this.par["media_type"] == "movie") {
                    this.title = data["movie_details"]["title"];
                    this.encoded_title = encodeURIComponent(this.title);
                    this.tagline = data["movie_details"]["tagline"];
                    if (data["movie_details"]["vote_average"] == "") {
                        var two = "";
                    }
                    else {
                        two = " | ★" + data["movie_details"]["vote_average"];
                    }
                    if (data["movie_details"]["runtime"] == "") {
                        var three = "";
                    }
                    else {
                        three = " | " + data["movie_details"]["runtime"];
                    }
                    this.dateline = data["movie_details"]["release_date"].slice(0, 4) + two + three;
                    this.genreline = data["movie_details"]["genres"];
                    this.langline = data["movie_details"]["spoken_languages"];
                    this.descline = data["movie_details"]["overview"];
                    this.postpath = data["movie_details"]["poster_path"];
                }
                else {
                    this.title = data["tv_details"]["name"];
                    this.encoded_title = encodeURIComponent(this.title);
                    this.tagline = data["tv_details"]["tagline"];
                    if (data["tv_details"]["vote_average"] == "") {
                        var two = "";
                    }
                    else {
                        two = " | ★" + data["tv_details"]["vote_average"];
                    }
                    if (data["tv_details"]["episode_run_time"] == "") {
                        var three = "";
                    }
                    else {
                        three = " | " + data["tv_details"]["episode_run_time"];
                    }
                    this.dateline = data["tv_details"]["first_air_date"].slice(0, 4) + two + three;
                    this.genreline = data["tv_details"]["genres"];
                    this.langline = data["tv_details"]["spoken_languages"];
                    this.descline = data["tv_details"]["overview"];
                    this.postpath = data["tv_details"]["poster_path"];
                }
                if (this.genreline == "") {
                    var x = document.getElementById("details_genreline");
                    x.style.display = "none";
                }
                if (this.langline == "") {
                    var x = document.getElementById("details_langline");
                    x.style.display = "none";
                }
                if (this.descline == "") {
                    var x = document.getElementById("details_description");
                    x.style.display = "none";
                }
                this.update_continue_watch_list();
            });
            if (!this.apiLoaded) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                document.body.appendChild(tag);
                this.apiLoaded = true;
            }
        });
    }
    openLg(content, cast_id, photo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cast_photo = photo;
            this.HomePageInfoService.sendGetRequest(`cast/${cast_id}`).subscribe((data) => {
                this.one_actor = data["cast_details"];
                this.one_actor_ext = data["cast_ext"];
                this.modalService.open(content, { size: 'lg', centered: true, scrollable: true });
                if (this.one_actor.birthday == "") {
                    var x = document.getElementById("birth");
                    x.style.display = "none";
                }
                if (this.one_actor.place_of_birth == "") {
                    var x = document.getElementById("birthplace");
                    x.style.display = "none";
                }
                if (this.one_actor.also_known_as == "") {
                    var x = document.getElementById("aka");
                    x.style.display = "none";
                }
                if (this.one_actor.known_for_department == "") {
                    var x = document.getElementById("dept");
                    x.style.display = "none";
                }
                if (this.one_actor.homepage == "") {
                    var x = document.getElementById("website");
                    x.style.display = "none";
                }
                if (this.one_actor.biography == "") {
                    var x = document.getElementById("cast_bio");
                    x.style.display = "none";
                }
            });
        });
    }
    show_watchlist_button() {
        this.is_on_watchlist = false;
        var list = JSON.parse(window.localStorage.getItem('mylist') || `{"list_array":[]}`);
        var list_array = list["list_array"];
        for (var i = 0; i < list_array.length; i++) {
            if (list_array[i]["id"] == this.media_id) {
                this.is_on_watchlist = true;
                break;
            }
        }
        //console.log("IS ",this.media_id,"thsi on watchlist?",this.is_on_watchlist);
    }
    add_to_watchlist() {
        var list = JSON.parse(window.localStorage.getItem('mylist') || `{"list_array":[]}`);
        localStorage.removeItem("mylist");
        var list_array = list["list_array"];
        var this_movie = {
            "id": this.media_id,
            "title": this.title,
            "poster_path": this.postpath,
            "media_type": this.media_type
        };
        list_array = [this_movie].concat(list_array);
        list["list_array"] = list_array;
        this.is_on_watchlist = true;
        window.localStorage.setItem('mylist', JSON.stringify(list));
        this._success1.next(`Added to watchlist`);
    }
    remove_from_watchlist() {
        var list = JSON.parse(window.localStorage.getItem('mylist') || `{"list_array":[]}`);
        localStorage.removeItem("mylist");
        var list_array = list["list_array"];
        for (var i = 0; i < list_array.length; i++) {
            if (list_array[i]["id"] == this.media_id) {
                list_array.splice(i, 1);
                break;
            }
        }
        list["list_array"] = list_array;
        this.is_on_watchlist = false;
        window.localStorage.setItem('mylist', JSON.stringify(list));
        this._success1.next(`Removed from watchlist`);
    }
    update_continue_watch_list() {
        var continuelist = JSON.parse(window.localStorage.getItem('continuelist') || `{"continuelistarray":[]}`);
        localStorage.removeItem("continuelist");
        var continuelistarray = continuelist["continuelistarray"];
        for (var i = 0; i < continuelistarray.length; i++) {
            if (continuelistarray[i]["id"] == this.media_id) {
                continuelistarray.splice(i, 1);
                break;
            }
        }
        if (continuelistarray.length == 24) {
            continuelistarray.pop();
        }
        var new_movie = {
            "id": this.media_id,
            "title": this.title,
            "poster_path": this.postpath,
            "media_type": this.media_type
        };
        continuelistarray = [new_movie].concat(continuelistarray);
        continuelist["continuelistarray"] = continuelistarray;
        window.localStorage.setItem('continuelist', JSON.stringify(continuelist));
    }
}
MediaDetailsComponent.ɵfac = function MediaDetailsComponent_Factory(t) { return new (t || MediaDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_home_page_info_service__WEBPACK_IMPORTED_MODULE_7__["HomePageInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
MediaDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MediaDetailsComponent, selectors: [["app-media-details"]], viewQuery: function MediaDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert1 = _t.first);
    } }, decls: 48, vars: 35, consts: [["id", "fb-root"], ["id", "bigdetailscontainer"], [1, "row", "details_face", 3, "ngStyle"], ["id", "yt_video", 1, "pr-0", "pl-0", "col-lg-8"], [1, "embed-responsive", "embed-responsive-16by9", 3, "videoId"], ["id", "details_right", 1, "col-lg-4", 3, "ngStyle"], ["id", "details_title"], ["id", "details_tagline"], ["id", "details_dateline"], ["id", "details_genreline"], [2, "color", "rgb(188,193,200)"], ["id", "details_langline"], ["id", "details_button"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "success", 3, "closed", 4, "ngIf"], ["id", "details_description", 1, "col-sm-12", 3, "ngStyle"], [2, "font-size", "25px"], ["id", "details_share", 1, "col-sm-12", 3, "ngStyle"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", "fa-2x"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fab", "fa-facebook-square", "fa-2x"], [3, "ngClass"], ["id", "details_cast", "class", " col-sm-12 details_cast", 3, "ngStyle", 4, "ngIf"], ["content", ""], ["id", "details_review", "class", "col-sm-12", 4, "ngIf"], ["id", "details_face2"], ["carousel_title", "Recommended Movies", "data_recd", "reco_movies", "media_type", "movie", 3, "media_id", 4, "ngIf"], ["carousel_title", "Similar Movies", "data_recd", "sim_movies", "media_type", "movie", 3, "media_id", 4, "ngIf"], ["carousel_title", "Recommended TV Shows", "data_recd", "reco_tv", "media_type", "tv", 3, "media_id", 4, "ngIf"], ["carousel_title", "Similar TV Shows", "data_recd", "sim_tv", "media_type", "tv", 3, "media_id", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "success", 3, "closed"], ["selfClosingAlert1", ""], ["id", "details_cast", 1, "col-sm-12", "details_cast", 3, "ngStyle"], [3, "ngStyle"], ["id", "details_cast_inner", 1, "row", "flex-row", "flex-nowrap", "overflow-auto"], ["class", "card custom-cast-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "right-filler", "class", "card", 4, "ngIf"], [1, "card", "custom-cast-card", 3, "ngClass", "click"], ["alt", "Cast", "onerror", "this.onerror=null;this.src='https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png';", 1, "card-img-top", "custom-card-img", 3, "src"], [1, "card-body", 2, "padding", "1px"], [1, "card-title", 2, "padding-bottom", "1px"], [1, "charname", 2, "font-size", "medium"], ["style", "padding: 3px;", 4, "ngIf"], [1, "charname"], [2, "padding", "3px"], ["id", "right-filler", 1, "card"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], ["id", "cast_l", 1, "col-sm-3"], ["alt", "Cast", "onerror", "this.onerror=null; this.src='https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png';", 1, "card-img-top", 3, "src"], ["id", "cast_r", 1, "col-sm-9"], ["id", "cast_deet"], ["id", "birth"], ["id", "birthplace"], ["id", "gender"], ["id", "website"], ["target", "_blank", 2, "color", "blue", 3, "href"], ["id", "dept"], ["id", "aka"], ["id", "cast_soc"], ["target", "_blank", 3, "href"], ["class", "fab fa-imdb fa-2x", "ngbPopover", "Visit Imdb", "triggers", "mouseenter:mouseleave", 4, "ngIf"], ["class", "fab fa-instagram fa-2x ", "ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", 4, "ngIf"], ["class", "fab fa-facebook-square fa-2x", "ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", 4, "ngIf"], ["class", "fab fa-twitter fa-2x", "ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 4, "ngIf"], ["id", "cast_bio"], ["ngbPopover", "Visit Imdb", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-imdb", "fa-2x"], ["ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-instagram", "fa-2x"], ["ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-facebook-square", "fa-2x"], ["ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-twitter", "fa-2x"], ["id", "details_review", 1, "col-sm-12"], [1, "row", "justify-content-center"], ["id", "review1", "class", "row col-12 mt-2 mb-2 mr-1 ml-1", 4, "ngFor", "ngForOf"], ["id", "review1", 1, "row", "col-12", "mt-2", "mb-2", "mr-1", "ml-1"], ["id", "review_left", 1, "col-xl-3", 2, "min-width", "200px"], ["onerror", "this.onerror=null;this.src='https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW8/ReviewsPlaceholderImage.jpg';", 2, "width", "90px", "height", "90px", "border-radius", "50%", 3, "src"], ["id", "review_right", 1, "col-xl-9", 2, "width", "100%", "padding-right", "10%"], ["id", "rr_1"], [4, "ngIf"], ["id", "oval_rating"], ["id", "star"], ["id", "starno"], ["id", "rr_credits"], ["id", "rr"], ["id", "rr_link"], ["carousel_title", "Recommended Movies", "data_recd", "reco_movies", "media_type", "movie", 3, "media_id"], ["carousel_title", "Similar Movies", "data_recd", "sim_movies", "media_type", "movie", 3, "media_id"], ["carousel_title", "Recommended TV Shows", "data_recd", "reco_tv", "media_type", "tv", 3, "media_id"], ["carousel_title", "Similar TV Shows", "data_recd", "sim_tv", "media_type", "tv", 3, "media_id"]], template: function MediaDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "youtube-player", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Genres: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Spoken Languages: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MediaDetailsComponent_button_22_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, MediaDetailsComponent_button_23_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MediaDetailsComponent_ngb_alert_24_Template, 3, 1, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, MediaDetailsComponent_div_38_Template, 6, 8, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, MediaDetailsComponent_ng_template_39_Template, 40, 18, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, MediaDetailsComponent_div_42_Template, 7, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, MediaDetailsComponent_app_home_page_carousels_44_Template, 1, 1, "app-home-page-carousels", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, MediaDetailsComponent_app_home_page_carousels_45_Template, 1, 1, "app-home-page-carousels", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, MediaDetailsComponent_app_home_page_carousels_46_Template, 1, 1, "app-home-page-carousels", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, MediaDetailsComponent_app_home_page_carousels_47_Template, 1, 1, "app-home-page-carousels", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c4, ctx.mobile ? "85vw" : "72%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("videoId", ctx.video_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c5, ctx.mobile ? "0" : "20px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dateline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.genreline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.langline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.is_on_watchlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.is_on_watchlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.descline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.mobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx.encoded_title, "%0Ahttps://www.youtube.com/watch?v=", ctx.video_id, "%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.fb_video_id, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.mobile ? "noscrollbar" : "scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.no_cast != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c4, ctx.mobile ? "90vw" : "76%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.no_reviews != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.media_type == "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.media_type == "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.media_type == "tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.media_type == "tv");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _home_page_carousels_home_page_carousels_component__WEBPACK_IMPORTED_MODULE_10__["HomePageCarouselsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\r\n\r\n.details_face{\r\n    margin:auto;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#details_face2{\r\n    width:80%;\r\n    margin:auto;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#details_right{\r\n    text-align: left;\r\n}\r\n\r\n#details_title{\r\n    font-size: 40px;\r\n}\r\n\r\n#details_tagline{\r\n    font-size: 20px;\r\n    color: rgb(188,193,200);\r\n    padding-top: 10px;\r\n    padding-bottom:10px ;\r\n}\r\n\r\n#details_dateline{\r\n    font-size: 23px;\r\n    padding-top: 10px;\r\n    padding-bottom:10px ;\r\n}\r\n\r\n#details_genreline,#details_langline{\r\n    padding-bottom:5px ;\r\n}\r\n\r\n#details_button{\r\n   padding-top: 20px;\r\n   padding-bottom: 20px;\r\n}\r\n\r\n#details_description{\r\n    text-align: justify;\r\n    padding-top:20px;\r\n    padding-bottom: 30px;\r\n\r\n}\r\n\r\n#details_share{\r\n    text-align: left;\r\n    padding-top:20px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n#details_cast{\r\n    text-align: left;\r\n\r\n}\r\n\r\n.noscrollbar #details_cast_inner::-webkit-scrollbar{ \r\n    display: none;\r\n}\r\n\r\n#details_cast_inner{\r\n    color: black;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.custom-cast-card{\r\n    border-radius: 15px;\r\n    border:none;\r\n    min-width:171px;\r\n    max-width:171px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.custom-card-img{\r\n    border-radius: 15px;\r\n    border:none;\r\n    border-radius: 15px 15px 0 0;\r\n    padding:0;\r\n}\r\n\r\n#right-filler{\r\n    border: 0.5px solid rgb(0,0,0,0);\r\n    background-color: rgb(0,0,0,0);\r\n}\r\n\r\n#details_review{\r\n    padding: 20px;\r\n    text-align: left;\r\n}\r\n\r\n#review1{\r\n    background-color: #fff;\r\n    min-height:240px ;\r\n    color: black;\r\n    border-radius: 10px;\r\n    max-width: 94%;\r\n}\r\n\r\n#review_left{\r\n    padding-left:60px;\r\n    padding-top: 40px;\r\n\r\n}\r\n\r\n#rr_1{\r\n    \r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n#rr_credits{\r\n    color: rgb(127, 131, 136);\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\n#rr{\r\n    font-size: 15px;;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3; \r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n#rr_link{\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.modal-content{\r\n    color: black;\r\n}\r\n\r\n#cast_l{\r\n    padding:12px;\r\n}\r\n\r\n#cast_r{\r\n    padding:12px;\r\n\r\n}\r\n\r\n#cast_soc{\r\n    padding-top:12px;\r\n\r\n}\r\n\r\n#cast_bio{\r\n    padding:12px;\r\n\r\n}\r\n\r\n.fa-facebook-square{\r\n    color: blue;\r\n    padding: 2px;\r\n}\r\n\r\n.fa-twitter{\r\n    color:rgb(34, 139, 255);\r\n    padding: 4px;\r\n}\r\n\r\n.fa-instagram{\r\n    color:rgb(128,0,128);\r\n    padding: 4px;\r\n}\r\n\r\n.fa-imdb{\r\n    color:rgb(226,182,43);\r\n    padding: 4px;\r\n}\r\n\r\n#oval_rating{\r\n    color: white;\r\n    background-color: black;\r\n    border-radius: 50% / 70%;\r\n    display: inline-block;\r\n    font-size: 22px;\r\n    padding-bottom: 2px;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n}\r\n\r\n#star{\r\n    font-size: 24px;\r\n\r\n}\r\n\r\n#starno{\r\n    font-size: 19px;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\n.charname{\r\n    font-size: small; \r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsb0JBQW9CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7O0FBRXhCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBR0E7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlOztBQUVuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVkaWEtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZGV0YWlsc19mYWNle1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2RldGFpbHNfZmFjZTJ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jZGV0YWlsc19yaWdodHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNkZXRhaWxzX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiNkZXRhaWxzX3RhZ2xpbmV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDE4OCwxOTMsMjAwKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MTBweCA7XHJcbn1cclxuI2RldGFpbHNfZGF0ZWxpbmV7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHggO1xyXG59XHJcbiNkZXRhaWxzX2dlbnJlbGluZSwjZGV0YWlsc19sYW5nbGluZXtcclxuICAgIHBhZGRpbmctYm90dG9tOjVweCA7XHJcbn1cclxuI2RldGFpbHNfYnV0dG9ue1xyXG4gICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNkZXRhaWxzX2Rlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbn1cclxuI2RldGFpbHNfc2hhcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZGV0YWlsc19jYXN0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbn1cclxuXHJcbi5ub3Njcm9sbGJhciAjZGV0YWlsc19jYXN0X2lubmVyOjotd2Via2l0LXNjcm9sbGJhcnsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuI2RldGFpbHNfY2FzdF9pbm5lcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jdXN0b20tY2FzdC1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgbWluLXdpZHRoOjE3MXB4O1xyXG4gICAgbWF4LXdpZHRoOjE3MXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jdXN0b20tY2FyZC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcblxyXG4jcmlnaHQtZmlsbGVye1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMCwwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7XHJcbn1cclxuXHJcbiNkZXRhaWxzX3Jldmlld3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jcmV2aWV3MXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OjI0MHB4IDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk0JTtcclxufVxyXG5cclxuI3Jldmlld19sZWZ0e1xyXG4gICAgcGFkZGluZy1sZWZ0OjYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcbn1cclxuXHJcbiNycl8xe1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jcnJfY3JlZGl0c3tcclxuICAgIGNvbG9yOiByZ2IoMTI3LCAxMzEsIDEzNik7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI3Jye1xyXG4gICAgZm9udC1zaXplOiAxNXB4OztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyBcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuI3JyX2xpbmt7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNjYXN0X2x7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbn1cclxuXHJcbiNjYXN0X3J7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcblxyXG59XHJcblxyXG5cclxuI2Nhc3Rfc29je1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxuXHJcbn1cclxuI2Nhc3RfYmlve1xyXG4gICAgcGFkZGluZzoxMnB4O1xyXG5cclxufVxyXG5cclxuLmZhLWZhY2Vib29rLXNxdWFyZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uZmEtdHdpdHRlcntcclxuICAgIGNvbG9yOnJnYigzNCwgMTM5LCAyNTUpO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5mYS1pbnN0YWdyYW17XHJcbiAgICBjb2xvcjpyZ2IoMTI4LDAsMTI4KTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG4uZmEtaW1kYntcclxuICAgIGNvbG9yOnJnYigyMjYsMTgyLDQzKTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuI292YWxfcmF0aW5ne1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgLyA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuI3N0YXJ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG59XHJcbiNzdGFybm97XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uY2hhcm5hbWV7XHJcbiAgICBmb250LXNpemU6IHNtYWxsOyBcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _my_list_page_my_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-list-page/my-list-page.component */ "Qxlp");
/* harmony import */ var _media_details_media_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-details/media-details.component */ "aVqH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'mylist', component: _my_list_page_my_list_page_component__WEBPACK_IMPORTED_MODULE_2__["MyListPageComponent"] },
    { path: 'watch/:media_type/:id', component: _media_details_media_details_component__WEBPACK_IMPORTED_MODULE_3__["MediaDetailsComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
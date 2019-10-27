(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/users/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/users/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tableData: [{
        userName: "Martin Garrix",
        email: "martingarrix@gmail.com"
      }, {
        userName: "Nicky Romero",
        email: "nickyromero@gmail.com"
      }, {
        userName: "Dimitri Vegas",
        email: "dimitrivegas@gmail.com"
      }, {
        userName: "Afrojack",
        email: "afrojack@gmail.com"
      }, {
        userName: "Like Mike",
        email: "likemike@gmail.com"
      }, {
        userName: "Steve Aoki",
        email: "steveaoki@gmail.com"
      }],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      currentPage: 1,
      formLabelWidth: "120px",
      centerDialogVisible: false,
      dialogFormCreate: false
    };
  },
  methods: {
    handleSizeChange: function handleSizeChange() {
      return;
    },
    handleCurrentChange: function handleCurrentChange() {
      return;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "users" },
    [
      _c(
        "el-card",
        { staticClass: "box-card" },
        [
          _c(
            "div",
            {
              staticClass: "clearfix",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("span", [_vm._v("USER LIST")]),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticStyle: { float: "right", padding: "3px 0" },
                  attrs: { type: "text" },
                  on: {
                    click: function($event) {
                      _vm.dialogFormCreate = true
                    }
                  }
                },
                [_vm._v("Create User")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.tableData, stripe: "" }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "userName", label: "User Name", width: "180" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "email", label: "Email", width: "180" }
              }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { prop: "url" } }),
              _vm._v(" "),
              _c(
                "el-table-column",
                { attrs: { fixed: "right", label: "", width: "120" } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "text" },
                      on: {
                        click: function($event) {
                          _vm.dialogFormVisible = true
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "text" },
                      on: {
                        click: function($event) {
                          _vm.centerDialogVisible = true
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-pagination", {
            attrs: {
              "current-page": _vm.currentPage,
              "page-sizes": [100, 200, 300, 400],
              "page-size": 100,
              layout: "sizes, prev, pager, next",
              total: 1000
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange,
              "update:currentPage": function($event) {
                _vm.currentPage = $event
              },
              "update:current-page": function($event) {
                _vm.currentPage = $event
              }
            }
          }),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Create New User",
                visible: _vm.dialogFormCreate
              },
              on: {
                "update:visible": function($event) {
                  _vm.dialogFormCreate = $event
                }
              }
            },
            [
              _c(
                "el-form",
                { attrs: { model: _vm.form } },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Name",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input name",
                          autocomplete: "off"
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Email",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input your email",
                          autocomplete: "off"
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Password",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input password",
                          "show-password": ""
                        },
                        model: {
                          value: _vm.form.passwork,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "passwork", $$v)
                          },
                          expression: "form.passwork"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.dialogFormCreate = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialogFormCreate = false
                        }
                      }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: { title: "Edit User", visible: _vm.dialogFormVisible },
              on: {
                "update:visible": function($event) {
                  _vm.dialogFormVisible = $event
                }
              }
            },
            [
              _c(
                "el-form",
                { attrs: { model: _vm.form } },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Name",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input name you want update",
                          autocomplete: "off"
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Email",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input eamil you want update",
                          autocomplete: "off"
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Password",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: {
                          placeholder: "Please input password",
                          "show-password": ""
                        },
                        model: {
                          value: _vm.form.passwork,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "passwork", $$v)
                          },
                          expression: "form.passwork"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.dialogFormVisible = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialogFormVisible = false
                        }
                      }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Warning",
                visible: _vm.centerDialogVisible,
                width: "20%",
                center: ""
              },
              on: {
                "update:visible": function($event) {
                  _vm.centerDialogVisible = $event
                }
              }
            },
            [
              _c("span", [_vm._v("You want to Delete ?")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.centerDialogVisible = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.centerDialogVisible = false
                        }
                      }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "users" }, [
      _c("h1", [_vm._v("This is user page")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/users/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/modules/users/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4211acf5&scoped=true& */ "./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4211acf5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/users/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/users/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4211acf5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/users/index.vue?vue&type=template&id=4211acf5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4211acf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
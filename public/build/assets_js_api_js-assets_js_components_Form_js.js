"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_api_js-assets_js_components_Form_js"],{

/***/ "./assets/js/api.js":
/*!**************************!*\
  !*** ./assets/js/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteUser: () => (/* binding */ deleteUser),
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   loginUser: () => (/* binding */ loginUser),
/* harmony export */   registryUser: () => (/* binding */ registryUser),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var loginUser = function loginUser(formData) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status !== 204) {
          reject('Nie udało się zalogować użytkownika.');
        } else {}
      }
    };
    var requestBody = JSON.stringify(formData);
    xhr.send(requestBody);
  });
};
var getUsers = function getUsers() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/users', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Nie udało się pobrać danych użytkowników.');
        }
      }
    };
    xhr.send();
  });
};
var registryUser = function registryUser(formData) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status !== 204) {
          reject('Nie udało się zarejestrować użytkownika.');
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: "Rejestracja",
            text: "Użytkownik został pomyślnie zarejestrowany",
            icon: "success"
          });
        }
      }
    };
    var requestBody = JSON.stringify(formData);
    xhr.send(requestBody);
  });
};
var updateUser = function updateUser(formData) {
  var id = formData['id'];
  delete formData['id'];
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('PATCH', '/api/users/' + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (!xhr.status === 204) {
          reject('Nie udało się zaktualizować użytkownika.');
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: "Aktualizacja",
            text: "Użytkownik został pomyślnie zaktualizowany",
            icon: "success"
          });
        }
      }
    };
    var requestBody = JSON.stringify(formData);
    xhr.send(requestBody);
  });
};
var deleteUser = function deleteUser(id) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/api/users/' + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (!xhr.status === 204) {
          reject('Operacja nie została zakończona pomyślnie.');
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: "Usuwanie",
            text: "Użytkownik został usunięty z bazy",
            icon: "success"
          });
        }
      }
    };
    xhr.send();
  });
};

/***/ }),

/***/ "./assets/js/components/DeveloperFields.js":
/*!*************************************************!*\
  !*** ./assets/js/components/DeveloperFields.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeveloperFields = function DeveloperFields(_ref) {
  var _onChange = _ref.onChange,
    _ref$isEditMode = _ref.isEditMode,
    isEditMode = _ref$isEditMode === void 0 ? false : _ref$isEditMode,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(function () {
      return isEditMode ? user.skills.has_mysql_knowledge : false;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isMysqlKnowsChecked = _useState2[0],
    setIsMysqlKnowsChecked = _useState2[1];
  var handleMysqlCheckboxChange = function handleMysqlCheckboxChange(e) {
    var isChecked = e.target.checked;
    setIsMysqlKnowsChecked(isChecked);
    _onChange(e.target.name, isChecked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "integrated_development_environments",
    defaultValue: isEditMode ? user.skills.integrated_development_environments : '',
    placeholder: "IDE Environments",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "programming_languages",
    defaultValue: isEditMode ? user.skills.programming_languages : '',
    placeholder: "Programming Languages",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'form-check mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "checkbox",
    className: 'form-check-input',
    name: "has_mysql_knowledge",
    id: 'mysqlCheckInput',
    checked: isMysqlKnowsChecked,
    onChange: handleMysqlCheckboxChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: 'form-check-label',
    htmlFor: 'mysqlCheckInput'
  }, "zna MySQL")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeveloperFields);

/***/ }),

/***/ "./assets/js/components/Form.js":
/*!**************************************!*\
  !*** ./assets/js/components/Form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _JobPosition__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./JobPosition */ "./assets/js/components/JobPosition.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

























function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Form = function Form(_ref) {
  var onSave = _ref.onSave,
    _ref$isEditMode = _ref.isEditMode,
    isEditMode = _ref$isEditMode === void 0 ? false : _ref$isEditMode,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user,
    _ref$onBack = _ref.onBack,
    onBack = _ref$onBack === void 0 ? null : _ref$onBack;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(user),
    _useState2 = _slicedToArray(_useState, 2),
    inputs = _useState2[0],
    setInputs = _useState2[1];
  var handleChange = function handleChange(name, value) {
    setInputs(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    onSave(inputs);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    className: 'btn btn-primary',
    onClick: onBack
  }, "Powr\xF3t"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("form", {
    onSubmit: handleSubmit,
    method: 'POST',
    className: 'registry-form mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h4", {
    className: "text-center"
  }, isEditMode ? 'Edycja użytkownika' : 'Formularz rejestracyjny'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: 'first_name',
    defaultValue: isEditMode ? user.first_name : '',
    placeholder: "Imi\u0119",
    onChange: function onChange(e) {
      return handleChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: 'last_name',
    defaultValue: isEditMode ? user.last_name : '',
    placeholder: "Nazwisko",
    onChange: function onChange(e) {
      return handleChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
    type: "email",
    className: 'form-control',
    name: 'email',
    defaultValue: isEditMode ? user.email : '',
    placeholder: "Email",
    onChange: function onChange(e) {
      return handleChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("textarea", {
    name: "description",
    className: 'form-control',
    defaultValue: isEditMode ? user.description : '',
    placeholder: "Opis",
    onChange: function onChange(e) {
      return handleChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_JobPosition__WEBPACK_IMPORTED_MODULE_26__["default"], {
    user: user,
    isEditMode: isEditMode,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("button", {
    type: "submit",
    className: 'btn btn-primary'
  }, "Zapisz")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/js/components/JobPosition.js":
/*!*********************************************!*\
  !*** ./assets/js/components/JobPosition.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _TesterFields__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./TesterFields */ "./assets/js/components/TesterFields.js");
/* harmony import */ var _DeveloperFields__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./DeveloperFields */ "./assets/js/components/DeveloperFields.js");
/* harmony import */ var _ProjectManagerFields__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ProjectManagerFields */ "./assets/js/components/ProjectManagerFields.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

























function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var JobPosition = function JobPosition(_ref) {
  var onChange = _ref.onChange,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user,
    _ref$isEditMode = _ref.isEditMode,
    isEditMode = _ref$isEditMode === void 0 ? false : _ref$isEditMode;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(isEditMode ? user.job_position : ''),
    _useState2 = _slicedToArray(_useState, 2),
    jobPosition = _useState2[0],
    setJobPosition = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(isEditMode ? user.skills : {}),
    _useState4 = _slicedToArray(_useState3, 2),
    skills = _useState4[0],
    setSkills = _useState4[1];
  var handleSelectChange = function handleSelectChange(name, position) {
    setJobPosition(position);
    onChange(name, position);
  };
  var handleSkillsChange = function handleSkillsChange(name, value) {
    var updatedSkills = _objectSpread(_objectSpread({}, skills), {}, _defineProperty({}, name, value));
    setSkills(updatedSkills);
    onChange('skills', updatedSkills);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("select", {
    name: "job_position",
    className: 'form-control',
    defaultValue: jobPosition,
    onChange: function onChange(e) {
      return handleSelectChange(e.target.name, e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("option", {
    value: ""
  }, "Wybierz stanowisko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("option", {
    value: "tester"
  }, "Tester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("option", {
    value: "developer"
  }, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("option", {
    value: "project-manager"
  }, "Project Manager"))), jobPosition === 'tester' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_TesterFields__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onChange: handleSkillsChange,
    isEditMode: isEditMode,
    user: user
  }), jobPosition === 'developer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_DeveloperFields__WEBPACK_IMPORTED_MODULE_27__["default"], {
    onChange: handleSkillsChange,
    isEditMode: isEditMode,
    user: user
  }), jobPosition === 'project-manager' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_ProjectManagerFields__WEBPACK_IMPORTED_MODULE_28__["default"], {
    onChange: handleSkillsChange,
    isEditMode: isEditMode,
    user: user
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobPosition);

/***/ }),

/***/ "./assets/js/components/ProjectManagerFields.js":
/*!******************************************************!*\
  !*** ./assets/js/components/ProjectManagerFields.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProjectManagerFields = function ProjectManagerFields(_ref) {
  var _onChange = _ref.onChange,
    _ref$isEditMode = _ref.isEditMode,
    isEditMode = _ref$isEditMode === void 0 ? false : _ref$isEditMode,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(function () {
      return isEditMode ? user.skills.has_scrum_knowledge : false;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isScrumKnowsChecked = _useState2[0],
    setIsScrumKnowsChecked = _useState2[1];
  var handleScrumCheckboxChange = function handleScrumCheckboxChange(e) {
    setIsScrumKnowsChecked(e.target.checked);
    _onChange(e.target.name, e.target.checked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "project_methodologies",
    defaultValue: isEditMode ? user.skills.project_management_methodologies : '',
    placeholder: "Project Management Methodologies",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "reporting_systems",
    defaultValue: isEditMode ? user.skills.reporting_systems : '',
    placeholder: "Reporting Systems",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'form-check mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "checkbox",
    checked: isScrumKnowsChecked,
    className: 'form-check-input',
    name: "has_scrum_knowledge",
    id: 'scrumCheckInput',
    onChange: handleScrumCheckboxChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: 'form-check-label',
    htmlFor: 'scrumCheckInput'
  }, "zna Scrum")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManagerFields);

/***/ }),

/***/ "./assets/js/components/TesterFields.js":
/*!**********************************************!*\
  !*** ./assets/js/components/TesterFields.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TesterFields = function TesterFields(_ref) {
  var _onChange = _ref.onChange,
    _ref$isEditMode = _ref.isEditMode,
    isEditMode = _ref$isEditMode === void 0 ? false : _ref$isEditMode,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(function () {
      return isEditMode ? user.skills.has_selenium_knowledge : false;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isSeleniumKnowsChecked = _useState2[0],
    setIsSeleniumKnowsChecked = _useState2[1];
  var handleSeleniumCheckboxChange = function handleSeleniumCheckboxChange(e) {
    setIsSeleniumKnowsChecked(e.target.checked);
    _onChange(e.target.name, e.target.checked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "testing_systems",
    defaultValue: isEditMode ? user.skills.testing_systems : '',
    placeholder: "Testing Systems",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "text",
    className: 'form-control',
    name: "reporting_systems",
    defaultValue: isEditMode ? user.skills.reporting_systems : '',
    placeholder: "Reporting Systems",
    onChange: function onChange(e) {
      return _onChange(e.target.name, e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: 'form-check mb-3 mt-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "checkbox",
    checked: isSeleniumKnowsChecked,
    className: 'form-check-input',
    name: "has_selenium_knowledge",
    id: 'seleniumCheckInput',
    onChange: handleSeleniumCheckboxChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: 'form-check-label',
    htmlFor: 'seleniumCheckInput'
  }, "zna Selenium")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TesterFields);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2pzX2FwaV9qcy1hc3NldHNfanNfY29tcG9uZW50c19Gb3JtX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFeEIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFFBQVEsRUFBSztFQUVuQyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUNwQyxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBYyxDQUFDLENBQUM7SUFDaENELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQ3BDRixHQUFHLENBQUNHLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztJQUN4REgsR0FBRyxDQUFDSSxrQkFBa0IsR0FBRyxZQUFZO01BQ2pDLElBQUlKLEdBQUcsQ0FBQ0ssVUFBVSxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFJTCxHQUFHLENBQUNNLE1BQU0sS0FBSyxHQUFHLEVBQUU7VUFDcEJQLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQztRQUNsRCxDQUFDLE1BQU0sQ0FFUDtNQUNKO0lBQ0osQ0FBQztJQUNELElBQU1RLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNiLFFBQVEsQ0FBQztJQUM1Q0ksR0FBRyxDQUFDVSxJQUFJLENBQUNILFdBQVcsQ0FBQztFQUN6QixDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUMxQixPQUFPLElBQUlkLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUNwQyxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBYyxDQUFDLENBQUM7SUFDaENELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQ25DRixHQUFHLENBQUNJLGtC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SyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQzlGLENBQUMsZUFDTjdCLDJEQUFBO0lBQUt3QixTQUFTLEVBQUU7RUFBWSxnQkFDeEJ4QiwyREFBQTtJQUFPeUIsSUFBSSxFQUFDLE1BQU07SUFBQ0QsU0FBUyxFQUFFLGNBQWU7SUFBQ0gsSUFBSSxFQUFFLG1CQUFvQjtJQUFDSyxZQUFZLEVBQUVwQixVQUFVLEdBQUdFLElBQUksQ0FBQ0UsTUFBTSxDQUFDNEQsaUJBQWlCLEdBQUcsRUFBRztJQUNoSTFDLFdBQVcsRUFBQyxtQkFBbUI7SUFBQ3hCLFFBQVEsRUFBRSxTQUFBQSxTQUFDYSxDQUFDO01BQUEsT0FBS2IsU0FBUSxDQUFDYSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFSixDQUFDLENBQUNFLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQ2hHLENBQUMsZUFDTjdCLDJEQUFBO0lBQUt3QixTQUFTLEVBQUU7RUFBdUIsZ0JBQ25DeEIsMkRBQUE7SUFBT3lCLElBQUksRUFBQyxVQUFVO0lBQUNMLE9BQU8sRUFBRW9ELHNCQUF1QjtJQUFDaEQsU0FBUyxFQUFFLGtCQUFtQjtJQUMvRUgsSUFBSSxFQUFFLHdCQUF5QjtJQUFDdkIsRUFBRSxFQUFFLG9CQUFxQjtJQUFDTSxRQUFRLEVBQUVzRTtFQUE2QixDQUFFLENBQUMsZUFDM0cxRSwyREFBQTtJQUFPd0IsU0FBUyxFQUFFLGtCQUFtQjtJQUFDTyxPQUFPLEVBQUU7RUFBcUIsR0FBQyxjQUFtQixDQUN2RixDQUNQLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVzQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9EZXZlbG9wZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Kb2JQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0TWFuYWdlckZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UZXN0ZXJGaWVsZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChmb3JtRGF0YSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL2FwaS9sb2dpbicsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnTmllIHVkYcWCbyBzacSZIHphbG9nb3dhxIcgdcW8eXRrb3duaWthLicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpO1xyXG4gICAgICAgIHhoci5zZW5kKHJlcXVlc3RCb2R5KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgJy9hcGkvdXNlcnMnLCB0cnVlKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ05pZSB1ZGHFgm8gc2nEmSBwb2JyYcSHIGRhbnljaCB1xbx5dGtvd25pa8Ozdy4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJ5VXNlciA9IChmb3JtRGF0YSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL2FwaS91c2VycycsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnTmllIHVkYcWCbyBzacSZIHphcmVqZXN0cm93YcSHIHXFvHl0a293bmlrYS4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVqZXN0cmFjamFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJVxbx5dGtvd25payB6b3N0YcWCIHBvbXnFm2xuaWUgemFyZWplc3Ryb3dhbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdEJvZHkgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XHJcbiAgICAgICAgeGhyLnNlbmQocmVxdWVzdEJvZHkpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChmb3JtRGF0YSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGlkID0gZm9ybURhdGFbJ2lkJ107XHJcbiAgICBkZWxldGUgZm9ybURhdGFbJ2lkJ107XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignUEFUQ0gnLCAnL2FwaS91c2Vycy8nICsgaWQsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF4aHIuc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ05pZSB1ZGHFgm8gc2nEmSB6YWt0dWFsaXpvd2HEhyB1xbx5dGtvd25pa2EuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFrdHVhbGl6YWNqYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlXFvHl0a293bmlrIHpvc3RhxYIgcG9tecWbbG5pZSB6YWt0dWFsaXpvd2FueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuICAgICAgICB4aHIuc2VuZChyZXF1ZXN0Qm9keSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gKGlkKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignREVMRVRFJywgJy9hcGkvdXNlcnMvJyArIGlkLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICgheGhyLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdPcGVyYWNqYSBuaWUgem9zdGHFgmEgemFrb8WEY3pvbmEgcG9tecWbbG5pZS4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXN1d2FuaWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJVxbx5dGtvd25payB6b3N0YcWCIHVzdW5pxJl0eSB6IGJhenlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEZXZlbG9wZXJGaWVsZHMgPSAoe29uQ2hhbmdlLCBpc0VkaXRNb2RlID0gZmFsc2UsIHVzZXIgPSBudWxsIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNNeXNxbEtub3dzQ2hlY2tlZCwgc2V0SXNNeXNxbEtub3dzQ2hlY2tlZF0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRWRpdE1vZGUgPyB1c2VyLnNraWxscy5oYXNfbXlzcWxfa25vd2xlZGdlIDogZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNeXNxbENoZWNrYm94Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIHNldElzTXlzcWxLbm93c0NoZWNrZWQoaXNDaGVja2VkKTtcclxuICAgICAgICBvbkNoYW5nZShlLnRhcmdldC5uYW1lLCBpc0NoZWNrZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBuYW1lPXtcImludGVncmF0ZWRfZGV2ZWxvcG1lbnRfZW52aXJvbm1lbnRzXCJ9IGRlZmF1bHRWYWx1ZT17aXNFZGl0TW9kZSA/IHVzZXIuc2tpbGxzLmludGVncmF0ZWRfZGV2ZWxvcG1lbnRfZW52aXJvbm1lbnRzIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJREUgRW52aXJvbm1lbnRzXCIgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBuYW1lPXtcInByb2dyYW1taW5nX2xhbmd1YWdlc1wifSBkZWZhdWx0VmFsdWU9e2lzRWRpdE1vZGUgPyB1c2VyLnNraWxscy5wcm9ncmFtbWluZ19sYW5ndWFnZXMgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2dyYW1taW5nIExhbmd1YWdlc1wiIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tY2hlY2sgbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXsnZm9ybS1jaGVjay1pbnB1dCd9IG5hbWU9e1wiaGFzX215c3FsX2tub3dsZWRnZVwifSBpZD17J215c3FsQ2hlY2tJbnB1dCd9IGNoZWNrZWQ9e2lzTXlzcWxLbm93c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU15c3FsQ2hlY2tib3hDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb3JtLWNoZWNrLWxhYmVsJ30gaHRtbEZvcj17J215c3FsQ2hlY2tJbnB1dCd9PnpuYSBNeVNRTDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyRmllbGRzOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEpvYlBvc2l0aW9uIGZyb20gJy4vSm9iUG9zaXRpb24nO1xyXG5cclxuY29uc3QgRm9ybSA9ICh7b25TYXZlLCBpc0VkaXRNb2RlID0gZmFsc2UsIHVzZXIgPSBudWxsLCBvbkJhY2sgPSBudWxsfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh1c2VyKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dHModmFsdWVzID0+ICh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25TYXZlKGlucHV0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aXNFZGl0TW9kZSAmJiAoPGJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuLXByaW1hcnknfSBvbkNsaWNrPXtvbkJhY2t9PlBvd3LDs3Q8L2J1dHRvbj4pfVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9eydQT1NUJ30gY2xhc3NOYW1lPXsncmVnaXN0cnktZm9ybSBteC1hdXRvJ30+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57aXNFZGl0TW9kZSA/ICdFZHljamEgdcW8eXRrb3duaWthJyA6ICdGb3JtdWxhcnogcmVqZXN0cmFjeWpueSd9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJ30gbmFtZT17J2ZpcnN0X25hbWUnfSBkZWZhdWx0VmFsdWU9e2lzRWRpdE1vZGUgPyB1c2VyLmZpcnN0X25hbWUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbWnEmVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21iLTMgbXQtNSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCd9IG5hbWU9eydsYXN0X25hbWUnfSBkZWZhdWx0VmFsdWU9e2lzRWRpdE1vZGUgPyB1c2VyLmxhc3RfbmFtZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendpc2tvXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCd9IG5hbWU9eydlbWFpbCd9IGRlZmF1bHRWYWx1ZT17aXNFZGl0TW9kZSA/IHVzZXIuZW1haWwgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21iLTMgbXQtNSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBkZWZhdWx0VmFsdWU9e2lzRWRpdE1vZGUgPyB1c2VyLmRlc2NyaXB0aW9uIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3Bpc1wiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEpvYlBvc2l0aW9uIHVzZXI9e3VzZXJ9IGlzRWRpdE1vZGU9e2lzRWRpdE1vZGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17J2J0biBidG4tcHJpbWFyeSd9PlphcGlzejwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGVzdGVyRmllbGRzIGZyb20gXCIuL1Rlc3RlckZpZWxkc1wiO1xyXG5pbXBvcnQgRGV2ZWxvcGVyRmllbGRzIGZyb20gXCIuL0RldmVsb3BlckZpZWxkc1wiO1xyXG5pbXBvcnQgUHJvamVjdE1hbmFnZXJGaWVsZHMgZnJvbSBcIi4vUHJvamVjdE1hbmFnZXJGaWVsZHNcIjtcclxuXHJcbmNvbnN0IEpvYlBvc2l0aW9uID0gKHsgb25DaGFuZ2UsIHVzZXIgPSBudWxsLCBpc0VkaXRNb2RlID0gZmFsc2UgIH0pID0+IHtcclxuICAgIGNvbnN0IFtqb2JQb3NpdGlvbiwgc2V0Sm9iUG9zaXRpb25dID0gdXNlU3RhdGUoaXNFZGl0TW9kZSA/IHVzZXIuam9iX3Bvc2l0aW9uIDogJycpO1xyXG4gICAgY29uc3QgW3NraWxscywgc2V0U2tpbGxzXSA9IHVzZVN0YXRlKGlzRWRpdE1vZGUgPyB1c2VyLnNraWxscyA6IHt9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAobmFtZSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBzZXRKb2JQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgb25DaGFuZ2UobmFtZSwgcG9zaXRpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTa2lsbHNDaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkU2tpbGxzID0geyAuLi5za2lsbHMsIFtuYW1lXTogdmFsdWUgfTtcclxuXHJcbiAgICAgICAgc2V0U2tpbGxzKHVwZGF0ZWRTa2lsbHMpO1xyXG4gICAgICAgIG9uQ2hhbmdlKCdza2lsbHMnLCB1cGRhdGVkU2tpbGxzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJqb2JfcG9zaXRpb25cIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBkZWZhdWx0VmFsdWU9e2pvYlBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlbGVjdENoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5XeWJpZXJ6IHN0YW5vd2lza288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGVzdGVyXCI+VGVzdGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRldmVsb3BlclwiPkRldmVsb3Blcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcm9qZWN0LW1hbmFnZXJcIj5Qcm9qZWN0IE1hbmFnZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2pvYlBvc2l0aW9uID09PSAndGVzdGVyJyAmJiA8VGVzdGVyRmllbGRzIG9uQ2hhbmdlPXtoYW5kbGVTa2lsbHNDaGFuZ2V9IGlzRWRpdE1vZGU9e2lzRWRpdE1vZGV9IHVzZXI9e3VzZXJ9Lz59XHJcbiAgICAgICAgICAgIHtqb2JQb3NpdGlvbiA9PT0gJ2RldmVsb3BlcicgJiYgPERldmVsb3BlckZpZWxkcyBvbkNoYW5nZT17aGFuZGxlU2tpbGxzQ2hhbmdlfSBpc0VkaXRNb2RlPXtpc0VkaXRNb2RlfSB1c2VyPXt1c2VyfS8+fVxyXG4gICAgICAgICAgICB7am9iUG9zaXRpb24gPT09ICdwcm9qZWN0LW1hbmFnZXInICYmIDxQcm9qZWN0TWFuYWdlckZpZWxkcyBvbkNoYW5nZT17aGFuZGxlU2tpbGxzQ2hhbmdlfSBpc0VkaXRNb2RlPXtpc0VkaXRNb2RlfSB1c2VyPXt1c2VyfS8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iUG9zaXRpb247IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFByb2plY3RNYW5hZ2VyRmllbGRzID0gKHtvbkNoYW5nZSwgaXNFZGl0TW9kZSA9IGZhbHNlLCB1c2VyID0gbnVsbCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzU2NydW1Lbm93c0NoZWNrZWQsIHNldElzU2NydW1Lbm93c0NoZWNrZWRdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpc0VkaXRNb2RlID8gdXNlci5za2lsbHMuaGFzX3NjcnVtX2tub3dsZWRnZSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2NydW1DaGVja2JveENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SXNTY3J1bUtub3dzQ2hlY2tlZChlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICBvbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21iLTMgbXQtNSd9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJ30gbmFtZT17XCJwcm9qZWN0X21ldGhvZG9sb2dpZXNcIn0gZGVmYXVsdFZhbHVlPXtpc0VkaXRNb2RlID8gdXNlci5za2lsbHMucHJvamVjdF9tYW5hZ2VtZW50X21ldGhvZG9sb2dpZXMgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgTWFuYWdlbWVudCBNZXRob2RvbG9naWVzXCIgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBuYW1lPXtcInJlcG9ydGluZ19zeXN0ZW1zXCJ9IGRlZmF1bHRWYWx1ZT17aXNFZGl0TW9kZSA/IHVzZXIuc2tpbGxzLnJlcG9ydGluZ19zeXN0ZW1zIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBvcnRpbmcgU3lzdGVtc1wiIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tY2hlY2sgbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNTY3J1bUtub3dzQ2hlY2tlZH0gY2xhc3NOYW1lPXsnZm9ybS1jaGVjay1pbnB1dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJoYXNfc2NydW1fa25vd2xlZGdlXCJ9IGlkPXsnc2NydW1DaGVja0lucHV0J30gb25DaGFuZ2U9e2hhbmRsZVNjcnVtQ2hlY2tib3hDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb3JtLWNoZWNrLWxhYmVsJ30gaHRtbEZvcj17J3NjcnVtQ2hlY2tJbnB1dCd9PnpuYSBTY3J1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXJGaWVsZHM7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUZXN0ZXJGaWVsZHMgPSAoe29uQ2hhbmdlLCBpc0VkaXRNb2RlID0gZmFsc2UsIHVzZXI9IG51bGwgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc1NlbGVuaXVtS25vd3NDaGVja2VkLCBzZXRJc1NlbGVuaXVtS25vd3NDaGVja2VkXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gaXNFZGl0TW9kZSA/IHVzZXIuc2tpbGxzLmhhc19zZWxlbml1bV9rbm93bGVkZ2UgOiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVuaXVtQ2hlY2tib3hDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElzU2VsZW5pdW1Lbm93c0NoZWNrZWQoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgb25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtYi0zIG10LTUnfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCd9IG5hbWU9e1widGVzdGluZ19zeXN0ZW1zXCJ9IGRlZmF1bHRWYWx1ZT17aXNFZGl0TW9kZSA/IHVzZXIuc2tpbGxzLnRlc3Rpbmdfc3lzdGVtcyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVzdGluZyBTeXN0ZW1zXCIgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnfSBuYW1lPXtcInJlcG9ydGluZ19zeXN0ZW1zXCJ9IGRlZmF1bHRWYWx1ZT17aXNFZGl0TW9kZSA/IHVzZXIuc2tpbGxzLnJlcG9ydGluZ19zeXN0ZW1zIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBvcnRpbmcgU3lzdGVtc1wiIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tY2hlY2sgbWItMyBtdC01J30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNTZWxlbml1bUtub3dzQ2hlY2tlZH0gY2xhc3NOYW1lPXsnZm9ybS1jaGVjay1pbnB1dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJoYXNfc2VsZW5pdW1fa25vd2xlZGdlXCJ9IGlkPXsnc2VsZW5pdW1DaGVja0lucHV0J30gb25DaGFuZ2U9e2hhbmRsZVNlbGVuaXVtQ2hlY2tib3hDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnZm9ybS1jaGVjay1sYWJlbCd9IGh0bWxGb3I9eydzZWxlbml1bUNoZWNrSW5wdXQnfT56bmEgU2VsZW5pdW08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RlckZpZWxkcztcclxuIl0sIm5hbWVzIjpbInN3YWwiLCJsb2dpblVzZXIiLCJmb3JtRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXF1ZXN0Qm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kIiwiZ2V0VXNlcnMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInJlZ2lzdHJ5VXNlciIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwidXBkYXRlVXNlciIsImlkIiwiZGVsZXRlVXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJEZXZlbG9wZXJGaWVsZHMiLCJfcmVmIiwib25DaGFuZ2UiLCJfcmVmJGlzRWRpdE1vZGUiLCJpc0VkaXRNb2RlIiwiX3JlZiR1c2VyIiwidXNlciIsIl91c2VTdGF0ZSIsInNraWxscyIsImhhc19teXNxbF9rbm93bGVkZ2UiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc015c3FsS25vd3NDaGVja2VkIiwic2V0SXNNeXNxbEtub3dzQ2hlY2tlZCIsImhhbmRsZU15c3FsQ2hlY2tib3hDaGFuZ2UiLCJlIiwiaXNDaGVja2VkIiwidGFyZ2V0IiwiY2hlY2tlZCIsIm5hbWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwiaW50ZWdyYXRlZF9kZXZlbG9wbWVudF9lbnZpcm9ubWVudHMiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicHJvZ3JhbW1pbmdfbGFuZ3VhZ2VzIiwiaHRtbEZvciIsIkpvYlBvc2l0aW9uIiwiRm9ybSIsIm9uU2F2ZSIsIl9yZWYkb25CYWNrIiwib25CYWNrIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWVzIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJtZXRob2QiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJkZXNjcmlwdGlvbiIsIlRlc3RlckZpZWxkcyIsIlByb2plY3RNYW5hZ2VyRmllbGRzIiwiam9iX3Bvc2l0aW9uIiwiam9iUG9zaXRpb24iLCJzZXRKb2JQb3NpdGlvbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0U2tpbGxzIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwicG9zaXRpb24iLCJoYW5kbGVTa2lsbHNDaGFuZ2UiLCJ1cGRhdGVkU2tpbGxzIiwiaGFzX3NjcnVtX2tub3dsZWRnZSIsImlzU2NydW1Lbm93c0NoZWNrZWQiLCJzZXRJc1NjcnVtS25vd3NDaGVja2VkIiwiaGFuZGxlU2NydW1DaGVja2JveENoYW5nZSIsInByb2plY3RfbWFuYWdlbWVudF9tZXRob2RvbG9naWVzIiwicmVwb3J0aW5nX3N5c3RlbXMiLCJoYXNfc2VsZW5pdW1fa25vd2xlZGdlIiwiaXNTZWxlbml1bUtub3dzQ2hlY2tlZCIsInNldElzU2VsZW5pdW1Lbm93c0NoZWNrZWQiLCJoYW5kbGVTZWxlbml1bUNoZWNrYm94Q2hhbmdlIiwidGVzdGluZ19zeXN0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==
(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(_,e,a){},15:function(_,e,a){},17:function(_,e,a){"use strict";a.r(e);var t=a(1),l=a.n(t),s=a(4),n=a.n(s),r=(a(14),a(5)),c=function(_){_&&_ instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,t=e.getFID,l=e.getFCP,s=e.getLCP,n=e.getTTFB;a(_),t(_),l(_),s(_),n(_)}))},i=a(0);n.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(r.a,{})}),document.getElementById("root")),c()},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var _;return Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this)).handleClick=function(e){e.preventDefault();var a=_.state.dataInput;_.setState({dataInput:a+e.target.name})},_.handleSubmit=function(e){e.preventDefault();var a=""==_.state.dataInput?0:_.state.dataInput,t=_.getResult(a);_.setState({dataInput:a+" = ".concat(t)})},_.handelReset=function(){_.setState({dataInput:""})},_.state={dataInput:"",result:""},_.handleClick=_.handleClick.bind(Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleSubmit=_.handleSubmit.bind(Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(C_Users_ashwag_Desktop_simplilearn_SimpleBlog_SimpleBlog_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"getResult",value:function getResult(data){return eval(data)}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("center",{children:"Simple Calculator"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"text",name:"value",className:"result",value:this.state.dataInput,disabled:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{class:"clear",type:"reset",onClick:this.handelReset,children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"+",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"-",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"/",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"0",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:".",children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleSubmit,children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"span",onClick:this.handleClick,name:"*",children:"*"})]})})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App}},[[17,1,2]]]);
//# sourceMappingURL=main.89a24f34.chunk.js.map
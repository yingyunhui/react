webpackJsonp([0],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(81);

var _reactRouter = __webpack_require__(64);

var _redux = __webpack_require__(45);

var _reactRedux = __webpack_require__(72);

__webpack_require__(287);

var _hello = __webpack_require__(288);

var _hello2 = _interopRequireDefault(_hello);

var _login = __webpack_require__(290);

var _login2 = _interopRequireDefault(_login);

var _index = __webpack_require__(292);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
export default class App extends React.Component{
}
*/

var history = _reactRouter.browserHistory;
var store = (0, _redux.createStore)(_index2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/' },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _hello2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login2.default })
        )
    )
), document.getElementById('root'));

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(64);

var _hello = __webpack_require__(289);

var _hello2 = _interopRequireDefault(_hello);

var _jquery = __webpack_require__(130);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            _jquery2.default.get("/api/", {}, function (data) {
                console.log(data);
            });
            return _react2.default.createElement(
                'div',
                { className: 'hello' },
                'Hello World!',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/login' },
                    'login'
                )
            );
        }
    }]);

    return Hello;
}(_react2.default.Component);

exports.default = Hello;

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(72);

__webpack_require__(291);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
        /*when use redux, don't care it.
        this.state={account:"",password:""}
        this.handleChange=this.handleChange.bind(this);
        */
    }
    /*
    handleChange(event){
        console.log(event.target.value);
    }
    */


    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                count = _props.count,
                Action = _props.Action;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'text', placeholder: '\u8D26\u53F7', onChange: Action }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { type: 'text', placeholder: '\u5BC6\u7801' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    null,
                    '\u767B\u5F55'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    count,
                    '2'
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

// Map Redux state to component props


function mapStateToProps(state) {
    return {
        count: state.count
    };
}

var Action1 = { type: 'increase'
    // Map Redux actions to component props
};function mapDispatchToProps(dispatch) {
    return {
        Action: function Action() {
            return dispatch(Action1);
        }
    };
}

// Connected Component
exports.default = Login = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(45);

//import { login } from './login';

/*
export default combineReducers({
    login
})
*/
var login = function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };
  var action = arguments[1];

  var count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
};

exports.default = login;

/***/ })

},[131]);
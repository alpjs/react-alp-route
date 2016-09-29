'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouteComponent;

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import areEqual from 'fbjs/lib/areEqual';

RouteComponent.propTypes = {
  controller: _react.PropTypes.string,
  action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
  children: _react.PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
  context: _react.PropTypes.object
};

const Props = _tcombForked2.default.interface({
  name: _tcombForked2.default.maybe(_tcombForked2.default.String),
  controller: _tcombForked2.default.maybe(_tcombForked2.default.String),
  action: _tcombForked2.default.union([_tcombForked2.default.maybe(_tcombForked2.default.String), _tcombForked2.default.list(_tcombForked2.default.String)]),
  children: _tcombForked2.default.Function
}, 'Props');

function RouteComponent(_ref, _ref2) {
  var _assert2 = _assert(_ref, Props, '{ name, controller, action, children }');

  let name = _assert2.name;
  let controller = _assert2.controller;
  let action = _assert2.action;
  let children = _assert2.children;
  let route = _ref2.context.route;

  _assert({
    name,
    controller,
    action,
    children
  }, Props, '{ name, controller, action, children }');

  if (name !== undefined && name !== route.key) return null;
  if (controller !== undefined && controller !== route.controller) return null;
  if (action !== undefined) {
    if (Array.isArray(action)) {
      if (!action.includes(route.action)) return null;
    } else if (action !== route.action) {
      return null;
    }
  }

  return children(route);
}

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')';
  }

  if (_tcombForked2.default.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);

      _tcombForked2.default.fail(message());
    }

    return type(x);
  }

  if (!(x instanceof type)) {
    _tcombForked2.default.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map
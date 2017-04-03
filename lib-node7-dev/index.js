'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import areEqual from 'fbjs/lib/areEqual';

const PropsType = _flowRuntime2.default.type('PropsType', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.nullable(_flowRuntime2.default.string())), _flowRuntime2.default.property('controller', _flowRuntime2.default.nullable(_flowRuntime2.default.string())), _flowRuntime2.default.property('action', _flowRuntime2.default.union(_flowRuntime2.default.nullable(_flowRuntime2.default.string()), _flowRuntime2.default.array(_flowRuntime2.default.string()))), _flowRuntime2.default.property('children', _flowRuntime2.default.function())));

const RouteComponent = (_arg, _arg2) => {
  let { name, controller, action, children } = PropsType.assert(_arg);
  let { context: { route } } = _arg2;

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
};

RouteComponent.propTypes = {
  controller: _react.PropTypes.string,
  action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
  children: _react.PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
  context: _react.PropTypes.object
};

exports.default = RouteComponent;
//# sourceMappingURL=index.js.map
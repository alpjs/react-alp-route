'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

// import areEqual from 'fbjs/lib/areEqual';

const RouteComponent = ({ name, controller, action, children }, { context: { route } }) => {
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
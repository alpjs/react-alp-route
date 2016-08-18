'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RouteComponent;

var _react = require('react');

// import areEqual from 'fbjs/lib/areEqual';

RouteComponent.propTypes = {
    controller: _react.PropTypes.string,
    action: _react.PropTypes.string,
    children: _react.PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
    context: _react.PropTypes.object
};

function RouteComponent(_ref, _ref2) {
    let controller = _ref.controller;
    let action = _ref.action;
    let children = _ref.children;
    let route = _ref2.context.route;

    // console.log(route);
    if (controller !== undefined && controller !== route.controller) return null;
    if (action !== undefined && action !== route.action) return null;
    return children(route);
}
//# sourceMappingURL=index.js.map
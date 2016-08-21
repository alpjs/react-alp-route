import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

RouteComponent.propTypes = {
  controller: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
  context: PropTypes.object
};

export default function RouteComponent(_ref, _ref2) {
  var name = _ref.name;
  var controller = _ref.controller;
  var action = _ref.action;
  var children = _ref.children;
  var route = _ref2.context.route;

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
//# sourceMappingURL=index.js.map
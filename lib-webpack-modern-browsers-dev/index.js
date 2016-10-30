import _t from 'tcomb-forked';
import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

var PropsType = _t.interface({
  name: _t.maybe(_t.String),
  controller: _t.maybe(_t.String),
  action: _t.union([_t.maybe(_t.String), _t.list(_t.String)]),
  children: _t.Function
}, 'PropsType');

var RouteComponent = (_ref, _ref2) => {
  var name = _ref.name,
      controller = _ref.controller,
      action = _ref.action,
      children = _ref.children;
  var route = _ref2.context.route;

  _assert({
    name,
    controller,
    action,
    children
  }, PropsType, '{ name, controller, action, children }');

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
  controller: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
  context: PropTypes.object
};

export default RouteComponent;

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _t.stringify(x) + ' supplied to ' + name + ' (expected a ' + _t.getTypeName(type) + ')';
  }

  if (_t.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _t.getTypeName(type)]);

      _t.fail(message());
    }
  } else if (!(x instanceof type)) {
    _t.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map
import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

import t from 'flow-runtime';
const PropsType = t.type('PropsType', t.object(t.property('name', t.nullable(t.string())), t.property('controller', t.nullable(t.string())), t.property('action', t.union(t.nullable(t.string()), t.array(t.string()))), t.property('children', t.function())));


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
  controller: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.func.isRequired
};

RouteComponent.contextTypes = {
  context: PropTypes.object
};

export default RouteComponent;
//# sourceMappingURL=index.js.map
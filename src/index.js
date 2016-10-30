import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

type PropsType = {
   name: ?string,
   controller: ?string,
   action: ?string|Array<string>,
   children: Function,
 };

const RouteComponent = (
  { name, controller, action, children }: PropsType,
  { context: { route } },
) => {
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
  children: PropTypes.func.isRequired,
};

RouteComponent.contextTypes = {
  context: PropTypes.object,
};

export default RouteComponent;

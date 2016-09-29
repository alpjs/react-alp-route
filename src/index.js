import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

RouteComponent.propTypes = {
  controller: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.func.isRequired,
};

RouteComponent.contextTypes = {
  context: PropTypes.object,
};

type Props = {
  name: ?string,
  controller: ?string,
  action: ?string|Array<string>,
  children: Function,
};

export default function RouteComponent(
  { name, controller, action, children }: Props,
  { context: { route } },
) {
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

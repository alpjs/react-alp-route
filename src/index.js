import { PropTypes } from 'react';
// import areEqual from 'fbjs/lib/areEqual';

RouteComponent.propTypes = {
    controller: PropTypes.string,
    action: PropTypes.string,
    children: PropTypes.func.isRequired,
};

RouteComponent.contextTypes = {
    context: PropTypes.object,
};

type Props = {
    controller: ?string,
    action: ?string,
    children: Function,
};

export default function RouteComponent(
    { controller, action, children }: Props,
    { context: { route } },
) {
    // console.log(route);
    if (controller !== undefined && controller !== route.controller) return null;
    if (action !== undefined && action !== route.action) return null;
    return children(route);
}

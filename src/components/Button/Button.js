import { Link } from 'react-router-dom';
import './Button.scss';
const Button = ({
    children,
    to,
    href,
    type,
    onClick,
    size = false,
    rounded = false,
    bgColor_login = false,
    colorWhite = false,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    var border_radius = rounded ? rounded : '';
    var block_size = size ? size : '';
    var bgLogin = bgColor_login ? bgColor_login : '';
    var color = colorWhite ? colorWhite : '';

    return (
        <Comp className={`button-global ${block_size} ${border_radius} ${bgLogin} ${color}`} {...props}>
            <span>{children}</span>
        </Comp>
    );
};
export default Button;

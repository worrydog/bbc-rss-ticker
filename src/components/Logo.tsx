import { ComponentStyle } from "../types";

export const Logo: React.FC<ComponentStyle> = ({className}) => {
    return (
        <div className={ className } />
    );
};

export default Logo;
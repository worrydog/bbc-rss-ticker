import { ComponentStyle, RSSEntry } from "../types";

export const Headline: React.FC<RSSEntry & ComponentStyle> = ({ title, link, className }) => {
    return (
        <div key={ title } className={ className }>
            <a href={ link } target="_blank" rel="noopener noreferrer">
            <p>{ title }</p>
            </a>
        </div>
    );
};
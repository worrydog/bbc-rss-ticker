import { RSSEntry } from "../types";
import "../styles.css";

export const Headline: React.FC<RSSEntry> = ({ title, link }) => {
    return (
        <div key={ title } className="headlineContainer">
            <a href={ link } target="_blank" rel="noopener noreferrer">
            <p>{ title }</p>
            </a>
        </div>
    );
};
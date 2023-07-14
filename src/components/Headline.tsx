import { Component, ReactNode } from "react";
import { RSSEntry } from "../types";
import "../styles.css";

export class Headline extends Component<RSSEntry> {
    render(): ReactNode {
        const { title } = this.props;
        return (
            <div className="headlineContainer"><p>{ title }</p></div>
        );
    }
}
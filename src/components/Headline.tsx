import { Component, ReactNode } from "react";
import { HeadlineProps } from "../types";

export class Headline extends Component<HeadlineProps> {
    render(): ReactNode {
        const { title } = this.props;
        return (
            <div>Headline: { title } </div>
        );
    }
}
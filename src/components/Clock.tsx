import { Component, ReactNode } from "react";
import "../styles.css";

export class Clock extends Component {
    render(): ReactNode {
        return (
            <div className="clockContainer">Clock</div>
        );
    }
}
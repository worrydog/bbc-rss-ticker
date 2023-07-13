import React from "react";
import { Headline, Clock } from "./components";
import { HeadlineProps } from "./types";
import { parseRSS } from "./utils/RSSUtils";

export default class App extends React.Component {

    private _titleIndex: number = 0;

    state: HeadlineProps = {
        title: 'Headline'
    };

    async componentDidMount() {
        const feed = await parseRSS('http://feeds.bbci.co.uk/news/rss.xml');
        this.updateRSSTitle(feed);
    }

    private updateRSSTitle(feed: any): void {
        console.log(this._titleIndex);
        this.setState({ title: feed.items[this._titleIndex].title });
        this._titleIndex = this._titleIndex < feed.items.length-1 ? this._titleIndex + 1 : 0;
        setTimeout(() => this.updateRSSTitle(feed), 1000);
    }
    

    render(): React.ReactNode {
        return (
            <div>
                <Headline title={ this.state.title }/>
                <Clock />
            </div>
        );
    }
}
import React from "react";
import { Headline, Clock, Logo } from "./components";
import { RSSEntry, RSSFeed } from "./types";
import { parseRSS } from "./utils/RSSUtils";
import "./styles.css";

export default class App extends React.Component {

    private _titleIndex: number = 0;

    state: RSSEntry = {
        title: 'Headlines',
        contentSnippet: '',
        link: ''
    };

    async componentDidMount(): Promise<void> {
        this.checkForRSSUpdate();
    }

    async checkForRSSUpdate(): Promise<void> {
        this._titleIndex = 0;
        const feed: RSSFeed = await parseRSS('http://feeds.bbci.co.uk/news/rss.xml');
        this.updateRSSTitle(feed);
    }

    private updateRSSTitle(feed: RSSFeed): void {
        console.log(this._titleIndex);
        this.setState(feed.items[this._titleIndex]);
        if(this._titleIndex < feed.items.length-1) {
            this._titleIndex += 1;
            setTimeout(() => this.updateRSSTitle(feed), 3000);
        } else {
            setTimeout(() => this.checkForRSSUpdate(), 3000);
        }
    }

    render(): React.ReactNode {
        return (
            <div className="tickerContainer">
                <div className="logoStrap">
                    <Logo />
                </div>
                <div className="flexRow">
                    <Headline title={ this.state.title }/>
                    <Clock />
                </div>
            </div>
        );
    }
}
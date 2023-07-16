import { useState, useEffect } from "react";
import { Headline, Clock, Logo } from "./components";
import { RSSEntry, RSSFeed } from "./types";
import { RSSUtils } from "./utils/RSSUtils";
import "./styles.css";
import { FEED_CHECK_INTERVAL, FEED_URL, HEADLINE_UPDATE_INTERVAL } from "./consts";

export const App: React.FC = () => {

    const inititalHeadline: RSSEntry = {
        title: 'Headlines',
        contentSnippet: '',
        link: ''
    }
    
    const [headline, setHeadline] = useState(inititalHeadline);

    useEffect(() => {
        let titleIndex = 0;
        let changeTimer: ReturnType<typeof setTimeout>;
        let feed: RSSFeed | undefined;

        const checkForRSSUpdate = async () => {
            titleIndex = 0;
            feed = await RSSUtils.parseRSS(FEED_URL);
            updateRSSTitle(feed);
        }

        const pollRSSFeed = setInterval(async () => {
            if(feed !== undefined) {
                const newFeed = await RSSUtils.parseRSS(FEED_URL);
                console.log('CHECKING FOR NEW FEED');
                if(!RSSUtils.compareArrays(feed.items, newFeed.items)) {
                    console.log('FOUND NEW FEED');
                    feed = newFeed;
                    clearTimeout(changeTimer);
                    titleIndex = 0;
                    updateRSSTitle(feed);
                }
            }
        }, FEED_CHECK_INTERVAL);

        const updateRSSTitle = (feed: RSSFeed) => {
            setHeadline(feed.items[titleIndex]);
            titleIndex = titleIndex < feed.items.length-1 ? titleIndex += 1 : titleIndex = 0;
            changeTimer = setTimeout(() => updateRSSTitle(feed), HEADLINE_UPDATE_INTERVAL);
        }

        checkForRSSUpdate();

        return () => {
            clearTimeout(changeTimer);
            clearInterval(pollRSSFeed);
        }
    }, []);

    return (
        <div className="tickerContainer">
            <div className="logoStrap">
                <Logo />
            </div>
            <div className="flexRow">
                <Headline link={ headline.link } title={ headline.title }/>
                <Clock />
            </div>
        </div>
    );
}

export default App;
import Parser from 'rss-parser';
import { RSSEntry, RSSFeed } from '../types';
import { CORS_PROXY } from '../consts';

export class RSSUtils {

    private static _parser = new Parser();

    static async parseRSS(url: string): Promise<RSSFeed> {
        const feedData = await this._parser.parseURL(CORS_PROXY + url);
        return feedData as RSSFeed;
    }

    static compareArrays(originalArray: Array<RSSEntry>, comparisionArray:Array<RSSEntry>): boolean {
        const arraysMatch = (originalArray.length === comparisionArray.length) 
            && originalArray.every((value, index) => value.title === comparisionArray[index].title)
        return arraysMatch;
    }
}
import Parser from 'rss-parser';
import { RSSFeed } from '../types';

const parser = new Parser();
const CORS_PROXY = "http://localhost:8080/";

export async function parseRSS(url: string): Promise<RSSFeed> {
    const feedData = await parser.parseURL(CORS_PROXY + url);
    return feedData as RSSFeed;
}
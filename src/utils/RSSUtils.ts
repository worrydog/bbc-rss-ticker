import Parser from 'rss-parser';

const parser = new Parser();
const CORS_PROXY = "http://localhost:8080/";

export async function parseRSS(url: string) {
    const feed = await parser.parseURL(CORS_PROXY + url);
    return feed;
}
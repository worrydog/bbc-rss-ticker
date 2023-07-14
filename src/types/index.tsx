export type RSSFeed = {
    items: Array<RSSEntry>;
}

export type RSSEntry = {
    title: string;
    contentSnippet?: string;
    link?: string;
}
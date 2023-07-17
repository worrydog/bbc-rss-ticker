import { RSSEntry } from "../types";
import { RSSUtils } from "./RSSUtils";

describe('Test array tools', () => {

    const testArray1:Array<RSSEntry> = [{ title: 'headline' }, { title: 'headline2' }];
    const testArray2:Array<RSSEntry> = [{ title: 'headline' }, { title: 'headline2' }];
    const mismatchedArray: Array<RSSEntry> = [{ title: 'headline3' }, { title: 'headline4' }];
    const longerArray: Array<RSSEntry> = [{ title: 'headline3' }, { title: 'headline4' }, { title: 'headline5' }];

    it('should return true if both arrays match', () => {
        const isMatch = RSSUtils.compareArrays(testArray1, testArray2);
        expect(isMatch).toBe(true);
    });

    it('should return false if both arrays do not match', () => {
        const isMatch = RSSUtils.compareArrays(testArray1, mismatchedArray);
        expect(isMatch).toBe(false);
    });

    it('should return false if both arrays length do not match', () => {
        const isMatch = RSSUtils.compareArrays(testArray1, longerArray);
        expect(isMatch).toBe(false);
    });
});
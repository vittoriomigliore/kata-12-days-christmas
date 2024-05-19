import TwelveDaysXmasSong from "../src/twelveDaysXmasSong";
const twelveDaysXmasSong = new TwelveDaysXmasSong();
describe('twelve days christmas song header test set', function (): void {
    it('first two lines verse 1', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(1);
        var expected : string = `On the first day of Christmas\nMy true love sent to me:`;
        expect(result).toBe(expected);
    })
    it('first two lines verse 2', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(2);
        var expected : string = `On the second day of Christmas\nMy true love sent to me:`;
        expect(result).toBe(expected);
    })
    it('first two lines verse 4', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(4);
        var expected : string = `On the fourth day of Christmas\nMy true love sent to me:`;
        expect(result).toBe(expected);
    })
    it('first two lines verse 0', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(0);
        var expected : string = '';
        expect(result).toBe(expected);
    })
    it('first two lines verse 13', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(13);
        var expected : string = '';
        expect(result).toBe(expected);
    })
})

describe('twelve days christmas song body test set', function():void {
    it('body verse 1',():void => {
        var result: string = twelveDaysXmasSong.verseBody(1);
        var expected : string = 'A partridge in a pear tree.';
        expect(result).toBe(expected);
    })
    it('body verse 2',():void => {
        var result: string = twelveDaysXmasSong.verseBody(2);
        var expected : string = 'Two turtle doves and\nA partridge in a pear tree.';
        expect(result).toBe(expected);
    })
    it('body verse 10',():void => {
        var result: string = twelveDaysXmasSong.verseBody(10);
        var expected : string = 'Ten lords a-leaping\nNine ladies dancing\nEight maids a-milking\nSeven swans a-swimming\nSix geese a-laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves and\nA partridge in a pear tree.';
        expect(result).toBe(expected);
    })
    it('body verse 0',():void => {
        var result: string = twelveDaysXmasSong.verseBody(0);
        var expected : string = '';
        expect(result).toBe(expected);
    })
    it('body verse 13',():void => {
        var result: string = twelveDaysXmasSong.verseBody(13);
        var expected : string = '';
        expect(result).toBe(expected);
    })
})
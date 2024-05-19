import TwelveDaysXmasSong from "../src/twelveDaysXmasSong";
const twelveDaysXmasSong = new TwelveDaysXmasSong();
describe('twelve days christmas song test set', function (): void {
    it('first two lines verse 1', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(1);
        var expected : string = `On the first day of Christmas
        My true love sent to me:`;
        expect(result).toBe(expected);
    })
    it('first two lines verse 2', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(2);
        var expected : string = `On the second day of Christmas
        My true love sent to me:`;
        expect(result).toBe(expected);
    })
    it('first two lines verse 4', ():void => {
        var result: string = twelveDaysXmasSong.verseHeader(4);
        var expected : string = `On the fourth day of Christmas
        My true love sent to me:`;
        expect(result).toBe(expected);
    })
})
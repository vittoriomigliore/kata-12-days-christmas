export default class TwelveDaysXmasSong {
  private readonly cardinals: {
    [key: number]: string;
  } = {
    1: "first",
    2: "second",
  };
  verseHeader(verse: number): string {
    return (
      `On the ` +
      this.cardinals[verse] +
      ` day of Christmas
        My true love sent to me:`
    );
  }
}

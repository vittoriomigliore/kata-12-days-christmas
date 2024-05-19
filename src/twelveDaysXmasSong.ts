export default class TwelveDaysXmasSong {
  private readonly cardinals: {
    [key: number]: string;
  } = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eight",
    9: "ninth",
    10: "tenth",
    11: "eleventh",
    12: "twelfth"
  };
  verseHeader(verse: number): string {
    return (
      `On the ` +
      this.cardinals[verse] +
      ` day of Christmas
        My true love sent to me:`
    );
  }
  verseBody(verse: number): string {
    return `A partridge in a pear tree.`;
  }
}

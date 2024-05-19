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
    12: "twelfth",
  };
  private readonly presents: {
    [key: number]: string;
  } = {
    1: "A partridge in a pear tree.",
    2: "Two turtle doves and",
    3: "Three french hens",
    4: "Four calling birds",
    5: "Five golden rings",
    6: "Six geese a-laying",
    7: "Seven swans a-swimming",
    8: "Eight maids a-milking",
    9: "Nine ladies dancing",
    10: "Ten lords a-leaping",
    11: "Eleven pipers piping",
    12: "Twelve drummers drumming",
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
    var result = "";
    for (var i = verse; i > 0; i--) {
      if (i == 1) {
        result += this.presents[i];
      } else {
        result += this.presents[i] + "\n";
      }
    }
    return result;
  }
}

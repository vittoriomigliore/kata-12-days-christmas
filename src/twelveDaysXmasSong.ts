export default class TwelveDaysXmasSong {
  private readonly days: {
    [key: number]: SongDay;
  } = {
    1: { cardinal: "first", body: "A partridge in a pear tree." },
    2: { cardinal: "second", body: "Two turtle doves and" },
    3: { cardinal: "third", body: "Three french hens" },
    4: { cardinal: "fourth", body: "Four calling birds" },
    5: { cardinal: "fifth", body: "Five golden rings" },
    6: { cardinal: "sixth", body: "Six geese a-laying" },
    7: { cardinal: "seventh", body: "Seven swans a-swimming" },
    8: { cardinal: "eight", body: "Eight maids a-milking" },
    9: { cardinal: "ninth", body: "Nine ladies dancing" },
    10: { cardinal: "tenth", body: "Ten lords a-leaping" },
    11: { cardinal: "eleventh", body: "Eleven pipers piping" },
    12: { cardinal: "twelfth", body: "Twelve drummers drumming" },
  };
  verseHeader(verse: number): string {
    if (verse < 1 || verse > 12) {
      return "";
    }
    return (
      'On the ' +
      this.days[verse].cardinal +
      ' day of Christmas\nMy true love sent to me:'
    );
  }
  verseBody(verse: number): string {
    var result = "";
    for (var i = verse; i > 0; i--) {
      if (i == 1) {
        result += this.days[i].body;
      } else {
        result += this.days[i].body + "\n";
      }
    }
    return result;
  }
}

type SongDay = {
  cardinal: string;
  body: string;
};

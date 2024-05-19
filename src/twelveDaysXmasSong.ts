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
    var result = "";
    for(var i = verse; i>0; i--){
        if(i == 12){
            result += 'Twelve drummers drumming'+'\n'
        }
        if(i == 11){
            result += 'Eleven pipers piping'+'\n'
        }
        if(i == 10){
            result += 'Ten lords a-leaping'+'\n'
        }
        if(i == 9){
            result += 'Nine ladies dancing'+'\n'
        }
        if(i == 8){
            result += 'Eight maids a-milking'+'\n'
        }
        if(i == 7){
            result += 'Seven swans a-swimming'+'\n'
        }
        if(i == 6){
            result += 'Six geese a-laying'+'\n'
        }
        if(i == 5){
            result += 'Five golden rings'+'\n'
        }
        if(i == 4){
            result += 'Four calling birds'+'\n'
        }
        if(i == 3){
            result += 'Three french hens'+'\n'
        }
        if(i == 2){
            result += 'Two turtle doves and'+'\n'
        }
        if(i == 1){
            result += 'A partridge in a pear tree.'
        }
    }
    return result
  }
}

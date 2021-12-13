
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


    for (var prop in names) {
        var firstLetter = names[prop].charAt(0).toLowerCase();
        if (firstLetter == 'j') {
            byeSpeaker(names[prop]);
        } else {
            helloSpeaker(names[prop]);
        }
    }

})();

(function(window) {
    var speakWord = "Good Bye";

    var byeSpeaker = function speak(name) {
    console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker;

})(window);
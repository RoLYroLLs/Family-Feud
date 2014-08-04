;

$(document).ready(function () {
    var $answers = $('#answers'),
        $strike = $('#strike'),
        $strikeSingle = $('#strike-single'),
        $score1 = $('#score-team1'),
        $score2 = $('#score-team2'),
        $next = $('.next'),
        $start = $('.start');

    var step = 0;


    var steps = [
         /* start game */
        function () { $start.trigger('click'); },
        /********************************************************
        * Start Question 1
        *********************************************************/
        /* strike single */
        function () { $strikeSingle.trigger('click'); },
        /* answer 2 */
        function () { $($answers.find('section.container.active')[1]).trigger('click'); },
        /* strike 1 */
        function () { $strike.trigger('click'); },
        /* strike 2 */
        function () { $strike.trigger('click'); },
        /* strike 3 */
        function () { $strike.trigger('click'); },
        /* answer 1 */
        function () { $($answers.find('section.container.active')[0]).trigger('click'); },
        /* team 1 scores */
        function () { $score2.trigger('click'); },
        /* next question */
        function () { $next.trigger('click'); },
        /********************************************************
        * Start Question 2
        *********************************************************/
        /* strike single */
        function () { $strikeSingle.trigger('click'); },
        /* answer 3 */
        function () { $($answers.find('section.container.active')[2]).trigger('click'); },
        /* answer 4 */
        function () { $($answers.find('section.container.active')[3]).trigger('click'); },
        /* answer 2 */
        function () { $($answers.find('section.container.active')[1]).trigger('click'); },
        /* answer 1 */
        function () { $($answers.find('section.container.active')[0]).trigger('click'); },
        /* team 1 scores */
        function () { $score2.trigger('click'); },
        /* next question */
        function () { $next.trigger('click'); },
        /********************************************************
        * Start Question 3
        *********************************************************/
        /* strike single */
        function () { $strikeSingle.trigger('click'); },
        /* answer 1 */
        function () { $($answers.find('section.container.active')[0]).trigger('click'); },
        /* strike 1 */
        function () { $strike.trigger('click'); },
        /* strike 2 */
        function () { $strike.trigger('click'); },
        /* strike 3 */
        function () { $strike.trigger('click'); },
        /* answer 2 */
        function () { $($answers.find('section.container.active')[1]).trigger('click'); },
        /* team 1 scores */
        function () { $score2.trigger('click'); },
        /* next question */
        function () { $next.trigger('click'); },
        /********************************************************
        * Start Question 4
        *********************************************************/
        /* answer 1 */
        function () { $($answers.find('section.container.active')[0]).trigger('click'); },
        /* strike 1 */
        function () { $strike.trigger('click'); },
        /* strike 2 */
        function () { $strike.trigger('click'); },
        /* strike 3 */
        function () { $strike.trigger('click'); },
        /* answer 2 */
        function () { $($answers.find('section.container.active')[1]).trigger('click'); },
        /* team 1 scores */
        function () { $score2.trigger('click'); },
        /* next question */
        function () { $next.trigger('click'); },
        /********************************************************
        * Start Question 5
        *********************************************************/
        /* strike single */
        function () { $strikeSingle.trigger('click'); },
        /* answer 1 */
        function () { $($answers.find('section.container.active')[0]).trigger('click'); },
        /* strike 1 */
        function () { $strike.trigger('click'); },
        /* strike 2 */
        function () { $strike.trigger('click'); },
        /* strike 3 */
        function () { $strike.trigger('click'); },
        /* answer 2 */
        function () { $($answers.find('section.container.active')[1]).trigger('click'); },
        /* team 1 scores */
        function () { $score2.trigger('click'); },
            /* next question */
        function () { $next.trigger('click'); }
    ];

    var nextStep = function () {

        if (step >= steps.length) {
            step = 0;
        }
        steps[step++](Function.prototype.call, Function.prototype.call);
    };
    /* keyHandler */
    var keyHandler = function (e) {
        var keyCode = e.which;
        var keyChar = String.fromCharCode(keyCode);

        console.log(event.type, keyChar, '(' + keyCode + ')');

        switch (keyCode) {
            case 13: /* enter key */
            case 39: /* right-arrow key (forward) */
                nextStep();
                break;
            case 37: /* left-arrow key (back) */
                break;
            default:
                break;
        }
    };
    /* listeners */
    var startListensers = function (e) {
        $('body').on('keyup', keyHandler);
    };
    /* initialize */
    var init = function () {
        startListensers();
    };

    /* initialize game */
    init();

});

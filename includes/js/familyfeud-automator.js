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

    /* listeners */
    var doStep = function (step) {
        switch (step) {
            case 1: /* start game */
                $start.trigger('click');
                break;
                /********************************************************
                * Start Question 1
                *********************************************************/
            case 2: /* strike single */
                $strikeSingle.trigger('click');
                break;
            case 3: /* answer 2 */
                $($answers.find('section.container.active')[1]).trigger('click');
                break;
            case 4: /* strike 1 */
                $strike.trigger('click');
                break;
            case 5: /* strike 2 */
                $strike.trigger('click');
                break;
            case 6: /* strike 3 */
                $strike.trigger('click');
                break;
            case 7: /* answer 1 */
                $($answers.find('section.container.active')[0]).trigger('click');
                break;
            case 8: /* team 1 scores */
                $score1.trigger('click');
                break;
            case 9: /* next question */
                $next.trigger('click');
                break;
                /********************************************************
                * Start Question 2
                *********************************************************/
            case 10: /* strike single */
                $strikeSingle.trigger('click');
                break;
            case 11: /* answer 3 */
                $($answers.find('section.container.active')[2]).trigger('click');
                break;
            case 12: /* answer 4 */
                $($answers.find('section.container.active')[3]).trigger('click');
                break;
            case 13: /* answer 2 */
                $($answers.find('section.container.active')[1]).trigger('click');
                break;
            case 14: /* answer 1 */
                $($answers.find('section.container.active')[0]).trigger('click');
                break;
            case 15: /* team 1 scores */
                $score1.trigger('click');
                break;
            case 16: /* next question */
                $next.trigger('click');
                break;
                /********************************************************
                * Start Question 3
                *********************************************************/
            case 17: /* strike single */
                $strikeSingle.trigger('click');
                break;
            case 18: /* answer 1 */
                $($answers.find('section.container.active')[0]).trigger('click');
                break;
            case 19: /* strike 1 */
                $strike.trigger('click');
                break;
            case 20: /* strike 2 */
                $strike.trigger('click');
                break;
            case 21: /* strike 3 */
                $strike.trigger('click');
                break;
            case 22: /* answer 2 */
                $($answers.find('section.container.active')[1]).trigger('click');
                break;
            case 23: /* team 1 scores */
                $score1.trigger('click');
                break;
            case 24: /* next question */
                $next.trigger('click');
                break;
                /********************************************************
                * Start Question 4
                *********************************************************/
            case 25: /* answer 1 */
                $($answers.find('section.container.active')[0]).trigger('click');
                break;
            case 26: /* strike 1 */
                $strike.trigger('click');
                break;
            case 27: /* strike 2 */
                $strike.trigger('click');
                break;
            case 28: /* strike 3 */
                $strike.trigger('click');
                break;
            case 29: /* answer 2 */
                $($answers.find('section.container.active')[1]).trigger('click');
                break;
            case 30: /* team 1 scores */
                $score1.trigger('click');
                break;
            case 31: /* next question */
                $next.trigger('click');
                break;
                /********************************************************
                * Start Question 5
                *********************************************************/
            case 32: /* strike single */
                $strikeSingle.trigger('click');
                break;
            case 33: /* answer 1 */
                $($answers.find('section.container.active')[0]).trigger('click');
                break;
            case 34: /* strike 1 */
                $strike.trigger('click');
                break;
            case 35: /* strike 2 */
                $strike.trigger('click');
                break;
            case 36: /* strike 3 */
                $strike.trigger('click');
                break;
            case 37: /* answer 2 */
                $($answers.find('section.container.active')[1]).trigger('click');
                break;
            case 38: /* team 1 scores */
                $score1.trigger('click');
                break;
            case 39: /* next question */
                $next.trigger('click');
                break;
            default:
                break;
        }
    };
    /* keyHandler */
    var keyHandler = function (e) {
        var keyCode = e.which;
        var keyChar = String.fromCharCode(keyCode);

        console.log(event.type, keyChar, '(' + keyCode + ')');

        switch (keyCode) {
            case 13: /* enter key */
            case 39: /* right-arrow key (forward) */
                doStep(++step);
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

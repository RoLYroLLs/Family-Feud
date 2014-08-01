;

$(document).ready(function () {
    var $answers = $('#answers'),
        $answerContainers = $answers.find('section.container'),
        $strike = $('#strike'),
        $strikeSingle = $('#strike-single'),
        $score = $('#score'),
        $score1 = $('#score-team1'),
        $score2 = $('#score-team2'),
        $strikeCounter = $('#strike-count'),
        strikeFigure = '<span class="wrongx">X</span>',
        $wrongSingle = $('.wrong-single'),
        $wrong = $('.wrong-multiple'),
        $next = $('.next'),
        $start = $('.start'),
        $winner = $('#winner');

    var templateInactive = $('#template-inactive').html(),
        templateActive = $('#template-active').html(),
        templateGameEnd = $('#template-winner').html();

    var sum = 0,
        strikeCount = 0,
        gameStart = false,
        gameEnd = false,
        question = 0,
        questions = [];

    var Sounds = {
        Theme: { value: 1, name: 'Theme', audio: '#sounds #theme' },
        Bell: { value: 2, name: 'Bell', audio: '#sounds #bell' },
        Buzzer: { value: 3, name: 'Buzzer', audio: '#sounds #buzzer' }
    };
    var Teams = {
        Team1: { value: 1, name: 'Team 1', score: 0 },
        Team2: { value: 2, name: 'Team 2', score: 0 }
    };

    /* play sounds */
    var playSound = function (o) {
        if (typeof o !== 'undefined' && typeof o.audio !== 'undefined') {
            $(o.audio)[0].play();
        }
    };
    /* lower theme volume */
    var lowerTheme = function (o) {
        var volumeFadeOut = setInterval(function () {
            if ($(Sounds.Theme.audio)[0].volume > 0.05) {
                $(Sounds.Theme.audio)[0].volume = $(Sounds.Theme.audio)[0].volume - 0.05;
            } else {
                clearInterval(volumeFadeOut);
            }
        }, 200);
    };
    /* raise theme volume */
    var raiseTheme = function (o) {
        var volumeFadeIn = setInterval(function () {
            if ($(Sounds.Theme.audio)[0].volume < 1.00) {
                $(Sounds.Theme.audio)[0].volume = $(Sounds.Theme.audio)[0].volume + 0.05;
            } else {
                clearInterval(volumeFadeIn);
            }
        }, 200);
    };
    /* clear the board */
    var clearBoard = function () {
        /* clear the board */
        $answerContainers.each(function (index, value) {
            $this = $(value);
            $this.removeClass('active');
            $this.html(templateInactive);
        });
        sum = 0;
        sumScores(sum);
    }
    /* load answers */
    var loadAnswers = function (callbackDone, callbackFail, callbackAlways) {
        /* get list of questions */
        $.ajax({
            type: "GET"
            , url: '/includes/data/familyfeud.json'
        })
        .done(function (data, textStatus, jqXHR) {
            /* call was successful */

            /* check if data is null */
            if (typeof data !== 'undefined') {
                questions = data;
                console.log("Data: Yes!");
            } else {
                console.log("Data: No!");
            }

            if (callbackDone && typeof (callbackDone) === "function") {
                callbackDone();
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            /* error occurred */

            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);

            /* check if error is parseerror */
            if (status == 'parsererror') {
            }
            if (callbackFail && typeof (callbackFail) === "function") {
                callbackFail();
            }
        })
        .always(function () {
            /* always do this */

            console.log('Done!');

            if (callbackAlways && typeof (callbackAlways) === "function") {
                callbackAlways();
            }

        })
        ;
    };
    /* resetTeamScores */
    var resetTeamScores = function (o) {
        Teams.Team1.score = 0;
        Teams.Team2.score = 0;
        sumTeamScores({ team: Teams.Team1, score: Teams.Team1.score });
        sumTeamScores({ team: Teams.Team2, score: Teams.Team2.score });
    };
    /* reset strike */
    var resetStrikes = function (o) {
        strikeCount = 0;
        $strikeCounter.text(strikeCount);
        $wrong.html('');
    };
    /* strike sequence */
    var strikeSingle = function (o) {
        if (gameStart && !gameEnd) {
            $wrongSingle.html(strikeFigure);
            playSound(Sounds.Buzzer);
            $wrongSingle.fadeIn('fast');
            setTimeout(function () { $wrongSingle.fadeOut('fast'); }, 1500);
        }
    };
    /* strike sequence */
    var strike = function (o) {
        if (gameStart && !gameEnd) {
            if (strikeCount < 3) {
                strikeCount++;
                $strikeCounter.text(strikeCount);
                $wrong.append(strikeFigure);
                playSound(Sounds.Buzzer);
                $wrong.fadeIn('fast');
                setTimeout(function () { $wrong.fadeOut('fast'); }, 1500);
            }
        }
    };
    /* show answer */
    var showAnswer = function (o) {
        var answer = o.find('.answer');
        if (!answer.hasClass('flipped')) {
            answer.addClass('flipped');
            playSound(Sounds.Bell);
            if (strikeCount < 3) {
                sumScores(answer.data("score"));
            }
        }
    };
    /* loadNewAnswers */
    var loadNewAnswers = function (o) {
        console.log('next question');

        /* clear the board */
        clearBoard();

        /* load answers */
        for (var i = 0; i < o.answers.length; i++) {
            $currentAnswer = $($answerContainers[i]);

            $currentAnswer.addClass('active');
            $currentAnswer.html(templateActive.replace(/@ANSWERID/g, o.answers[i].answerid).replace(/@ANSWER/g, o.answers[i].answer).replace(/@SCORE/g, o.answers[i].points));
        }
    };
    /* loadNextQuestion */
    var loadNextQuestion = function () {

        if (question < questions.length) {
            resetStrikes();
            loadNewAnswers(questions[question++]);
        } else {
            endGame();
        }
    };
    /* start game */
    var startGame = function () {
        console.log('startGame');
        
        gameStart = true;
        gameEnd = false;

        resetTeamScores();
        $winner.hide();

        question = 0;
        loadNextQuestion();
        $start.hide();
        $next.show();

        lowerTheme();
    };
    /* end game */
    var endGame = function () {
        console.log('endGame');

        gameEnd = true;
        clearBoard();

        var winner = Teams.Team2.score > Teams.Team1.score ? Teams.Team2 : Teams.Team1;


        $winner.html(templateGameEnd.replace(/@TEAMNAME/g, winner.name).replace(/@SCORE/g, winner.score)).show();

        $start.show();
        $next.hide();

        raiseTheme();
    };
    /* sum scores */
    var sumScores = function (score) {
        sum += score
        $score.text(sum);
    };
    /* sum scores */
    var sumTeamScores = function (o) {
        if (typeof o !== 'undefined' && typeof o.score !== 'undefined' && typeof o.team !== 'undefined') {
            o.team.score += o.score;
        }

        $score1.text(Teams.Team1.score);
        $score2.text(Teams.Team2.score);
    };
    /* start listeners */
    var startListeners = function () {
        /* listener for answers */
        $answers.on('click', '.active', function () {
            showAnswer($(this));
        });

        /* listener for strike */
        $strike.on('click', function () {
            console.log('strike');
            strike();
        });

        /* listener for single strike */
        $strikeSingle.on('click', function () {
            console.log('single strike');
            strikeSingle();
        });

        /* nextQuestion button */
        $next.on('click', function () {
            loadNextQuestion();
        });

        /* start button */
        $start.on('click', function () {
            startGame();
        });

        $score1.on('click', function () {
            sumTeamScores({ team: Teams.Team1, score: sum });
        });

        $score2.on('click', function () {
            sumTeamScores({ team: Teams.Team2, score: sum });
        });
    };
    /* initialize */
    var init = function () {
        clearBoard();
        resetTeamScores();
        loadAnswers(function () {
            /* done */
            if (typeof questions !== 'undefined' && questions.length > 0) {
                console.log(questions);

                startListeners();
            } else {
                playSound(Sounds.Buzzer);
            }
        }, function () {
            /* fail */
            playSound(Sounds.Buzzer);
        }, function () {
            /* always */
        });
    };

    /* initialize game */
    init();

});

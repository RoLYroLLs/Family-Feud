﻿<html><head>
  <title>Family Feud</title>
  <link rel="stylesheet" href="./familyfeud.css" type="text/css">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
  <script src="./familyfeud.js" type="text/javascript"></script>
</head>

<body cz-shortcut-listen="true">
  <div id="background">
    <div id="wrong"></div>
    
    <div id="rotating-answers">
    <div class="wrapper">
      <div class="cell">
        <section class="container active" id="answer1" data-score="43">
          <div class="answer">
            <figure class="front"><span>1</span></figure>
            <figure class="back">Answer one <span class="score">43</span></figure>
          </div>
        </section>

        <section class="container active" id="answer2" data-score="31">
          <div class="answer">
            <figure class="front"><span>2</span></figure>
            <figure class="back">Answer two <span class="score">31</span></figure>
          </div>
        </section>

        <section class="container active" id="answer3" data-score="23">
           <div class="answer">
            <figure class="front"><span>3</span></figure>
            <figure class="back">Answer three <span class="score">23</span></figure>
          </div>
        </section>

        <section class="container active" id="answer4" data-score="3">
           <div class="answer">
            <figure class="front"><span>4</span></figure>
            <figure class="back">Answer four <span class="score">3</span></figure>
          </div>
        </section>
      
        <section class="container">
          <div class="inactive"></div>
        </section> 
      </div>
      
      <div class="cell">
        <section class="container">
          <div class="inactive"></div>
        </section>
        <section class="container">
          <div class="inactive"></div>
        </section>
        <section class="container">
          <div class="inactive"></div>
        </section>
        <section class="container">
          <div class="inactive"></div>
        </section>
        <section class="container">
          <div class="inactive"></div>
        </section>                
      </div>
      </div>
      <div id="score"></div>
    </div>
  </div>

  <div class="footer">
    <button id="strike" type="button">Strike!</button>
    Count: <span id="strike-count">0</span>
    <span class="next"><a href="./opg-ff2.html">Next Question</a></span>
  </div>

  <iframe id="sound" style="display: none"></iframe>


</body></html>
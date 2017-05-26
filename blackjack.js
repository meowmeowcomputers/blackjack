$(document).ready(function () {

  function card (card) {
    this.face = card[0][0];
    this.suit = card[0][1];
    this.imgUrl = function() {
        return `<img src='images/${this.face}_of_${this.suit}.png' width =75px height=100 px>`
    }

    }
  class ScoreCard {
    constructor(card) {
      this.score = score;
    }
    scoring(card)
  }


  class Hand {
    constructor(cards) {
      this.cards = [];
    }
    addCard(card) {
      if (this.cards.length < 5) {
        this.cards.push(card);
      }
      else {
        //function to stop cards from being drawn
      }
    }
    score(card) {

    }
  }

  class Deck {
    constructor() {
      let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
      let faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

      this.deck = []
      this.buildDeck = function () {
        for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < faces.length; j++){
            this.deck.push([faces[j], suits[i]]);

          }
        }
      };
      this.buildDeck();
    }
    draw() {
      let i = this.deck.length;
      let x = Math.floor(Math.random() * (i - 0)) + 0;
      return this.deck.splice(x,1);
    }
  }



  function game () {
    var newDeck = new Deck();
    var playerHand = new Hand();
    var dealerHand = new Hand();
    dealerHand.addCard(new card(newDeck.draw()));
    $("#dealer-hand").append(dealerHand.cards[dealerHand.cards.length-1].imgUrl());

    $("#deal-button").click(function () {
      if (playerHand.cards.length <=5) {
        playerHand.addCard(new card(newDeck.draw()));
        $("#player-hand").append(playerHand.cards[playerHand.cards.length-1].imgUrl());
      }
      else {}
    });
    $("#stand-button").click(function () {
      while (dealerHand.cards.length < 5) {
        dealerHand.addCard(new card(newDeck.draw()));
        $("#dealer-hand").append(dealerHand.cards[dealerHand.cards.length-1].imgUrl());
      }
    });

  }



 game();

});

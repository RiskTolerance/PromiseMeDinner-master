const steak = [
  "season steak generously with salt, pepper and garlic powder",
  "place in ziplock bag",
  "cook in sous vide at 120 F for 1-2 hours",
  "remove from bag and pat dry",
  "heat pan with grapeseed oil and a quarter stick of butter",
  "cook steak for 30-60 seconds per side using a spoon to baste with butter",
  "rest for 10 mintutes",
  "enjoy"
];

const brusselSprouts = [
  "wash burussel sprouts",
  "cut off base and chop in half",
  "toss in bowl with olive oil, balsamic vinger and salt",
  "preheat oven to 500 F",
  "coat baking sheet with olive oil",
  "place in flat side down",
  "cook for 20 minutes",
  "place back in bowl and add salt and pepper",
  "enjoy"
];

const mashPotatoes = [
  "boil water",
  "tear open bag of of instant potato mix and pour into bowl",
  "pour in water",
  "mix",
  "enjoy"
];

const id = "#steak";
const id2 = "#brusselSprouts";
const id3 = "#mashPotatoes";

function printSteakWithCallbacks() {
  addFood(steak[0], id, function() {
    addFood(steak[1], id, function() {
      addFood(steak[2], id, function() {
        addFood(steak[3], id, function() {
          addFood(steak[4], id, function() {
            addFood(steak[5], id, function() {
              addFood(steak[6], id, function() {
                addFood(steak[7], id, function() {
                  console.log(id + " is done");
                });
              });
            });
          });
        });
      });
    });
  });
}

printSteakWithCallbacks(); //yay!

function printBrusselSproutsWithPromises() {
  addFood(brusselSprouts[0], id2)
    .then(() => addFood(brusselSprouts[1], id2))
    .then(() => addFood(brusselSprouts[2], id2))
    .then(() => addFood(brusselSprouts[3], id2))
    .then(() => addFood(brusselSprouts[4], id2))
    .then(() => addFood(brusselSprouts[5], id2))
    .then(() => addFood(brusselSprouts[6], id2))
    .then(() => addFood(brusselSprouts[7], id2))
    .then(() => addFood(brusselSprouts[8], id2))
    .then(() => console.log(id2 + " is done!"))
    .catch(() => console.log("oh noo"));
}

printBrusselSproutsWithPromises();

async function printmashPotatoesWithAsync() {
  await addFood(mashPotatoes[0], id3);
  await addFood(mashPotatoes[1], id3);
  await addFood(mashPotatoes[2], id3);
  await addFood(mashPotatoes[3], id3, console.log(id3 + " is done!"));
}

printmashPotatoesWithAsync();

// Promise.all([
//   printBrusselSproutsWithPromises,
//   printSteakWithCallbacks,
//   printBrusselSproutsWithPromises
// ]).then(() => {
//   console.log("done!");
// });

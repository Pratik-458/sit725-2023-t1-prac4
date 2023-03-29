const cardList = [
  {
    title: "Charmender",
    image: "images/charmander.png",
    link: "About charmander",
    description:
      "Charmander is a small, bipedal, fire-type Pokémon that stands about 2 feet tall and weighs around 18 pounds. It has bright orange skin, a cream-colored belly, and a short, pointed tail with a flame burning at the end. Charmander is known for its fiery personality and its ability to breathe flames of up to 2,100 degrees Fahrenheit.",
  },
  {
    title: "Snorlax",
    image: "images/snorlax.jpeg",
    link: "About Snorlax",
    description:
      "Snorlax is a large, bipedal, normal-type Pokémon that is known for its enormous size and love for sleeping and eating. It stands about 6 feet 11 inches tall and weighs around 1,014 pounds, making it one of the heaviest Pokémon.",
  },
];

const clickMe = () => {
  console.log("clickMe clicked");
};

const addCards = (items) => {
  console.log(items);
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">About this Pokemon</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span><p class="card-text">' +
      item.description +
      "</p></div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.email = $("#email").val();
  formData.password = $("#password").val();

  console.log("form data: ", formData);
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  addCards(cardList);
  $("#formSubmit").click(() => {
    submitForm();
  });
});

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
      '</p></div> <div class="col s12 center-align"><a class="waves-effect waves-light btn click-me-button modal-trigger" id="clickMeButton" data-target="modal2"><i class="material-icons left">auto_fix_high</i>Update me</a></div> </div></div>';
    $("#card-section").append(itemToAppend);
  });
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.link = $("#link").val();
  formData.description = $("#description").val();

  console.log("form data: ", formData);
  addPokemon(formData);
};

const submitUpdateForm = () => {
  let formData = {};
  formData.title = $("#updateTitle").val();
  formData.image = $("#updateImage").val();
  formData.link = $("#updateLink").val();
  formData.description = $("#updateDescription").val();

  console.log("form data: ", formData);
  updatePokemon(formData);
};

const getPokemon = () => {
  $.get("/api/pokemon", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

const getPokemonById = () => {
  $.get("/api/pokemon", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

const addPokemon = (pokemon) => {
  $.ajax({
    url: "/api/pokemon",
    type: "POST",
    data: pokemon,
    success: (result) => {
      alert(result.message);
    },
  });
};

const updatePokemon = (pokemon) => {
  $.ajax({
    url: "/api/pokemon/" + pokemon.title,
    type: "PUT",
    data: pokemon,
    success: (result) => {
      alert(result.message);
    },
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  getPokemon();
  $("#formSubmit").click(() => {
    submitForm();
  });
  $("#updateFormSubmit").click(() => {
    submitUpdateForm();
  });
});

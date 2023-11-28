$(document).ready(function () {
  const $carousel = $(".carousel");
  const $slides = $(".slide");
  const $arrows = $(".carousel-arrow");
  const $dots = $(".dot");

  let currentSlide = 0;

  function showSlide(index) {
    $slides.each(function (i, slide) {
      $(slide).css("display", i === index ? "block" : "none");
    });
    updateDots(index);
  }

  function updateDots(index) {
    $dots.each(function (i, dot) {
      $(dot).toggleClass("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % $slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + $slides.length) % $slides.length;
    showSlide(currentSlide);
  }

  $arrows.each(function (index, arrow) {
    $(arrow).on("click", function () {
      if ($(arrow).hasClass("left")) {
        prevSlide();
      } else if ($(arrow).hasClass("right")) {
        nextSlide();
      }
    });
  });

  $dots.each(function (index, dot) {
    $(dot).on("click", function () {
      showSlide(index);
      currentSlide = index;
    });
  });

  showSlide(currentSlide);

  setInterval(nextSlide, 5000);

})

let carrito = [];

function addToCart(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoLista = $('.carrito-lista');
    carritoLista.empty();
    let total = 0;

    $.each(carrito, function(index, item) {
        const listItem = $('<li>').text(`${item.nombre} - $${item.precio}`);
        carritoLista.append(listItem);
        total += item.precio;
    });

    const totalElement = $('.total');
    totalElement.text(`$${total.toFixed(2)}`);

    const botonPagar = $('.carrito-container button');
    botonPagar.prop('disabled', carrito.length === 0);
}

function realizarPago() {
    if (carrito.length === 0) {
        alert('Agrega al menos un juego al carrito para realizar la compra.');
        return;
    }

    setTimeout(() => {
        const mensajeCompra = $('#mensaje-compra');
        mensajeCompra.text('Compra exitosa. ¡Disfruta tus juegos!');
        limpiarCarrito();
    }, 1000);
}

function limpiarCarrito() {
    carrito = [];
    mostrarCarrito();
}

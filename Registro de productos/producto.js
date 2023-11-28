$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('show');
  });
$("#formulario").submit(function () {
    var busqueda = $("#busqueda").val();

    if (busqueda === "") {
      alert("Por favor, ingrese un producto a buscar");
      return false;
    }
  });
 $(".btn-primary").click(function () {
    var nombre = $(this).parent().find(".card-title").text();
    var precio = $(this).parent().find(".text-muted").text();

    precio = precio.replace("$", "");
    agregarProducto(nombre, precio);
  });
 $("#carrito").on("click", "li", function () {
    var nombre = $(this).text().split("$")[0];
    quitarProducto(nombre);
  });

function actualizarTotal() {
    var total = 0;

    $("#carrito li").each(function () {
      var precio = $(this).find("span").text().replace("$", "");
      total += parseFloat(precio);
    });

    total = total.toFixed(2);
    $("#total").text("$" + total);
  }

  function agregarProducto(nombre, precio) {
    var li = $("<li></li>").addClass(
      "list-group-item d-flex justify-content-between align-items-center"
    );
    li.text(nombre);
    var span = $("<span></span>").addClass("badge bg-primary rounded-pill");
    span.text("$" + precio);
    li.append(span);
    $("#carrito").append(li);
    actualizarTotal();
  }
 function quitarProducto(nombre) {
    var li = $("#carrito li:contains('" + nombre + "')");

    if (li.length > 0) {
      li.remove();
      actualizarTotal();
    }
  }

 $("#formulario").submit(validarFormulario);

 $(".btn-primary").click(function () {
    var nombre = $(this).parent().find(".card-title").text();
    var precio = $(this).parent().find(".text-muted").text();
    precio = precio.replace("$", "");
    agregarProducto(nombre, precio);
  });
$("#carrito").on("click", "li", function () {
    var nombre = $(this).text().split("$")[0];
    quitarProducto(nombre);
  });
});

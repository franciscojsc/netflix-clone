const infoFilesX = document.querySelector("#info-files-x");

infoFilesX.addEventListener("click", function () {
  Swal.fire({
    title: "Arquivo X",
    text:
      "Dana Scully (Gillian Anderson) e Fox Mulder (David Duchovny), dois agentes do FBI investigam casos não solucionados, estranhos e inexplicáveis que envolvem fenômenos paranormais.",
    imageUrl: "./assets/img/info-files-x.jpg",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Arquivo X",
    theme: "dark",
  });
});

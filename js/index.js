function heartShow() {
  if (!$(".photos").hasClass("heart-show")) {
    $(".heart,.photos").addClass("heart-show");
  } else {
    $(".heart,.photos").removeClass("heart-show");
  }
}

function checkPsw(psw) {
  let encodepsw;
  encodepsw = md5(psw);
  // encodepsw == "f5c838c78c86699fa2c3d9f8703a051b" ? $(".cover").fadeOut() : $("#psw").val('').addClass("wrong");
  psw == "yu" ? $(".cover").fadeOut() : $("#psw").val('').addClass("wrong");
}

$(document).ready(function () {

  // 偵測方向
  $(window).on("deviceorientation resize", function (event) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      $('.overlay-landscape').removeClass('active');
      $('.overlay-landscape-modal-mobile').removeClass('active');
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      $('.overlay-landscape').addClass('active');
      $('.overlay-landscape-modal-mobile').addClass('active');
    }
  });

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  $(".black").click(function () {
    console.log(1);

  })

  setTimeout(function () {
    $(".black").addClass("open");
  }, 3000)

  $('.photos').slick({
    dots: true,
  });


  $(".heart").click(heartShow);

  $(".photos").dblclick(heartShow);

  $(".read-more").click(function () {
    $(".text-inner").addClass("show-more");
    $(".read-more").hide();
  })

  $("#psw").on("keyup", function (e) {
    if (e.which === 13) {
      checkPsw($(this).val());
    }
  })

  $("#openbtn").on("click", function () {
    checkPsw($("#psw").val())
  });

  $("#letter").click(function () {
    $("#letter-wrapper").fadeIn();
    $("#letter-content").addClass("active");
  })

  $("#letter-wrapper").click(function () {
    $("#letter-wrapper").fadeOut();
    $("#letter-content").removeClass("active");
  })
})
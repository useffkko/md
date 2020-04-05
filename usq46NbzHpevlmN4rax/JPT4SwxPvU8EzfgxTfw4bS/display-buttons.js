/*
*  Dsplay Buttons
*  On click will be shown more Buttons. Ech Button has one functionality.
*  Buttons like: Save, Feedback, Copy, Close and Others..
*
*/
$(function () {
  // clear
  $("#clear_btn").on('click', function () {
    console.log("Cleared!");
    document.getElementById('textarea').value = "";
  });

  // close
  $("#close_btn").on('click', function () {
    console.log("closed!");
  });

  // email
  $("#email_btn").on('click', function () {
    let e = document.getElementById("email_btn");
    e.onclick = function () {
      window.location.href = 'mailto:?subject=Check it out!'
      + '&body=https%3A%2F%2Fmakemd.de%2F&amp;';
    };
    console.log("email!");
  });
  // copy
  $("#copy_btn").on('click', function () {
    let copy = document.getElementById("copy_btn");
    copy.onclick = function () {
      let elm = document.getElementById("textarea");
      if (elm.value !== "") {
        elm.select();
        document.execCommand("copy");
        console.log(" Content copied to clipboard Successfully!");
      }
    };
  });
  // download
  $("#download_btn").on('click', function () {
    console.log("download.");
    let a = document.getElementById("href");
    let text_size = document.getElementById('textarea');
    a.onclick = function () {
      if (text_size.value.trim() < 1) {
        console.log(' File is empty.');
      } else {
        let text = document.getElementById('textarea').value,
        FileData = new Blob([text], {type: 'text/markdown'}),
        getLink = document.getElementById('href');
        getLink.href = window.URL.createObjectURL(FileData);
      }
    };
  });
  // info
  $("#info_btn").on('click', function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
      window.location.href = 'pub/pg/examples';
  });
});
/*End Dsplay Buttons*/

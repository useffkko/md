function getSize(e) {
    let w = e.target.outerWidth;
    let h = e.target.outerHeight;
    document.getElementById('window-size').innerHTML = "Window Size: " + w + "&#215;" + h;
}

window.addEventListener("resize", getSize);

window.onbeforeunload = function(){
  let tag = document.getElementById("textarea");
	   if(tag.value != ""){
		     return "You have unsaved work!";
	   }
	}

$(document).ready(function () {
    function selectFile(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        let files = evt.dataTransfer.files;
        let reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('textarea').value = event.target.result;
        };
        reader.readAsText(files[0], "UTF-8");
    }

    function dragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }

    let drop = document.getElementById('textarea');
    drop.addEventListener('dragover', dragOver, false);
    drop.addEventListener('drop', selectFile, false);
});


$(window).load(function () {
    let preloaderDelay = 350,
        preloaderFadeOutTime = 800;

    function hidePreloader() {
        let loadingAnimation = $('#loading-animation'),
            preloader = $('#preloader');
        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();
});


anchors.options.placement = 'left';
anchors.options.truncate = 50;
anchors.add();

var md = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
            }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {
        }

        return '';
    }
});

var rendered = document.querySelector('#rendered');
rendered.innerHTML = md.render(document.querySelector('textarea').textContent);

document.querySelector('textarea').addEventListener('keyup', function (e) {
    rendered.innerHTML = md.render(e.target.value);
});

autosize(document.querySelector('textarea'));


$(document).ready(function () {
    $("#textarea").on('input change mouseover', function () {
        let tl = this.value.length;
        if (tl <= 100000) {
            // do nth
        } else {
            if (tl <= 100100) {
                console.log("Stop writing..");
            } else {
                $("#textarea").attr('disabled', true);
            }
        }
    });
});

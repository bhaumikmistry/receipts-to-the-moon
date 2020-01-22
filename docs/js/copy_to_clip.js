var el = document.getElementById('copy-link');

el.onclick = function() {
    console.log('Click just happened');
    copyToClipboard("copy-link")
};

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("https://github.com/bhaumikmistry/receipts-to-the-moon").select();
    document.execCommand("copy");
    $temp.remove();
  }
  
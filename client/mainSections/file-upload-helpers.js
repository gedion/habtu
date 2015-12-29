Template.main.events({
  'click img ':function(e) {
        toastr.clear();
        var imgEl = $(e.target);
        toastr.options = {
          "closeButton": true,
          "positionClass": "toast-top-center",
          "showDuration": "-1",
          "hideDuration": "-1",
          "timeOut": "-1",
          "extendedTimeOut": "-1"
        }
        toastr.info("<input class='toastr-file-upload' type='file'></input><button class='toastr-file-upload-button' > Upload </button>", "title");
        fileUploadInput = $('.toastr-file-upload');
        fileUploadInput.click([], function(e) {
            e.stopPropagation();
        });
        $('.toastr-file-upload-button').click([], function(e) {
            e.preventDefault();
            var file = fileUploadInput[0].files[0],
                reader = new FileReader();
            reader.onload = function(e) {
              Galleries.update(imgEl.data('id'), { $set: { src: e.target.result }});
            }
            reader.readAsDataURL(file);
            toastr.clear();
        });
  }
});


Template.main.events({
  'click img ':function(e) {
        toastr.clear();
        var imgEl = $(e.target);
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-center",
          "preventDuplicates": false,
          "onclick": function(e) {
                e.stopPropagation();
           },
          "showDuration": "-1",
          "hideDuration": "-1",
          "timeOut": "-1",
          "extendedTimeOut": "-1",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut",
          "tapToDismiss": false
        }
        toastr.info("<input class='toastr-file-upload' type='file'></input><button class='toastr-file-upload-button' > Upload </button>", "title");
        fileUploadInput = $('.toastr-file-upload');
        fileUploadInput.click([], function(e) {
            e.stopPropagation();
        });
        $('.toastr-file-upload-button').click([], function(e) {
            e.preventDefault();
            var file = fileUploadInput[0].files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
              // Add it to your model
              Galleries.update(imgEl.data('id'), { $set: { src: e.target.result }});

              // Update an image on the page with the data
              imgEl.attr('src', e.target.result);
            }
            reader.readAsDataURL(file);
            toastr.clear();
        });
  }

});


handleImageClick = function(e) {
        toastr.clear();
        var imgEl = $(e.target);
        var id = imgEl.data('id'),
            key= 'src';
        if(!id) {
            key= 'bgsrc',
            id = document.querySelector('.hero-banner-hp').dataset.id;
        }
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
        $('.toastr-file-upload-button').click({key:key,id:id}, handleImageUpload);
  }

handleImageUpload = function(e) {
            var key = e.data.key,
                id = e.data.id;
            e.preventDefault();
            var file = fileUploadInput[0].files[0],
                reader = new FileReader();
            reader.onload = function(e) {
                  var data  = {};
                   data[key] =  e.target.result;
                  Galleries.update(id, { $set:data});
            }
            reader.readAsDataURL(file);
            toastr.clear();
}
Template.main.events({
  'click .hero-banner-hp ':handleImageClick,
  'click img':handleImageClick

});

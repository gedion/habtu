var lang = localStorage.getItem('language') || 'amharic';
Session.set('language', lang);
Template.language.events( {
    'click .mode':  function( evt) {

        var modeValue,
            el= $(evt.target);
        if (el.val() === "እንግሊዝኛ") {
            modeValue = "english";
        }
        else {
            modeValue ="amharic";
        }
        Session.set('language', modeValue);
        localStorage.setItem('language', modeValue);

    }

});
var isAmharic  = function() {
        return Session.get('language') == 'amharic';
}

Template.language.helpers({ isAmharic: isAmharic});
Template.login.helpers({ isAmharic: isAmharic});
Template.browserAllStoresMenu.helpers({ isAmharic: isAmharic});
Template.textMenu.helpers({ isAmharic: isAmharic});
Template.language.helpers({ lang: function() {
        var css = {
           amharic:'',
           english:'language-selected'
        };
        if(Session.get('language') == 'amharic'){
            css = {
               amharic:'language-selected',
               english:''
            };
        };
        return css;
    }
});

Template.newestMembers.helpers({
    logo: function() {
        return Galleries.find({type:'newestMembers'});
    }
});


var tabToShow = function(tab) {
        return Session.get('tabToShow') == tab;
}


Template.whatsNewFrom.helpers({
    gal: function(){
        var subTabIndex = Session.get('subTabToShow') || 0;
        return Galleries.find({type:this.tab+'WhatsNew', tab:subTabIndex}, {sort: {sortorder:1}});
    }
});

Template.galleries.helpers({ gallery: function() {

        var galleries, 
            whatsNewGals,
            subTabIndex = Session.get('subTabToShow') || 0;
        gals = Galleries.find({type:this.tab, tab:subTabIndex}, {sort: {sortorder:1}}).fetch();
        for (var i = 0; i < gals.length;i++) {
            gals[i]['class'] = 'image-'+(i + 1);
        }

        galleries = { gal: gals };
        whatsNewGals  = Galleries.findOne({type:this.tab+'WhatsNew', tab:subTabIndex}, {sort: {sortorder:1}}) || {};
        $.extend(galleries, whatsNewGals);
        return galleries;
    }

});

Template.sectionTwoGal.helpers({ gallery: function() {
        return Galleries.find({type:this.tab, tab:-1}, {sort: {sortorder:1}});
     }
});

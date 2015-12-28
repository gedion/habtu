Template.vendorOfTheDay.helpers({
    gallery: function() {
        gals = Galleries.find({type:'vOfTheDay'}, {sort: {sortorder:1}}).fetch();
        for(var i = 0; i < gals.length;i++){
            gals[i]['class'] = 'vendor-day-square-ad-module-mid-'+(i + 1);
        }
        return gals;
    }
});

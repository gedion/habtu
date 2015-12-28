Meteor.startup(function() {
    if (Galleries.findOne() === undefined) {
        gals = [
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:1},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:2},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:3},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:4},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:5},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:6},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:7},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:8},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:1},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:2},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:3},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:4},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:5},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:6},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:7},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:1},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:2},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:3},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:4},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:5},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:6},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:7},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:1},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:2},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:3},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:1},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:2},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:3},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:1},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:2},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:3},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:4},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:1},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:2},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:3},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:4},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:1},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:2},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:3},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:4},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:5},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:6},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:7},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:8}
        ];
        for(var i = 0;i<gals.length;i++){
           Galleries.insert(gals[i]);
        }
    }
});

Template.externalLinks.helpers({
    externalLinks :   function() {
        return externalLinks.find({type:this.type});
    }
});


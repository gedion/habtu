
cellRenderer = function (value) {
    var cssClass = "success";
    if (value == 2) {
        cssClass = 'warning';
    }
    else if (value < 2){
        cssClass = 'danger';
    }
    return new Handlebars.SafeString("<div class='" + cssClass + "'>" + value + "</div>");
};
getTableSettings = function(){


//    Women Manufacturers Women Distributors Men Children Accessories Handbags Footwear
    var tableSettings,
        title = this.title.toLowerCase(),
        collection = gv_goalsMap[title],
        fields = {
            'Women Manufacturers':[
                {label: 'breakfast', key: 'breakfast', fn: cellRenderer},
                {label: 'lunch', key: 'lunch', fn: cellRenderer},
                {label: 'dinner', key: 'dinner', fn: cellRenderer}
            ]
        };
    tableSettings = {
            collection: collection.find({week: parseInt(this.week)}),
            fields:fields[title],
            showNavigation: 'never',
            showFilter: false,
            class: "table table-bordered table-hover table-striped"
    };
    return tableSettings;
};
    Template.daySummary.helpers({
        daySummary: function(){
            return [{},{},{}];
        }
    });
Template.weeksSummary.helpers({
    weeksSummary: function() {
        var distinctWeeks,
            collection,
            _self = this,
            isDay = this.isDay,
            result =[];

        if(isDay){
            result = [{},{},{}];
        }else {
            collection = gv_goalsMap[this.title.toLowerCase()];
            distinctWeeks = _.uniq(collection.find({}, {
                sort: {date: -1},
                fields: {week: true, date: true}
            }).fetch().map(function (weekData) {
                var date = weekData.date;
                if (date && date.toDateString) {
                    date = date.toDateString('yyyy-MM-dd');
                } else {
                    date = "";
                }
                return weekData.week + ";" + date;
            }), true);
            distinctWeeks.forEach(function(week) {
                var weekAndTime = week.split(";");
                result.push({week:weekAndTime[0],title:_self.title,date:weekAndTime[1]});
            });
        }

        return result;
    },
    tableSettings: getTableSettings
});

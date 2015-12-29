Template.contenteditable.content = function () {
    return Content.findOne({tag:this.tag});
  };

  Template.contenteditable.editable = function () {
    var content = '';
    switch (this.tag) {
        case 'mod-0-header':
        case 'mod-1-header':
        case 'mod-2-header':
        case 'mod-3-header':
            content = '<h2 class="cr-note" contenteditable="true">' + this.note + '</h2>';
            break;
        case 'mod-stockg-header':
        case 'mod-rewards-header':
            content = '<p class="module-titles cr-note" contenteditable="true">' + this.note + '</p>';
            break;
        case 'mod-0-body':
        case 'mod-1-body':
        case 'mod-2-body':
        case 'mod-3-body':
        case 'mod-stockg-body':
        case 'mod-rewards-body':
            content = '<p class="cr-note" contenteditable="true">' + this.note + '</p>';
            break;
        case 'mod-0-footer':
        case 'mod-1-footer':
        case 'mod-2-footer':
        case 'mod-3-footer':
              content = '<div>' +
                            '<p class="cr-note" contenteditable="true">'+ this.note + '</p>' +
                        '</div>';
            break;
    }
    return content;
  };

  Template.contenteditable.events( {
    'keypress .cr-note' : function(evt) {
        AmharicPhoneticKeyPress(evt,evt.target);
    },
    'blur .cr-note':  function( evt) {
        var content = $( evt.target).html();
        Content.update( this._id,
            {
                $set: { note: content}
            }
        );
    }

  } );


var amharicKeyboard = {};
Template.contenteditable.content = function () {
      return Content.findOne({tag:this.tag});
  };

  Template.contenteditable.editable = function () {
    var content = '',
        note = this.note,
        dataId = this._id,
        lang = Session.get('language');

        if(lang == 'amharic') {
            note = this.noteAmharic;
        }
        note = note || 'Click here and type to change label';
    switch (this.tag) {
        case 'main-tab-one':
            content = '<div class="tab-home-page tab-home-page-active-1"><p class="contempo-tab">'+ note +'</p></div>'
            break;
        case 'main-tab-two':
            content = '<div class="tab-home-page "><p class="the-edge-tab">'+ note +'</p></div>'
            break;
        case 'main-tab-three':
            content = '<div class="tab-home-page "><p class="sp-tab">'+ note +'</p></div>'
            break;
        case 'menu-labels-one':
        case 'menu-labels-two':
        case 'menu-labels-three':
        case 'menu-labels-four':
        case 'menu-labels-five':
        case 'menu-labels-six':
        case 'menu-labels-seven':
            content = '<a href="'+this.ref+'" data-id="'+ dataId +'" class="cr-note" contenteditable="true">' + note + '</a>';
            break;
        case 'mod-0-header':
        case 'mod-1-header':
        case 'mod-2-header':
        case 'mod-3-header':
        case 'whats-new-from-header':
            content = '<h2 data-id="'+ dataId +'" class="cr-note" contenteditable="true">' + note + '</h2>';
            break;
        case 'mod-stockg-header':
        case 'mod-rewards-header':
            content = '<p data-id="'+ dataId +'" class="module-titles cr-note" contenteditable="true">' + note + '</p>';
            break;
        case 'mod-newest-header':
            content = '<p data-id="'+ dataId +'" class="module-titles white cr-note" contenteditable="true">' + note + '</p>';
        break;
        case 'mod-0-body':
        case 'mod-1-body':
        case 'mod-2-body':
        case 'mod-3-body':
        case 'mod-stockg-body':
        case 'mod-rewards-body':
        case 'mod-rewards-body':
        case 'whats-new-from-body':
            content = '<p data-id="'+ dataId +'" class="cr-note" contenteditable="true">' + note + '</p>';
            break;
        case 'mod-newest-body':
        case 'mod-featuring-body':
        case 'contempoWhatsNewBody':
        case 'theEdgeWhatsNewBody':
        case 'spWhatsNewBody':
            content = '<h5 data-id="'+ dataId +'" class="cr-note" contenteditable="true">' + note + '</h5>';
            break;
        case 'mod-0-footer':
        case 'mod-1-footer':
        case 'mod-2-footer':
        case 'mod-3-footer':
              content = '<div>' +
                            '<p data-id="'+ dataId +'" class="cr-note" contenteditable="true">'+ note + '</p>' +
                        '</div>';
            break;
    }
    return content;
  };

  Template.contenteditable.events( {
    'click .cr-note':  function( evt) {
      var el = $(evt.target),
          amhkey = amharicKeyboard[el.data('id')];
      if(amhkey) {
        amhkey.changeMode(Session.get('language'));
       } else {
           amharicKeyboard[el.data('id')] = el.amharicKeyboard({mode:Session.get('language')});
       }
    },
    'blur .cr-note':  function( evt) {
        var entry,
            content = $(evt.target).html(),
            lang = Session.get('language');

        entry = { note: content};
        if(lang == 'amharic') {
            entry = { noteAmharic : content};
        }
        Content.update( this._id,
            {
                $set: entry
            }
        );
    }

  });


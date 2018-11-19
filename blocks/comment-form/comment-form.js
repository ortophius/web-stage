
var regExps = [];
regExps['name'] = /^[A-Za-z0-9 ]{1,40}$/;
regExps['email'] = /^[A-Za-z0-9_.]+[@][A-Za-z0-9]+([.][A-Za-z0-9]+)+$/;
regExps['website'] = /^[A-Za-z0-9]+([.][A-Za-z0-9]+)+$/;
regExps['message'] = /^[*]{1,255}$/;

$('.comment-form').each(function(index, form){
    $(form).on('submit', function(e){
      e.preventDefault();
      var elems = []; 
      elems['name'] = $(e.target).find('.comment-form__name');
      elems['email'] = $(e.target).find('.comment-form__email');
      elems['website'] = $(e.target).find('.comment-form__website');
      elems['message'] = $(e.target).find('.comment-form__message');
      elems.forEach(function(item, index){
        console.log(item);
        console.log(!regExps[index].test(item.val().trim()));
        if (!regExps[index].test(item.val().trim())) {
          $(item).addClass('comment-form__item_invalid');
          return
        }
      $(form).submit();
      })
    })
  })

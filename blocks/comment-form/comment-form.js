var checks = [{
  regExp: /^[A-Za-z0-9 ]{1,40}$/,
  class: 'comment-form__name'
},
{
  regExp: /^[A-Za-z0-9_.]+[@][A-Za-z0-9]+([.][A-Za-z0-9]+)+$/,
  class: 'comment-form__email'
},
{
  regExp: /^[A-Za-z0-9]+([.][A-Za-z0-9]+)+$/,
  class: 'comment-form__website'
},
{
  regExp: /^.+$/,
  class: 'comment-form__message'
}];

$('.comment-form').each(function(index, form){
    $(form).on('submit', function(e){
      e.preventDefault();
      var validted = true;
      checks.forEach(function(check){
        var elem = $(e.target).find('.'+check.class);
        console.log(elem.val(), check.regExp, check.regExp.test(elem.val()));
        if (!check.regExp.test(elem.val())) {
          elem.addClass('comment-form__input_invalid');
          setTimeout(function(){elem.removeClass('comment-form__input_invalid')}, 0);
          validated = false;
        }
      })
    })
  })

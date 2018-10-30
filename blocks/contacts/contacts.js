const contacts = $('.contacts');

$('.info__label').click(() => {
  if (contacts.hasClass('contacts_hidden')) contacts.removeClass('contacts_hidden');
    else contacts.addClass('contacts_hidden');
})
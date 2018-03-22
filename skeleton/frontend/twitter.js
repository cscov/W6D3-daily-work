const FollowToggle = require('./follow_toggle');

$(document).ready( () => {
  const $followButtons = $(".follow-toggle");

  $followButtons.each(function (index, element) {
    const button = new FollowToggle($(element));
  });

});

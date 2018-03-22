const APIUtil = require('./api_util');

class FollowToggle {
  constructor (el) {
    this.button = el;
    this.userId = el.data("userId");
    this.followState = el.data("initialFollowState");
    this.render();
    this.handleClick();
  }

  render(){
    if (this.followState === "unfollowed") {
      this.button.text("Follow!");
    } else {
      this.button.text("Unfollow!");
    }
  }


  handleClick() {
    this.button.on("click", (e) => {
      e.preventDefault();

      // let  formData = $(this.userId).serialize();

      if (this.followState === "unfollowed") {
        APIUtil.followUser(this.userId).then( () => {
          this.followState = "followed";
          this.render();
        });
      } else {
        APIUtil.unfollowUser(this.userId).then( () => {
          this.followState = "unfollowed";
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;

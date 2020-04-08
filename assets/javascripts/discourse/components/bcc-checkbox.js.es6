import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",

  bccAvailable: computed(
    "creatingPrivateMessage",
    "targetRecipients",
    function() {
      return (
        this.currentUser.staff &&
        this.creatingPrivateMessage &&
        (this.targetRecipients || "").split(",").length > 1
      );
    }
  )
});

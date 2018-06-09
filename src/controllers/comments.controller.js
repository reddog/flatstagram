class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here

    // add comment form event listeners
    // this isn't *strictly* requested in the assignment
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // find all comment forms and add a submit listener
    $('form.add-comment').on('submit', function(event){
    	// event handler to handle comment form submit

    	// prevent default form submit behaviour - we are going t handle the submit
    	event.preventDefault();

    	// make a jQuery object of the event so we can use jQuery helpers to get DOM element data
    	var $event = $(event);

    	// log the event to the console - just to show that something's working at this point
    	console.log(event);
    });
  }
}

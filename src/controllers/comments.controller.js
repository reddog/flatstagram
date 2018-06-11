class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here

    // this isn't *strictly* requested in the assignment
    if(doTest) {
	    // add comment form event listeners
	    this.addCommentFormListener();
    }
  }

  addCommentFormListener() {
  	const self = this;

    // find all comment forms and add a submit listener
    this.$addCommentForm.on('submit', function(event){
    	// event handler to handle comment form submit

    	// prevent default form submit behaviour - we are going t handle the submit
    	event.preventDefault();

    	// make a jQuery object of the target form so we can use jQuery helpers to get DOM element data
    	const $form = $(event.target);

    	const imageId = parseInt($form.data('id'));
    	const commentContent = $form.find('input[name="comment-description"]').val();

    	const comment = new Comment(commentContent, imageId);
    	self.render(comment);
    });
  }

  render(commentObject) {
  	// render a comment object
  	if(!commentObject || !commentObject.image) {
  		// for some reason, there is no comment object or image for this comment
  		return false;
  	}

  	const imageId = commentObject.image.id;

  	$(`#comments-${imageId}`).append(commentObject.commentEl());
  }
}

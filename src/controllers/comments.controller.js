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

  addCommentToImage(imageId, comment) {
  	// add a comment to a given image and re-render
  	// returns true on success, false on failure

	if(Array.isArray(Image.all) && Image.all.length >= imageId + 1 && Array.isArray(Image.all[imageId].comments)) {
    	Image.all[imageId].comments.push(comment);
    	return true;
    }

    // there was some sort of error finding array of all images, or the comments array for this image
    return false;
  }

  addCommentFormListener() {
    // find all comment forms and add a submit listener
    var self = this;
    
    $('form.add-comment').on('submit', function(event){
    	// event handler to handle comment form submit

    	// prevent default form submit behaviour - we are going t handle the submit
    	event.preventDefault();

    	// make a jQuery object of the target form so we can use jQuery helpers to get DOM element data
    	var $form = $(event.target);

    	var imageId = parseInt($form.data('id'));
    	var comment = $form.find('input[name="comment-description"]').val();

    	if(!self.addCommentToImage(imageId, comment)) {
    		console.log('Unable to add comment to image');
    		return;
    	}

    	// log the image comments - just to show that something's working at this point
    	console.log(Image.all[imageId].comments);
    });
  }
}

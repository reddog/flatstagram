// Initialize

// flag to turn testing code on/off
// set to true to include code not specifically requrested in the assessment instructions, but useful for testing
const doTest = true;

$(function() { // on document ready
  imagesController = new ImagesController();
  imagesController.init();
  commentsController = new CommentsController();
  commentsController.init();
});

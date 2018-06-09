'use strict';
// Comment model

class Comment {
  constructor(comment, imageId) {
  	// ensure class static parameter all is an array, make it if not
  	if(!Array.isArray(this.constructor.all)) {
  		this.constructor.all = [];
  	}

  	// set instance variables
	  this.id = this.constructor.all.length;
	  this.image = this.findImage(imageId);
	  this.commentContent = comment;

	  // add this instance to list of all comments
	  this.constructor.all.push(this);
  }

  findImage(imageId) {
  	// given an `int` for an image id, returns the image object with that id
  	// before return - adds current comment to image's comments property
  	// returns false on error or not found

  	if(!Image || !Array.isArray(Image.all)) {
  		return false;
  	}

		for(var image of Image.all) {
			if(image.id == imageId) {
				// found the matching image

				// add this comment
				if(!Array.isArray(image.comments)) {
					image.comments = [];
				}
				image.comments.push(this);
				
				// return the image
				return image;
			}
		}

		// can't find the image for that id
		return false;
  }
}

// define array to hold all comments, a static propety of class Comment
// can't declare static properties of classes in ES6
Comment.all = [];

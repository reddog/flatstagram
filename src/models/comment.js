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

  	const index = Image.all.findIndex(image => image.id === imageId);

  	if(index >= 0) {
	  	// we've found the image

	  	// add this comment
	  	if(!Array.isArray(Image.all[index].comments)) {
	  		Image.all[index].comments = [];
	  	}
			Image.all[index].comments.push(this);

	  	return Image.all[index];
  	}

		// can't find the image for that id
		return false;
  }

  commentEl() {
  	// returns a string of HTML representing this comment
  	const escapedComment = _.escape(this.commentContent);
  	return `<li data-id="${this.id}">${escapedComment}</li>`;
  }
}

// define array to hold all comments, a static propety of class Comment
// can't declare static properties of classes in ES6
Comment.all = [];

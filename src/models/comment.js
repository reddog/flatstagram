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
}

// define array to hold all comments, a static propety of class Comment
// can't declare static properties of classes in ES6
Comment.all = [];


// this represents an object executing the current function
// method -> obj
// function -> global object, Window object, and Global in node

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
}

video.stop();

function playVideo() {
    console.log(this);
}

playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video ('b'); // for constructors, this will refer
// to the newly created objects

const bideo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // callback function is not a member function
        // thus it has this refering to Window in browser
        // or Global in node 
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);  // if we pass the second argument to the 
        // callback funciton, the callback function will use
        // this from the outside scope (the calling method).
    }
};

bideo.showTags();











const bideo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // callback function is not a member function
        // thus it has this refering to Window in browser
        // or Global in node 
        const self = this; // only assigns the reference
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });  // if we pass the second argument to the 
        // callback funciton, the callback function will use
        // this from the outside scope (the calling method).
    }
};

bideo.showTags();

function playVideo(a , b) {
    console.log(this);
}

playVideo.call({ name: 'Mosh'}, 1, 2); // call supplies
// parameters after this parameter
playVideo.apply({ name: 'Moshi'}, [1, 2]); // apply supplies 
// parameters in an array after this parameter
const fn = playVideo.bind({ name: 'Moshu'}); // bind a function 
// object
fn();

playVideo.bind({ name: 'Moshua'})(); // can be called
// immediately

//playVideo();



const bideodeki = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // callback function is not a member function
        // thus it has this refering to Window in browser
        // or Global in node 
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));  // we can bind this.
    }
};

bideodeki.showTags();

const bidearrow = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // callback function is not a member function
        // thus it has this refering to Window in browser
        // or Global in node 
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });  // arrow functions inherit this from
        // the containing function
    }
};

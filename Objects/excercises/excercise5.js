
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

    this.addComment = function(author, body) {
        this.comments.push({ author, body });
    };

    this.view = function() {
        this.views++;
        return this;
    };

    this.makeLive = function() {
        this.isLive = true;
    };
}

const blogPost = 
    new BlogPost('Nowy post', 'Przykladowa tresc', 'Zenek');
blogPost.makeLive();
blogPost.view().view();
blogPost.addComment('Sławomir', '10/10');


console.log(blogPost);






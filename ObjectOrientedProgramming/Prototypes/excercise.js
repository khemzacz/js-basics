
function Stopwatch() {
    let duration = 0;
    let startDate = undefined;

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; } 
    });

    Object.defineProperty(this, 'startDate', {
        get: function() { return startDate; },
        set: function(value) { startDate = value; }
    });

}

Stopwatch.prototype.start = function() {
    if (this.startDate !== undefined) {
        throw new Error('Already started!');
    }
    this.startDate = new Date();

}

Stopwatch.prototype.stop = function() {
    if (this.startDate === undefined) {
        throw new Error('Already stopped!');
    }
    this.duration += 
        ((new Date()).getTime() - this.startDate.getTime())  / 1000;
        this.startDate = undefined;
}

Stopwatch.prototype.reset = function() {
    this.startDate = undefined;
    this.duration = 0;
}








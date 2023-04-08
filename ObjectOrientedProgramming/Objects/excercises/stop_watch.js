

function Stopwatch() {
    let duration = 0;
    let startDate = undefined;

    this.start = function() {
        if (startDate !== undefined) {
            throw new Error('Already started!');
        }
        startDate = new Date();

    }

    this.stop = function() {
        if (startDate === undefined) {
            throw new Error('Already stopped!');
        }
        duration += 
            ((new Date()).getTime() - startDate.getTime())  / 1000;
        startDate = undefined;
    }

    this.reset = function() {
        startDate = undefined;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

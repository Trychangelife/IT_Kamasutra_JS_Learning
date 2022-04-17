String.prototype.isUpperCase = function() {
    // your code here
    if (this.toUpperCase() == this) {
        return true;
    }
    else {
        return false;
    }
}
function extands(defaults,opts){
        var target = {},i=0;
        // opts is object
        if(opts && typeof opts == "object"){      
            for(var x in opts){
                target[x] = opts[x];
                }
            }

        if(defaults && typeof defaults == "object"){
            for(var y in defaults){                
                if(!(y in target)){                    
                    target[y] = defaults[y];
                }
            }
        }
        return target    
    }


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function getDomById(id){
    return document.getElementById(id);
}
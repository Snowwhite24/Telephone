//Telephone package
class Telephone{
    constructor(phoneNumber){
        this.phoneNumber = number;
    }
    
    constructor(){
        this.observers = new Set()
    }

    add(observers){
        this.observers.add(observers)
    }

    remove(observers){
        this.observers.delete(observers)
    }

    notify(context){
        for(let observers of this.observers){
            observers.update(context)
        }
    }
}
    Telephone.prototype.addPhoneNumber = function(){

    }
    Telephone.prototype.removePhoneNumber = function(){

    }
    Telephone.prototype.dialPhoneNumber = function(){
    }
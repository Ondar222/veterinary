import {makeAutoObservable} from "mobx";

class NavOpen {

    constructor() {
        makeAutoObservable(this)
    }

    isNavOpen = 'open'

    setIsNavOpen() {
        if (this.isNavOpen === false){
            this.isNavOpen = "open"
        }
        else {
            this.isNavOpen = "close"
        }
    }
}

export default new NavOpen
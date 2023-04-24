import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userRole = 0
        makeAutoObservable(this)       
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setUserRole(role) {
        this._userRole = role
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
    get role() {
        return this._userRole
    }
}
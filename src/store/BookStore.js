import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._types = []
        this._books = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        this._searchString = ""

        makeAutoObservable(this)       
    }

    setTypes(types) {
        this._types = types
    }

    setBooks(books) {
        this._books = books
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSearchString(value){
        this._searchString = value
    }


    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }


    get types() {
        return this._types
    }
    get books() {
        return this._books
    }
    get selectedType() {
        this.setPage(1);
        return this._selectedType
    }

    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get myLimit() {
        return this._limit
    }
    get searchString() {
        return this._searchString
    }
}
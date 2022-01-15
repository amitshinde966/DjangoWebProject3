"use strict";
class Search {
    constructor() {
        this.term = "";
    }
    search() {
        return new Promise((resolve, reject) => {
            if (document.getElementById("searchText")) {
                this.term = document.getElementById("searchText").value;
                let search = {
                    searchTerm: this.term
                };
                return ExulerCommon.CallApiPromised("searchsyllabus", search)
                    .then((data) => {
                    if (data) {
                        resolve(data);
                    }
                });
            }
            resolve(null);
        });
    }
}
function search() {
    let searchObj = new Search();
    searchObj.search();
}

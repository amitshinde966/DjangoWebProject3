class Search {
    term: string;

    constructor() {
        this.term = "";
    }

    public search(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (document.getElementById("searchText")) {
                this.term = (document.getElementById("searchText")! as HTMLInputElement).value;
                let search = {
                    searchTerm:this.term
                };
                return ExulerCommon.CallApiPromised("searchsyllabus", search)
                    .then((data) => {
                        if (data) {
                            resolve(data);
                        }
                    })
            }
            resolve(null);
        })
    }
}

function search() {
    let searchObj = new Search();
    searchObj.search();
}
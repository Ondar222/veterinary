import { makeAutoObservable } from "mobx";

class SearchDocs {
  title
  date_from
  date_to
  result = []

  constructor() {
    makeAutoObservable(this)
  }

  searchDocs(title, date_from, date_to) {
    this.result.filter((item, index, array) => {
      
    })
  }

  fetchDocsByTypes(doc_type) {
    fetch(`${process.env.APIpath}/api/documents?populate[0]=document&populate[1]=document.file&populate[2]=document.document_type&filters[document][document_type][title][$eq][3]=${doc_type}`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchDocs(doc_title) {
    fetch(`${process.env.APIpath}/api/documents?populate=*&filters[document][signing_date][$lte]=${end}&filters[document][signing_date][$gte]=${start}`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchDocsAll() {
    fetch(`${process.env.APIpath}/api/documents?&populate[0]=document.file`)
      .then(response => response.json())
      .then(response => {
        this.result = JSON.parse(JSON.stringify(response.data))
      })
  }
}

export default new SearchDocs
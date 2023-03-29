import { makeAutoObservable } from "mobx";

class DocumentSlice {
  headerOptions = {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  }
  doc_title
  result = []

  constructor() {
    makeAutoObservable(this)
  }

  async filterDocuments(string, start, end) {
    await fetch(`${process.env.APIpath}/api/documents?populate[0]=document.file&filters[document][title][$containsi]=${string}&filters[document][signing_date][$lte]=${end}&filters[document][signing_date][$gte]=${start}`,
      this.headerOptions)
      .then((res) => res.json())
      .then((json) => this.result = json.data)
  }

  async filterDocumentsByTitle(doc_title) {
    await fetch(`${process.env.APIpath}/api/documents?populate[0]=document&populate[1]=document.file&populate[2]=documents.document_type&filters[document][title][$containsi]=${doc_title}&populate=*`,
      this.headerOptions)
      .then(response => response.json())
      .then(json => this.result = json.data)
  }

  async getAll() {
    await fetch(`${process.env.APIpath}/api/documents?populate[0]=document&populate[1]=document.file`,
      this.headerOptions)
      .then(response => response.json())
      .then(json => this.result = json.data)
  }
}

export default new DocumentSlice
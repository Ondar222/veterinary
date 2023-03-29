import { makeAutoObservable } from "mobx";

class SearchQuery {
  query = ''
  result = []

  constructor() {
    makeAutoObservable(this)
  }

  search(string) {
    this.query = string
  }

  fetchPosts(query) {
    fetch(`${process.env.APIpath}/api/posts?filters[body][$containsi]=${query}&populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchPostsAll() {
    fetch(`${process.env.APIpath}/api/posts?populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }
}

export default new SearchQuery
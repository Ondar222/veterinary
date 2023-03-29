import {makeAutoObservable} from "mobx";
import axios from "axios";

class SuggestedNews {
    constructor() {
        makeAutoObservable(this)
    }

    title = ''
    body = ''
    files = null
    link = ''

    setTitle(string) {
        this.title = string
    }

    setBody(string) {
        this.body = string
    }

    setFiles(files) {
        this.files = files
    }

    setLink(string) {
        this.link = string
    }


    async postSuggestedNews() {
        try {
            const formData = new FormData()
            const data = {}
            data['title'] = this.title
            data['body'] = this.body
            data['link'] = this.link

            formData.append('data', JSON.stringify(data))

            for (let i = 0; i < this.files.length; i++) {
                formData.append('files.files', this.files[i], this.files[i].name)
            }

            await axios.post(`${process.env.APIpath}/api/suggested-posts`, formData, {
                headers: {"Content-Type": "multipart/form-data"},
            }).then((res) => {
                this.title = ''
                this.body = ''
                this.files = null
            })
                .catch((err, res) => {
                    console.log(err);
                });
        } catch
            (e) {
            console.error(e)
        }
    }
}

export default new SuggestedNews
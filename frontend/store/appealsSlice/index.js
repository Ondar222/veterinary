import { makeAutoObservable } from "mobx";
import axios from "axios";

class AppealsSlice {
  constructor() {
    makeAutoObservable(this)
  }

  surname = ''
  name = ''
  patronymic = ''
  email = ''
  phone = ''
  body = ''
  offerCheck = false
  files = undefined

  setSurname(input_surname) {
    this.surname = input_surname
  }

  setName(input_name) {
    this.name = input_name
  }

  setPatronymic(input_patronymic) {
    this.patronymic = input_patronymic
  }

  setEmail(input_email) {
    this.email = input_email
  }

  setPhone(input_phone) {
    this.phone = input_phone
  }

  setBody(input_body) {
    this.body = input_body
  }

  setFiles(input_files) {
    this.files = input_files
  }

  setOfferCheck(offer) {
    if (typeof offer === "boolean") {
      this.offerCheck = !this.offerCheck
    }
  }

  uploadToServer = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const data = {
      surname: this.surname,
      name: this.name,
      patronymic: this.patronymic,
      email: this.email,
      phone: this.phone,
      body: this.body
    }

    try {
      formData.append('data', JSON.stringify(data))
      if (this.files != undefined) {
        for (let i = 0; i < this.files.length; i++) {
          formData.append('files.files', this.files[i], this?.files[i]?.name)
        }
      }
      else {
        console.log('files')
      }
      
      await axios.post(`${process.env.APIpath}/api/appeals`, formData, {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
          "Content-Type": "multipart/form-data"
        },
      })
        .then((res) => {
          this.surname = ''
          this.name = ''
          this.patronymic = ''
          this.phone = ''
          this.email = ''
          this.body = ''
          this.offerCheck = false
          this.files = undefined
        })
        .catch((err, res) => {
          console.log(err);
        });

    } catch (e) {
      console.log('errored')
      console.error(e)
    }
  };
}

export default new AppealsSlice
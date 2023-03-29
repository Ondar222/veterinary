import { makeAutoObservable } from "mobx";

class DynamicPageRoutingSlice {

  constructor() {
    makeAutoObservable(this)
  }

  headers = {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  }

  aboutPage
  activityPage
  civilservicePage

  getAboutPageRoutes = async () => {
    this.aboutPage = await fetch(`${process.env.APIpath}/api/about-pages?sort=sorting:ASC`,
      this.headers
    )
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((e) => console.error(e))
  }

  getActivityPageRoutes = async () => {
    this.activityPage = await fetch(`${process.env.APIpath}/api/activity-pages?sort=sorting:ASC`,
      this.headers
      )
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((e) => console.error(e))
  }

  getCivilservicePageRoutes = async () => {
    this.civilservicePage = await fetch(`${process.env.APIpath}/api/civilservice-pages?sort=sorting:ASC`,
      this.headers)
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((e) => console.error(e))
  }
}

export default new DynamicPageRoutingSlice
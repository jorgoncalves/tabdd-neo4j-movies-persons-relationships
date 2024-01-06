import { api } from "../axios"
import { defineCancelApiObject } from "../axiosUtils"

export const PersonsAPI = {
    getAll: async function (cancel = false) {
        const response = await api.request({
            url: `/persons`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    get: async function (name, cancel = false) {
        const response = await api.request({
            url: `/persons/${name}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    search: async function (searchTerm, cancel = false) {
        const response = await api.request({
            url: `/persons/search?name=${searchTerm}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    actedIn: async function (name, cancel = false) {
        const response = await api.request({
            url: `/persons/actedIn?name=${name}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.actedIn.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
}

// defining the cancel API object for PersonsAPI
const cancelApiObject = defineCancelApiObject(PersonsAPI)
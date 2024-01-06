import { api } from "../axios"
import { defineCancelApiObject } from "../axiosUtils"

export const MoviesAPI = {
    getAll: async function (cancel = false) {
        const response = await api.request({
            url: `/movies`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    get: async function (name, cancel = false) {
        const response = await api.request({
            url: `/movies/${name}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    search: async function (searchTerm, cancel = false) {
        const response = await api.request({
            url: `/movies/search?title=${searchTerm}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
}

// defining the cancel API object for MoviesAPI
const cancelApiObject = defineCancelApiObject(MoviesAPI)
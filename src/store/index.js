import create, { SetState, GetState } from 'zustand'
import axios from 'axios'


const store = create((set, get) => ({
    playerName: '',
    setPlayerName: (val) => set({ playerName: val }),
    playerId: '',
    stats: {},
    ADR: null,
    options: {
        headers: {
            Authorization: process.env.REACT_APP_API_KEY,
            Accept: "application/vnd.api+json"
        }
    },
    getPlayerStats: async () => {
        const GET_USER_URL = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${get().playerName}`
        let response = await axios.get(GET_USER_URL, get().options)
        const playerId = response.data.data[0].id
        const GET_STATS_URL = `https://api.pubg.com/shards/steam/players/${playerId}/seasons/division.bro.official.pc-2018-11`
        response = await axios.get(GET_STATS_URL, get().options)
        const allStats = response.data
        const ADR = allStats.data.attributes.gameModeStats["squad-fpp"].damageDealt / allStats.data.attributes.gameModeStats["squad-fpp"].roundsPlayed
        set(state => ({
            GET_USER_URL,
            GET_STATS_URL,
            ADR
        }))
    }
}))

export default store

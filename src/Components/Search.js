import axios frm 'axios'
import React, { useEffect, useState } from 'react'

function Search(){
    const [player, searchPlayer] = useState({})
    const options = {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwYzZjYzIxMC03ZWEzLTAxMzktY2QxNC0wYzVlYWFlYWUxZTEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjE4MzMxMjQyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im9ubHlmcmFncyJ9.SeBLviY633Xy1jYQ-oSkU5hs-pMODNDPoYxZuwLUWHA',
            Accept: "application/vnd.api+json"
        }
    }
}
const playerName = player
const url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`

ujseEffect(() => {
    getPlayer()
}, [])

const getPlayer = async () =>{
    try {
        const response = await axios.get(`${url}`, options)
    } catch (error) {
        console.error(`Error:  ${error}`)
    }
}

export default Search
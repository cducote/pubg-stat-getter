import axios from 'axios'
import React, { useEffect, useState } from 'react'
import store from '../store/index'

function Player() {
    const {
        playerName, playerId, stats, getPlayerStats, ADR,
    } = store(state => state)

    useEffect(() => {
        (async ()=> {
           await getPlayerStats();
        })()
    }, [])

    return ADR && (
        <div>
            <h1>IGN: {playerName}</h1><br />
            <h3>ADR: {Math.round(ADR)}</h3>
        </div>
    )
}

export default Player
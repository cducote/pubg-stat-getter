import React, { useState } from "react";
import store from '../store/index'

function Form(props) {
   const name = store(state => state.name)
   const setPlayerName = store(state => state.setPlayerName)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        alert(`Submitting ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Player Name (case sensitive):
        <input
                    type="text"
                    value={name}
                    onChange={e => setPlayerName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form
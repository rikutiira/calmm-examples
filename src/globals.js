import React from 'karet'
import Kefir from 'kefir'
import R from 'ramda'
import K, * as U from 'karet.util'

const log = (value) => {
    console.log(`${value}`, 'color: red; font-size: 20px;')

    return value
}

Object.assign(global, { React, Kefir, R, K, U, log })

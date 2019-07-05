import React from 'react'
import {hydrate} from 'react-dom'
import {baseMarkup} from "../shared/baseMarkup"
import '../shared/styles/base.sass'

hydrate(baseMarkup, document.getElementById('root'))

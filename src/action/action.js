import {ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE,ADD_TITLE,ADD_IMAGE, ADD_YEAR,ADD_RATING, ADD_RATINGFILTER, ADD_TITLEFILTER} from "../action/actionType"

export const addMovie=(payload)=>{
    return ({type:ADD_MOVIE,payload})
}
export const editMovie=(payload)=>{
    return ({type:EDIT_MOVIE,payload})
}
export const deleteMovie=(payload)=>{
    return ({type:DELETE_MOVIE,payload
        })
}
export const addtitle=(payload)=>{
    return ({type:ADD_TITLE,payload
        })
}
export const addimage=(payload)=>{
    return ({type:ADD_IMAGE,payload
        })
}
export const addyear=(payload)=>{
    return ({type:ADD_YEAR,payload
        })
}
export const addrating=(payload)=>{
    return ({type:ADD_RATING,payload
        })
}
export const onChangeR=(payload)=>{
    return ({type:ADD_RATINGFILTER,payload
        })
}
export const addtitlefilter=(payload)=>{
    return ({type:ADD_TITLEFILTER,payload
        })
}
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials,logOut } from '../features/authSlice'
import { useSelector } from 'react-redux'
import { RowData } from '../models/models'
import { selectCurrentToken } from '../features/authSlice'
import { RootState } from '../store'

interface resType{
    documents:[], 
    documentRange: {
        total:number
    },
    errors:number
    length:number
}


export const vesselsApi = createApi({
    
    reducerPath : "vesselsApi",
    baseQuery : fetchBaseQuery({baseUrl : "https://demosrv04.vargroup.gr:7443/"
    ,
    prepareHeaders: (headers, {  getState, endpoint}) => {
        const token = (getState() as RootState).auth.token
        const user = (getState() as RootState).auth.user
        headers.set('token', `${token}`)
        headers.set('user', `${user}`)
        return headers
    }
    }),
    endpoints : (builder) => ({
        getAllVessels : builder.query({
            query : () => "api/vessels",
            transformResponse:(response: resType) =>{
                return response.documents
               }
        }),
        getVessel : builder.query({
            query : (id) => `api/vessels/${id}`
        }),
        getVesselByCode : builder.query({
            query : (code) => `api/vessels/code/${code}`,
            transformResponse:(response: RowData[]) =>{
                return response[0]
               }
        })
    })
})




export const {useGetAllVesselsQuery,useGetVesselQuery,useGetVesselByCodeQuery} = vesselsApi

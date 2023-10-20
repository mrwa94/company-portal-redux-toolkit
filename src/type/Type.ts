import { ThunkDispatch } from '@reduxjs/toolkit'
import CompaniesSlice, { fetchCompany, fetchData } from '../features/CompaniesSlice'

export type RootState = {
  companiesReducer: ReturnType<typeof CompaniesSlice>
}

export type company = [
  id : number ,
  login : string ,
  avatar_url : string 
]

export type companyType = {
  data: []
  isLoading: boolean
  error: null | string
  searchTerm: string
  singleCompany: null
}
export type fetchCompaniesPendingAction = ReturnType<typeof fetchData.pending>
export type fetchCompaniesFulfilledAction = ReturnType<typeof fetchData.fulfilled>
export type fetchCompaniesRejectedAction = ReturnType<typeof fetchData.rejected>
//for Company details
export type fetchCompanyPendingAction = ReturnType<typeof fetchCompany.pending>
export type fetchCompanyFulfilledAction = ReturnType<typeof fetchCompany.fulfilled>
export type fetchCompanyRejectedAction = ReturnType<typeof fetchCompany.rejected>

export type searchCompanyAction = {
  type: 'companies/searchCompany'
  payload: string
}
export type companiesAction =
  | fetchCompaniesPendingAction
  | fetchCompaniesFulfilledAction
  | fetchCompaniesRejectedAction
  | fetchCompanyPendingAction
  | fetchCompanyFulfilledAction
  | fetchCompanyRejectedAction
  | searchCompanyAction
  

//dispatch
export type companiesDispatch = ThunkDispatch<RootState, void, companiesAction>

import { company } from './../type/Type';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { companyType, searchCompanyAction } from '../type/Type'

//Fetch  All data
export const fetchData = createAsyncThunk('Companies/fetchData', async () => {
  const response = await fetch('https://api.github.com/organizations')
  const data = await response.json()
  return data
})


//Fetch single data by id 
export const fetchCompany = createAsyncThunk('Companies/fetchData', async (id :number) => {
  const response = await fetch(`https://api.github.com/orgs/${id}`)
  const data = await response.json()
  return data
})

const initialState: companyType = {
  data:[] ,
  isLoading: false,
  error: null,
  searchTerm: '',
  singleCompany : null
}

const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    //Logic
    searchCompany: (state, action) => {
      state.searchTerm = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    //before fetch
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true
      })
      // when fetching
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      // when failed feted
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message || ' some error happened '
      }) 
  /// for fetch  single company details 
 


  }
})
export const { searchCompany } = companiesSlice.actions
export default companiesSlice.reducer

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography  , Box} from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchCompany } from '../features/CompaniesSlice'
import { RootState, companiesDispatch } from '../type/Type'

const CompanyDetails = () => {
  const { id } = useParams()
  const dispatch: companiesDispatch = useDispatch()
  const { singleCompany, isLoading, error } = useSelector(
    (state: RootState) => state.companiesReducer
  )

  useEffect(() => {
    dispatch(fetchCompany(Number(id)))
  }, [dispatch, id])

  console.log(singleCompany)

  return (
    <div>
      <Typography variant="h2">Company Details </Typography>
      <Box>
        <Typography variant='h6'>
     
        </Typography>

      </Box>
    </div>
  )
}

export default CompanyDetails

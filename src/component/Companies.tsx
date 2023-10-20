import { useEffect, ChangeEvent} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { Grid, Container ,Typography } from '@mui/material'
import { RootState, companiesDispatch } from '../type/Type'
import { fetchData, searchCompany } from '../features/CompaniesSlice'
import CardCompany from './CardCompany'
import SearchCompany from './SearchCompany'
import { Link } from 'react-router-dom'

const Companies = () => {
  const { data, isLoading, error ,searchTerm } = useSelector((state: RootState) => state.companiesReducer)
  const dispatch:companiesDispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])


  const handleSearch = (event : ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)  
  dispatch(searchCompany(Number(event.target.value)))
 }
  //search bar value update 
   const filterCompanies = searchTerm ? data.filter((company)=> company.id === searchTerm) : data;

  return (
    <div >
      <header >
      <Typography
        variant="h2"
        paddingTop={5}
        marginBottom={5}
        display={'flex'}
        justifyContent={'center'}>
        Company Portal
      </Typography>
      <SearchCompany value= {searchTerm} handleSearch={handleSearch} />
      </header>
      {isLoading && <BeatLoader className='spinner' size={100} color="#36d7b7" />}
      {!isLoading && error ? <p>{error}</p> : null}
      {!isLoading && data.length ? (
        <Container sx={{bgcolor:" #fff" , borderRadius:"20px"}}>
          <Grid
            item
            p={4}
            container
            spacing={5}
            display={'flex'}
            gap={4}
            marginTop={5}
            rowSpacing={5}
            flexDirection={'row'}
            justifyContent={'center'}
            columnGap={5}>
            {filterCompanies.length>0 &&
             filterCompanies.map((company) => (
              <CardCompany key={company.id} id={company.id} login={company.login} companyImg={company.avatar_url} link={`/:${company.id}`}/>
                
              ))}
               
          </Grid>
        </Container>
      ) : null}
    </div>
  )
}
export default Companies

import {ChangeEvent  } from 'react'
import {Container, FormGroup, FormControl, InputLabel, Input, Typography } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface searchDetails {
  value: any
  handleSearch: (event : ChangeEvent<HTMLInputElement>) => void
}
const SearchCompany = (props:searchDetails) => {
  return (
    <Container maxWidth="sm">
      <FormGroup>
        <FormControl sx={{ borderRadius: '20px', bgcolor: ' #fff' }}>
          <InputLabel>
            <SearchRoundedIcon sx={{ fontSize: '25px' }} />
            Search about companies
          </InputLabel>
          <Input
            type="text"
            value={props.value}
            onChange={props.handleSearch}></Input>
        </FormControl>
      </FormGroup>
    </Container>
  )
}
export default SearchCompany

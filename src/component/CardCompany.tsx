import { CardContent, Card, CardMedia, Typography, CardActionArea, Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface companyDetails {
  id: number
  login: string
  companyImg: string
  link: string
}
const CardCompany = ({ id, login, companyImg, link }: companyDetails) => {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#eeeeee' }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={companyImg} alt="green iguana" />
        <CardContent>
          <Typography variant="h6">{id}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {login}
          </Typography>

          <Link to={link}>
            <Button variant="outlined"> See details</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default CardCompany

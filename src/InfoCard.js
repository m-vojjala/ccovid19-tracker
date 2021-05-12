import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'300px',
    height:'150px',
    border:'solid #F0F8FF	',
    borderRadius:'4%',
    marginLeft:'2%',
    marginTop:'2%',
    marginBottom:'2%'
  },
  title: {
    fontSize: 20,
  },
  // isRed:{
  //   color:'red'
  // }
});

export default function InfoCard(props){
  console.log(props)
  const classes = useStyles();
  return (<Card style={{backgroundColor:props.color,color:'white'}} className={classes.root}>
    <CardContent>
      <Typography className={classes.title}  gutterBottom>
        {props.title}
      </Typography> <Typography className={classes.title}  gutterBottom>
        {props.total}
      </Typography>
    </CardContent>
  </Card>)
}
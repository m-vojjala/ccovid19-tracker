import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'300px',
    height:'150px'
  },
  title: {
    fontSize: 14,
  },
});

export default function InfoCard(){
  const classes = useStyles();
  return (<Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
    </CardContent>
  </Card>)
}
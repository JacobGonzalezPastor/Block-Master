import { AppBar, Button, Container, IconButton, TextField} from '@mui/material';
import { styled } from '@mui/styles';


export const MyAppBar = styled(AppBar)({
    background: '#000000'
    
    
});
export const MyIconButton = styled(IconButton)({
    background: '#FED941',
    border: 0,
    borderRadius: 3,
    color: 'white',
    marginLeft: 25
});

export const MyTextField =styled(TextField)({
    borderRadius: '5px',
    background: 'white',
    marginLeft: '25px',
    marginRight: '25px',
});

export const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 25,
    padding: '0 30px',
});

export const MyButton2 = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 25,
    padding: '0 30px',
});

export const MyContainer = styled(Container)({
    alignItems: 'center',
    paddingTop: '150px',
});
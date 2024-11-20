import styled from 'styled-components'

export const ButtonItem = styled.li`
margin: 10px;`

export const Button = styled.button`
width: 100px;
height: 30px;
border-radius: 20px;
background-color: ${props => (props.active ? '#db1c48' : 'transparent')};
border: solid 2px #db1c48;
color: ${props => (props.active ? '#ffffff' : '#db1c48')}`

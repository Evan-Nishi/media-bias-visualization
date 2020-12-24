import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: white;
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
    height: 100%;
    border: 3px solid;
    border-color: #0080FF;
    padding: 15px;
    box-shadow: 10px 15px #888888;
    transition: all 0.5s ease-in-out;
    &:hover{
        transistion: all 0.5s ease-out;
        box-shadow: 15px 20px #888888;
    }
`

export default function Card(props){
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
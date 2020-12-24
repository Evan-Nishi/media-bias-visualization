import Footer from './Footer'
import styled from 'styled-components'
import Head from 'next/head'

export const Wrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overlfow-x: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
`

function Layout(props) {
    return(
        <Wrapper>
            <Head>
                <title>Media Partisianship</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
            </Head>
            <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                <br/>
                <div>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </Wrapper>
    )
}

export default Layout
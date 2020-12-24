import React from 'react'
import Layout from '../components/Layout'
import Chart from 'react-google-charts'
import Card from '../components/Card'

export default function Index(){
    return(
        <Layout>
            <h1>Media Bias v Reliability v Viewership</h1>
            <br/>
            <Card>
                <p>
                    This chart is an extention of the <a href="https://www.adfontesmedia.com/interactive-media-bias-chart-2/">ad fontes media chart</a>, which in addition to showing the reliability and partisianship of media websites, also shows viewership.
                    This graph doesn't take into account tv viewer statistics, and only has website statistics from the months of 11/2020-12/2020.
                    Data for reliability and bias was taken from <a href="https://www.adfontesmedia.com/">ad fontes media</a>.
                    The raw data used in the graph can be found <a href="./data.csv">here</a>.
                </p>
            </Card>
            <br/>
            <br/>
            <Card>
                <Chart
                    chartType="BubbleChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/1nbXs068fIUllVtV5OODayEZZds8T7sL2BcxCEiGpZBQ/edit#gid=555083803"
                    width={'70vw'}
                    height={'80vh'}
                    options={{
                        hAxis:{title: 'politcal bias', format:'short'},
                        vAxis:{title: 'reliability', format:'decimal'},
                        colorAxis: {colors:['blue','white','red']},
                        bubble: {textStyle: {opacity: 0}}
                    }}
                />
                Data last collected: 12/14/2020
            </Card>
        </Layout>
        )
}
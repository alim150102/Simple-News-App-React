import React from 'react'
import Axios from 'axios'
import './News.css'
import Card from '../card/Card'
class News extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newsData : []
        }
    }

    componentDidMount(){
        Axios.get(`http://newsapi.org/v2/top-headlines?country=id&apiKey=e08e09fb9e124213a38fb699983aa9cb`)
        .then(res => {
            console.log(res)
            const articles = res.data.articles.slice(0, 4)
            .map(article => {
                return article
            })
            this.setState({newsData : articles})
            console.log(articles);
            
        })
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.newsData);

        let article = this.state.newsData.map(data => {
            return <Card 
            title = {data.title}
            description = {data.description}/>
        })
        return(
            <div>
                <div className='body'>
                    <h2 className='newspage'>Indonesian News Update</h2>
                    {article}
                </div>
            </div>
        )
    }
}

export default News
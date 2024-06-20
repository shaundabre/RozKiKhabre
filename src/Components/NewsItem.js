import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
        <img className="card-img-top" src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2qcHTz-_x_RkT8uOJqcAvklXR9vPEX4yBQ&s" : imageUrl} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p class="card-text"><small class="text-muted">By {!author?"Unkown":author} on {new Date(date).toGMTString()} </small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark"  style={{ cursor: 'pointer', color: 'white' }}>Read More</a>
    </div>
    </div>
      </div>
    )
  }
}

export default NewsItem

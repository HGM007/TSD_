import './index.css'


const authorcard = props=>{
    const {authorcardItems} = props
    const {no,author} = bookcardItems   // no=number
    return (
        <li className='author-card'>
            <h1 className='author-card-heading'>No : {no}</h1>
            <div className='main-author-container'>
            <div className='author-container'>
                <p className='author'>books : {author.books}</p>
                <p className='author'>Rating: {author.rating}</p>
            </div>
            
            </div>
        </li>
    )

}


export default authorcard
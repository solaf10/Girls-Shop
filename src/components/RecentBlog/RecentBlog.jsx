import './RecentBlog.css'

const RecentBlog = ({blogTitle ,publisherDate , publisherName}) => {
  return (
    <div className='recent-one-blog' >
      <p className='blog-name'>{blogTitle}</p>
      <div className='publisher-name-and-date'>
          <p>{publisherName}</p>
          <p>{publisherDate}</p>
      </div>
    </div>
  )
}

export default RecentBlog

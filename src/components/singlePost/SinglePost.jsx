import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
<img src=" https://images.pexels.com/photos/4115012/pexels-photo-4115012.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singlePostImg"/>
  <h1 className="singlePostTitle">
  Lorem ipsum dolor sit amet
  <div className="singlePostEdit">
  <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
  <i className="singlePostIcon fa-solid fa-trash-can"></i>
  </div>
  </h1>
  <div className="singlePostInfo">
  <span className="singlePostAuthor">Author: <b>Tanya</b></span>
  <span className="singlePostDate">1 hour ago</span>
  </div>
  <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Est ultricies integer quis auctor elit sed vulputate mi sit.
    Molestie nunc non blandit massa enim nec. Morbi leo urna molestie 
    at elementum eu facilisis. Nunc faucibus a pellentesque sit amet 
    porttitor eget dolor morbi. Sit amet volutpat consequat mauris nunc 
    congue nisi vitae suscipit. Morbi leo urna molestie at elementum.
     Nisl condimentum id venenatis a condimentum vitae. Duis at tellus
      at urna condimentum mattis. Vel facilisis volutpat est velit egestas.
       Tincidunt dui ut ornare lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Est ultricies integer quis auctor elit sed vulputate mi sit.
         Molestie nunc non blandit massa enim nec. Morbi leo urna molestie 
         at elementum eu facilisis. Nunc faucibus a pellentesque sit amet 
         porttitor eget dolor morbi. Sit amet volutpat consequat mauris nunc 
         congue nisi vitae suscipit. Morbi leo urna molestie at elementum.
          Nisl condimentum id venenatis a condimentum vitae. Duis at tellus
           at urna condimentum mattis. Vel facilisis volutpat est velit egestas.
            Tincidunt dui ut ornare lectus.
  </p>
</div>
    </div>
  )
}

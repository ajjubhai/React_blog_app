import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>

        <img src="https://picsum.photos/200" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, aperiam architecto, praesentium suscipit sed nostrum dolores magni tenetur fugit maiores aspernatur repellendus reiciendis asperiores neque cupiditate quasi, fuga debitis omnis!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" topIcon fa-brands fa-square-facebook"></i>
          <i className=" topIcon fa-brands fa-square-twitter"></i>
          <i className=" topIcon fa-brands fa-square-pinterest"></i>
          <i className=" topIcon fa-brands fa-square-instagram"></i>

        </div>
      </div>

    </div>
  )
}

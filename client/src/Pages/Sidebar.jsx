import "../Styles/sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebar">
           <div className="sidebaritems">
                <span className="sidebartopics">ABOUT ME</span>      
                
                <img 
                src="https://cdn.pixabay.com/photo/2019/10/16/17/57/in-the-fall-4555052_640.jpg"
                alt=""/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora 
                    ab perferendis nesciunt tempore voluptatum dolore inventore mollitia dignissimos exercitationem suscipit voluptates porro, itaque veniam sequi praesentium ad, corrupti aliquam.
                </p>
           </div>

           <div className="sidebaritems">
                <span className="sidebartopics">CATEGORIES</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistnames">Life</li>
                    <li className="sidebarlistnames">Sports</li>
                    <li className="sidebarlistnames">Technologies</li>
                    <li className="sidebarlistnames">Music</li>
                    <li className="sidebarlistnames">Styles</li>
                    <li className="sidebarlistnames">Cinemas</li>
                </ul>
           </div>

           <div className="sidebaritems">
                <span className="sidebartopics">FOLLOW US</span>
                <div className="sidebaricons">
                    <i className="sideicons fa-brands fa-square-facebook"></i>
                    <i className="sideicons fa-brands fa-square-instagram"></i>
                    <i className="sideicons fa-brands fa-linkedin"></i>
                    <i className="sideicons fa-brands fa-square-github"></i>
                </div>
           </div>
        </div>
    )
}

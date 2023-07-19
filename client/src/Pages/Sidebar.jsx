import "../Styles/sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebar">
           <div className="sidebaritems">
                <span className="sidebartopics">ABOUT ME</span>      
                
                <img className="sidebarimage" 
                src="https://media.istockphoto.com/id/1448474701/photo/graphic-designer-smiles-as-she-works-on-a-laptop-in-an-office.webp?b=1&s=612x612&w=0&k=20&c=JFR5nH-aKvlKWR9H9zj6ml6bH5vyR7N_t-MxvBbJexs="
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

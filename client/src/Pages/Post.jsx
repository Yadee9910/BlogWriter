import "../Styles/post.css";

export default function Post(){
    return(
        <div className ='post'>
            <img className="postimage"
            src="https://plus.unsplash.com/premium_photo-1663852297433-c6634f7ef172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt=""/>

            <div className="postcontainer">
                <div className="postinfo">
                    <span className="postcategory">Music</span>
                    <span className="postcategory">Life</span>
                </div>

                <span className="postitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />

                <span className = "postdata">1 hour ago</span>
            </div>
            <div className="postdescription">
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Suscipit maxime facere
                officia, ipsum eligendi exercitationem. 
                Blanditiis expedita eligendi eaque reiciendis 
                adipisci dolor repellendus laborum. 
                Expedita quibusdam facere est nonpraesentium?
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Suscipit maxime facere
                officia, ipsum eligendi exercitationem. 
                Blanditiis expedita eligendi eaque reiciendis 
                adipisci dolor repellendus laborum. 
                Expedita quibusdam facere est nonpraesentium?
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Suscipit maxime facere
                officia, ipsum eligendi exercitationem. 
                Blanditiis expedita eligendi eaque reiciendis 
                adipisci dolor repellendus laborum. 
                Expedita quibusdam facere est nonpraesentium?
            </div>

        </div>
    )

};
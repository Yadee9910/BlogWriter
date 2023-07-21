import "./Styles/header.css"

function Header (){
    return(
        <>
       <div className='top'>
            <div className="top-left">
                <i className="topicons fa-brands fa-square-facebook"></i>
                <i className="topicons fa-brands fa-square-instagram"></i>
                <i className="topicons fa-brands fa-linkedin"></i>
                <i className="topicons fa-brands fa-square-github"></i>
            </div> 

            <div className="top-center">
                <i className="topsearch fa-solid fa-magnifying-glass"></i>
            </div> 

            <div className="top-right">
                <ul className="toplistitems">
                    <li className="topitems">HOME</li>
                    <li className="topitems">ABOUT</li>
                    <li className="topitems">CONTACT</li>
                    <li className="topitems">WRITE</li>
                    <li className="topitems">LOGIN</li>
                </ul>
                <img className="topimage"
                src="https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""/>
            </div>      
       </div>

<div clasName= "lowerheader">
    <div className="lowerheadertitle">
        <span className="headertitle01">Shout out your thoughts</span>
        <span className="headertitle02">BlogWriter</span>
    </div>

    <img
    className="lowerheaderimage"
    src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60s"
    alt=""/>
    
</div>
</>
    )
}
export default Header;
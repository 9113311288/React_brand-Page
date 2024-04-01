import "../Body.css";
const Body = () => {
    return (
        <>
            <div className="mybody">
                <img src="shoe_image.png" alt="shoe image" />
                <div className="contents">
                    <h1>Your Feet Deserves The Best.</h1>
                    <h5>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h5>
                <div className="Content_button">
                    <button className="one">Click</button>
                    <button className="two">Category</button>
                </div>
                <div className="content_footer">
                <h7>Also Available in</h7>
                <div className="Footer_name">
                    <img src="flipkart.png"/>
                    <img src="amazon.png"/>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Body;
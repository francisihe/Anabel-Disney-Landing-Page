import './nav-links.styles.css'

function Navlinks() {

    return(
        <div className='nav-side'>
            <div className="nav-links" id="nav-id">
                    <li>Home</li>
                    <li>Episodes</li>
                    <li>Cast</li>
                    <li>Plot</li>
                    <li>Disney Club</li>
            <button className='nav-btn'>
                Create Account
            </button>
            
            </div>
                

        </div>
    );
};

export default Navlinks;
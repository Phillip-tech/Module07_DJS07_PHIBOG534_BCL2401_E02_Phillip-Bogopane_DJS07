
/*Define a functional component called Header*/
export default function Header() {
    /* Render the JSX elements for the header*/
    return (
        <header className="header">
            <img 
                src="src\images\troll-face.png"  /*Image source for the header*/
                className="header--image"  /* Class for the image*/
            />
            <h2 className="header--title">Meme Generator</h2>  // Title for the header
            <h4 className="header--project">React Course - Project 3</h4>  // Project information
        </header>
    );
}
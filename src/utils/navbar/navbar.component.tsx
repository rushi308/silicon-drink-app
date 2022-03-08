import logo from '../../assets/logo.png';

const Navbar = (props: any) => {
    return (
        <>
            <div className="navbar navbar-dark bg-theme shadow-sm">
                <div className="container">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <img className="img-responsive " width="50" height="50" src={logo} alt="logo"></img> &nbsp;
                        <strong className="font-primary-color">Drinks</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </>
    );
};
export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link} from 'react-router-dom'
import ShopingCart from './ShopingCart';
import { useState } from 'react';
import HeaderVibe from "../../assets/Images/Global-components-assets/Header-vibe.png"
import Huellita from "../../assets/Images/Global-components-assets/Huellita-logo.png"
function Header({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts}) {
  
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
  const handleOpenOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };
  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };
  return (
    <>
    <header> 
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" id="NavBar-nav"> {/*Need fixed top*/}

          <Container fluid>
            <Navbar.Brand id="header__brand">
             <Link to="/" id="header-brand__tittle">DalpetLovers <img src={Huellita} id="icon"/></Link>
            </Navbar.Brand>

            <div className="CanvasPosition">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="butt-nav" onClick={handleOpenOffcanvas}/>
              {/* Offcanvas condition to no repeat open */}
              <Navbar.Offcanvas className="offcanvas-navbar"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={isOffcanvasOpen}
                onHide={handleCloseOffcanvas}>

                <Offcanvas.Header closeButton id="offcanvas-body-act">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="offcanvas-body-act-e"><img src={Huellita} id="offcanvas-huellita"/></Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body id="offcanvas-body">
                  <Nav className="justify-content-end flex-grow-1 pe-3 " id="NavBar-colors">
              {/* link is used to get a SPA - single page aplication (if i use element a page have a reload)*/}
                      <Nav.Link><Link to="/">Acerca de</Link></Nav.Link>
                      <Nav.Link><Link to="/">Para gatos</Link></Nav.Link>
                      <Nav.Link as={Link} to={"/components/Para-perros/DogProducts"}>Para perros</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div class="Shop-icon-and-count">
                {/* Shoping cart */}
                <ShopingCart 
                onClick={handleOpenOffcanvas}
                show={isOffcanvasOpen}
                onHide={handleCloseOffcanvas}
                AllProducts={AllProducts}
                setAllProducts={setAllProducts}
                Total={Total} 
                setTotal={setTotal} 
                CountProducts={CountProducts}
                setCountProducts={setCountProducts}
                />
                <p id="count-products">{CountProducts}</p>
              </div>
            </div>
          </Container>
        </Navbar>
      ))}
    </header>
    <img src={HeaderVibe} id="Header__vibe"/>
    </>
  );
}

export default Header 
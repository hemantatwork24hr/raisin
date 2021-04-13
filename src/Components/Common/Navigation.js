import { Navbar, Nav, Container, bootstrap } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='reponsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Dashboard</Nav.Link>
                            <Nav.Link href='/rooms'>Rooms</Nav.Link>
                            <Nav.Link href='/guests'>Guests</Nav.Link>
                            <Nav.Link href='/billings'>Billings</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
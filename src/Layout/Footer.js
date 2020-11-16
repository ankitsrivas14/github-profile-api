import React from "react"
import {Container} from "reactstrap"
 
const Footer = () => {
    return(
        <Container fluid className="text-center bg-info text-white text-uppercase fixed-bottom p-3" tag="footer">
            Developed and Maintained by <a className="text-white font-weight-bold" href="https://github.com/ankitsrivas14">Ankit Srivastava</a>.
        </Container>
    )
}

export default Footer
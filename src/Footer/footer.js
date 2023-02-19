import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(<>
        <footer class="text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Sam_6710" role="button" target="_blank"><i class="fa fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.es" role="button" target="_blank"><i class="fa fa-google"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/samuel-gómez-pérez-23269323a/" role="button" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/sam6710" role="button" target="_blank"><i class="fa fa-github"></i></a>
                </section>
            </div>
            <div class="text-center p-3">
                © 2020 Copyright:
                <a class="text-white" href="https://github.com/sam6710"> Samuel Gómez Pérez</a>
            </div>

        </footer>
    </>)
}

export default Footer;
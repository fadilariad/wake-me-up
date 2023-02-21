import {Container} from 'reactstrap';
import {NavMenu} from './nav-menu/NavMenu';

export function Layout(props) {
    return (
        <div>
            <NavMenu/>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

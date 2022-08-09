// @ts-ignore
import graphqlLogo from '../../assets/pictures/graphqlLogo.png';

export const Header = () => (
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <a href="/client/public" className="navbar-brand">
                <span className="d-flex">
                    <img src={graphqlLogo} alt="graphql logo" className="mr-2"/>
                    <h2>GraphQL Project</h2>
                </span>
            </a>
        </div>
    </nav>
);

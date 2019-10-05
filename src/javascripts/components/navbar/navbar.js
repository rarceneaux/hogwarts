import util from '../../helpers/util';

import './navbar.scss';

const loadNavbar = () => {
  const domString = `
    <nav>
    <a href="#" class="brand">Hogwarts</a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
`;
  util.printToDom('nav-container', domString);
};

export default { loadNavbar };

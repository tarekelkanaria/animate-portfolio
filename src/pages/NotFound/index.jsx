import './index.scss';
import notFoundIcon from '../../assets/images/page_not_found.svg';

const NotFound = () => {
  return (
    <article className="not-found">
      <h2>Page Not Found</h2>
      <img src={notFoundIcon} alt="Not found" />
    </article>
  );
};

export default NotFound;

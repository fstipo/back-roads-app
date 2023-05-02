import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;

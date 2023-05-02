const PageLink = (props) => {
  const { href, itemClass, text } = props;
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;

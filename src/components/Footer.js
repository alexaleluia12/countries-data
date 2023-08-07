import '../styles/Footer.css';

const copyRight = new Date().getFullYear();
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
    <a id="bnt-go-top" href="#top"><span id='innerUp'>&#8593;</span></a>
  </footer>
)

export default Footer;
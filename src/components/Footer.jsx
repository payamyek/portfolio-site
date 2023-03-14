import { getRelativeDate } from '../utils/dateUtils';

const Footer = (props) => (
  <footer className="flex flex-col md:flex-row my-4 mt-auto flex-wrap">
    <div className="flex-1">
      <small>Last updated {getRelativeDate(new Date(props.lastUpdated))}</small>
    </div>
    <div>
      <small>&copy; Copyright 2023, Payam Yektamaram</small>
    </div>
  </footer>
)

export default Footer;
import portfolioSvg from "./portfolio.svg";
import "./portfolio.css";
import { Table } from "react-bootstrap";
const PortFolio = () => {
  return (
    <div className="portfolio">
      <h3>Client Most Likely to churn</h3>
      <p>Ranked by order of priority to addresses </p>
      <Table responsive>
        <thead>
          <tr>
            <th>RANK</th>
            {/* {Array.from({ length: 12 }).map((_, index) => ( */}
            <th>ACCOUNT</th>
            <th>STAGE</th>
            <th>ACCOUNT HEALTH</th>
            <th>CHURN SCORE</th>
            <th>MRR</th>
            <th>LAST SEEN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Poor</td>
            <td>92</td>
            <td>$280</td>
            <td>22 hourse ago</td>
          </tr>
          <tr>
            <td>#2</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
          <tr>
            <td>#3</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
          <tr>
            <td>#4</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
          <tr>
            <td>#5</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
          <tr>
            <td>#6</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
          <tr>
            <td>#7</td>
            <td>Acme</td>
            <td>Trial</td>
            <td>Rich</td>
            <td>72</td>
            <td>$180</td>
            <td>6 hourse ago</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PortFolio;

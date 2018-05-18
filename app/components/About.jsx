var React = require('react');

// export default class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1 className="text-center">About</h1>
//         <p>This is a weather application built on React.</p>
//       </div>
//     );
//   }
// };

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This a weather application built on React.</p>
    </div>
  );
};

module.exports = About;

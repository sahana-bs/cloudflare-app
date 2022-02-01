// function App() {
//   return (
//     <div>
//       <span>Hello, this is Sahana Basapathi :)</span>
//     </div>
//   );
// }
//
// export default App;
import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
    </Router>
  );
}

export default App;

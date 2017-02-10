var React = require("react");
var {Link} = require('react-router');

var Examples = (props) =>
{
return (
<div>
  
  <h1 className="text-center page-title">Example</h1>
<p>Here are a few example locations to try out: </p>

<ol>
  <li>
  <Link to="/?location=rawalpindi"> 
 Rawalpindi, Pakistan  
     </Link>

  </li>

  <li>
       
  <Link to="/?location=karachi"> 
 Karachi, Pakistan  
     </Link>
  
  </li>
</ol>

</div>
)
};

module.exports = Examples;

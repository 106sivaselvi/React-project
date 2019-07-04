import React from 'react';
class Photo extends React.Component{
render() {
return (
<div className="second">
<img src={this.props.pic}width="200px"height="100px"/>
<p>Cost:{this.props.name}</p>
<a href={this.props.links}>Explore</a>
</div>
)
}
}
export default  Photo;
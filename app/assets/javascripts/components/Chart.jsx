

class Chart extends React.Component {
    render() {
    	let margin = this.props.margin 
        return (
            <svg width={this.props.width+100} height={this.props.height + 100} >
               <g transform = {'translate(' + margin.left + ',' + margin.top + ')' }>
                   {this.props.children}
               </g>
            </svg>
        );
    }
}

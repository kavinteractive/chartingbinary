
class Bar extends React.Component {


  render() {
    
    let props = this.props ;

    let data =  props.data.map(function(d) {return d.y;});

    let yScale = d3.scale.linear().domain([0, d3.max(data)]).range([0, props.height]);

    let xScale = d3.scale.ordinal().domain(d3.range(props.data.length)).rangeRoundBands([0, props.width], 0.05);

    let bars = data.map(function(point, i) {

                 let height = yScale(point),
                     y      = props.height - height,
                     width  = xScale.rangeBand(),
                     x      = xScale(i);

                return (
                  <Rect color={props.color} height={height} width={width} x={x} y={y} key={i} />
                )
              });

    return (
          
          <g>{bars}</g>
          
    );
  }
}

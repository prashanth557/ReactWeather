
var Greet = React.createClass({
    getDefaultProps:function()
    {
      return{
      name : "Prashanth",
      message: "This is Default message"
      };
    },
    getInitialState:function()
    {
      return{
          name: this.props.name
      };
    },
    render:function()
    {
      return(
        <div>
          <h1>Hello {this.state.name}!</h1>
          <h2>{this.props.message}</h2>
        </div>
      );
    }
  });
  var GreetForm = React.createClass({
    onButtonClick:function(e)
    {
       e.preventDefault();
       var name= this.refs.name.value;
       this.setState({
            name:name
       });
    },
    render()
    {
      return(
        <div>
        <Greet/>
        <form onSubmit={this.onButtonClick}>
         <input type="text" ref="name"/>
         <button>Click Me!</button>
        </form>
        </div>
      );
    }
  });
  ReactDOM.render(
    <GreetForm name="Bunny"/>,
    document.getElementById('app')
  );
  
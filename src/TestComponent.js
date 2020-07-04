import React,{Component} from 'react' 
class TestComponent extends Component {
    state={
        name:'',
        firstname:'',
        lastname:''
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const form=new FormData(event.target)
        this.setState({name:form.get("input")})
    }
    changeHandeler= event =>{
        const {target:{value,name}}=event;
        this.setState({[name]:value})
    }
    render() {
        return(
        <div>
            <form onSubmit={this.onSubmit}>
                <input name="name" type="text" placeholder="whats your name" value={this.state.name} onChange={this.changeHandeler}/>
                <button>Send</button>
            </form>
            {`${this.state.name}`}
        </div>
        )
    }
        
}
export default TestComponent
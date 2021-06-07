
import React, { Component } from 'react';
class Message extends Component {

    render() {
        return (<div className='container'>
            <p>{this.props.message.text}</p>
            <p>{this.props.message.level}</p>
        </div>);
    }
}
// const mapStateToProps = (state) => {
//     return {
//         message: state.error.errorMesssage
//     }
// }
// export default connect(mapStateToProps)(Message);
export default Message;
// tsrcfull
import * as React from "react";

interface IAppProps {
  title?: string;
}

interface IAppState {
  number: number;
}

 class App extends React.Component<IAppProps, IAppState> {
  //contructor : bắt buộc có props : kiểu dữ liệu
  constructor(props: IAppProps) {
    //bắt buộc có từ khóa supper(props)
    super(props);
      // Khai báo state
    this.state = { 
      //giá trị khởi tạo
      number: 1,   // state hoặc props thay đổi thì component sẽ bị ReRender
    };
  }

  handleOnClick = () => {
    // gọi setState thì sẽ gọi lại components
    this.setState((prevState: IAppState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    return (
      <>              
                            {/* đây là giá trị khởi tạo ở trên  */}
        <h1>{this.props.title} - {this.state.number}</h1>
        <div>ClassComponent</div>
        <button onClick={this.handleOnClick}>Plus</button>
      </>
    );
  }
}
export default App;
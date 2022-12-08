import React from 'react'
import '../style/styleHome.css'
function Home() {
  return (
    <div className="content">
    <div className="row">
        <div className="col-3">
            <div className="">
                <div className="menu">The Driver</div>

                <div className="menu">The Walk</div>

                <div className="menu">The Return</div>

                <div className="menu">The End</div>
            </div>
        </div>

        <div className="col-6">
            <div className="body2">
                <h2>Solution Anywhere</h2>
                <p className="p1">
                Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã nguồn mở tại Chicago, Hoa Kỳ. 
                Công ty muốn làm cho sự hiện diện của mình trở nên phổ biến trên toàn thế giới bằng cách tạo ra một trang Web sẽ làm nổi bật các hoạt động được thực hiện bởi tổ chức. 
                Tổ chức cũng cung cấp tất cả các phần mềm có sẵn dưới dạng phần mềm miễn phí. 
                </p>
                <p className="animate__animated animate__bounce">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="" />
                </p>
            </div>
        </div>

        <div className="col-3 ">
            <div className="body3 animate__animated animate__backInRight">
                <h3>What ?</h3>
                <p>
                    The Pulpit Rock is a part of a mountain that looks like a pulpit.
                </p>
                <h3>Where?</h3>
                <p>The Pulpit Rock is in Norway</p>
                <h3>Price?</h3>
                <p>The walk is free!</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home
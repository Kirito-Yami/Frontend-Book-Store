const TodoData = (props) => {
    const {list} = props;

    return (
        <div className='todo-data'>
            {list.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>
                            <p>👋👋 Chào bạn, tôi là <strong>{item.name}</strong>!</p>

                            <p>👀 Tôi đam mê lập trình, đặc biệt là trong lĩnh vực phát triển website và ứng dụng di
                                động.</p>

                            <p>🌱 Hiện tại, tôi đang theo học ngành Công nghệ Thông tin và tập trung vào việc phát triển
                                website và ứng dụng di động.</p>

                            <p>💞️ Tôi luôn mong muốn tìm kiếm cơ hội hợp tác trong các dự án sáng tạo liên quan đến
                                website và ứng dụng di động.</p>

                            <p>📫 Bạn có thể tìm kiếm thông tin của tôi trên website: https://minhducnguyen.io.vn</p>

                            <p>😄 Ngoài lập trình, tôi cũng rất thích ca hát và chơi nhạc cụ – đó là cách tôi thư giãn và
                                sáng tạo!</p>

                            <p>⚡ Sở thích của tôi là viết mã ngắn gọn, dễ hiểu và hiệu quả – tối giản nhưng mạnh mẽ.</p>
                        </div>
                        <button className={"btn"}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}
export default TodoData;
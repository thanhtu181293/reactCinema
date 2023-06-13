import React, { Component } from 'react'
import NewsList from '../NewsList/NewsList';
import style from './Promotion.module.scss';

export default class Promotion extends Component {
    data = [
        {
            imgUrl: './images/News/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
            title: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
            description: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png',
            title: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
            description: 'Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg',
            title: '[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái',
            description: 'Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
            title: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
            description: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png',
            title: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
            description: 'Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg',
            title: '[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái',
            description: 'Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
            title: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
            description: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png',
            title: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
            description: 'Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.png',
            title: '[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái',
            description: 'Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png',
            title: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
            description: 'Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
    ]
    render() {
        return (
            <div className = {`${style.promotion}`}>
                <NewsList dataProvider = {this.data}/>
            </div>
        )
    }
}

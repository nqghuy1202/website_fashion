document.write(`
<div class="task-bar">
            <div class="top-left">
                <a href="introduce.html"><i class='fas fa-phone'></i><span>&nbsp;&nbsp;&nbsp;+84   123456789</span></a>
            </div>
            <div class="center">
                <a href="index.html"><img src="./assets/image/Logo-3.png" alt="" id="logo"></a>
            </div>
            <div class="top-right">
                <div class="header-search">
                    <form action="#" class="form-input">
                        <input type="text" placeholder="Tìm kiếm sản phẩm" class="search-input" value="">
                        <button type="button" class="header-search-bar">
                            <i class="search-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <div class="info">
                    <a href="introduce.html"><i class="fa-regular fa-heart"></i></a>
                    <a href="log-in.html"><i class="fa-regular fa-user"></i></a>
                    <a href="storage.html"><i class="fa-solid fa-bag-shopping"></i></a>
                </div>
            </div>
            <div class="nav">
                <div class="list">
                    <ul>
                        <li><a href="index.html">Trang chủ</a></li>
                        <li>|</li>
                        <li><a href="introduce.html">Giới thiệu</a></li>
                        <li id="dropdown"><a href="production-list.html">Các thương hiệu</a>
                            <div class="menu">
                                <ul>
                                    <li><a href="production-list.html">Brioni</a></li>
                                    <li><a href="production-list.html">Canali</a></li>
                                    <li><a href="production-list.html">Zegna</a></li> <br>
                                    <li><a href="production-list.html">Ravazzolo</a></li> <br>
                                    <li><a href="production-list.html">Hugo Boss</a></li> <br>
                                    <li><a href="production-list.html">Belluni</a></li>
                                    <li><a href="production-list.html">Adam</a></li>
                                </ul>
                            </div>
                        </li>
                        <li id="dropdown"><a href="production-list.html">Sản phẩm</a>
                            <div class="menu" id="menu-1">
                                <ul>
                                    <li><a href="production-list.html">Vest</a></li>
                                    <li><a href="production-list.html">Suit</a></li>
                                    <li><a href="production-list.html">Tuxedo</a></li>
                                    <li id="dropdown"><a href="production-list.html">Áo</a>
                                        <div class="menu" id="submenu">
                                            <ul>
                                                <li><a href="production-list.html">Áo thun trơn</a></li>
                                                <li><a href="production-list.html">Áo polo</a></li>
                                                <li><a href="production-list.html">Sơ mi tay ngắn</a></li>
                                                <li><a href="production-list.html">Sơ mi tay dài</a></li>
                                                <li><a href="production-list.html">Áo khoác</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id="dropdown"><a href="production-list.html">Quần</a>
                                        <div class="menu" id="submenu">
                                            <ul>
                                                <li><a href="production-list.html">Quần tây</a></li>
                                                <li><a href="production-list.html">Quần short</a></li>
                                                <li><a href="production-list.html">Quần jeans</a></li>
                                                <li><a href="production-list.html">Quần kaki</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="production-list.html">Giày tây</a></li>
                                    <li id="dropdown"><a href="production-list.html">Phụ kiện</a>
                                        <div class="menu" id="submenu">
                                            <ul>
                                                <li><a href="production-list.html">Vớ/Tất</a></li>
                                                <li><a href="production-list.html">Caravat</a></li>
                                                <li><a href="production-list.html">Quần lót</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="dropdown"><a href="production-list.html">Hệ thống cửa hàng</a>
                            <div class="menu" id="menu-2">
                                <ul>
                                    <li><a href="production-list.html">TP.Hồ Chí Minh</a></li>
                                    <li><a href="production-list.html">Hà Nội</a></li>
                                    <li><a href="production-list.html">Đà Nẵng</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="production-list.html">Chính sách đổi trả</a></li>
                        <li id="dropdown"><a href="production-list.html">Dịch vụ</a>
                            <div class="menu" id="menu-3">
                                <ul>
                                    <li><a href="production-list.html">Bảo hành</a></li>
                                    <li><a href="production-list.html">Đón khách hàng</a></li>
                                    <li><a href="production-list.html">Lấy số đo tại nhà</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="production-list.html">Khuyến mãi</a></li>
                    </ul>
                </div>
            </div>
        </div>
`);

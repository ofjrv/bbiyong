import './MyPage.css';

const menus = ['내 벌금 내역', '알림 설정', '프로필 수정', '로그아웃'];

export default function MyPage() {
  return (
    <div className="my-page">
      <h1 className="my-title">마이</h1>

      <div className="profile">
        <div className="avatar">R</div>
        <div>
          <p className="nickname">닉네임</p>
          <p className="email">example@mail.com</p>
        </div>
      </div>

      <ul className="menu-list">
        {menus.map((menu) => (
          <li key={menu} className="menu-item">
            <span>{menu}</span>
            <span className="arrow">›</span>
          </li>
        ))}
      </ul>

      <nav className="bottom-tab">
        <span>홈</span>
        <span>마이 그룹</span>
        <span className="active">마이</span>
      </nav>
    </div>
  );
}
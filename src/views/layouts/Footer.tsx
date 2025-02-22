import { MoonOutlined, LogoutOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Button, Menu, MenuProps } from 'antd';
import { requestSignout } from 'api/requests/requestAuth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { colorLight } from 'styles/colors';
import { NavBar, TabBar } from 'antd-mobile';
import { IoHome, IoSearch, IoCart, IoPersonCircleSharp, IoAccessibility } from 'react-icons/io5';
import { useUserInfoStore } from 'stores/userStore';
import { useAdminStore } from 'stores/authStore';

const tabBarCss = css`
  border-top: 1px solid ${colorLight.borderColor};
  padding: 6px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colorLight.primaryBgColor};
`;

const tabs = [
  {
    key: '/',
    title: '홈',
    icon: <IoHome />,
  },
  {
    key: '/content',
    title: '콘텐츠',
    icon: <IoSearch />,
  },
  {
    key: '/shopping',
    title: '쇼핑',
    icon: <IoCart />,
  },
  {
    key: '/mypage',
    title: '마이페이지',
    icon: <IoPersonCircleSharp />,
  },
];

const adminTabs = [
  {
    key: '/admin/post',
    title: '관리자페이지',
    icon: <IoAccessibility />,
  },
];

function Footer() {
  const [curPath, setCurPath] = useState(window.location.pathname); // key
  const navigate = useNavigate();
  const isAdmin = useAdminStore((state) => state.isAdmin);
  const handleLocationChange = () => {
    setCurPath(window.location.pathname);
  };

  useEffect(() => {
    // popstate 이벤트 : history 변경 감지 (뒤로가기, 앞으로가기)
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <TabBar
      css={tabBarCss}
      activeKey={curPath}
      onChange={(key) => {
        setCurPath(key as string);
        navigate(key as string);
      }}
    >
      {isAdmin
        ? [...tabs, ...adminTabs].map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))
        : tabs.map((item) => <TabBar.Item key={item.key} icon={item.icon} title={item.title} />)}
    </TabBar>
  );
}

export { Footer };

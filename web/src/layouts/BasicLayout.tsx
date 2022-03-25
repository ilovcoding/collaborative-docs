import { Layout } from 'antd';
import './BasicLayout.less';

const { Header, Content } = Layout;

export default function BasicLayout(props: any) {
    const { children } = props;

    return (
        <Layout>
            <Header className='header'>
                <img src={require('@/assets/logo.png')} alt="logo" width={36} height={36} />
                <span className='name'>云 文 档</span>
            </Header>
            <Content className='content'>
                {children}
            </Content>
        </Layout>
    );
}